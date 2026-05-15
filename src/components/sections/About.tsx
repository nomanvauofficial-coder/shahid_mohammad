"use client";

import { motion } from "framer-motion";
import ExternalImage from "@/components/ExternalImage";
import { CheckCircle2, Calendar, Users } from "lucide-react";

const aboutHighlights = [
  "Understanding Your Business",
  "In-Depth Keyword Research",
  "Customised Strategy Discussion",
  "Campaign Launch and Ongoing Updates",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative rotated background shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-3xl rotate-2" />

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <ExternalImage
                  src="https://shahidmohammad.com/wp-content/uploads/2024/11/Shahid-417x380.png"
                  alt="Shahid Mohammad - SEO Expert"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Trusted badge - Top Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute -top-4 -left-4 bg-white text-slate-800 rounded-2xl shadow-xl px-4 py-3 border border-emerald-100"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800 font-heading leading-tight">
                      Trusted by 100+
                    </p>
                    <p className="text-[10px] text-slate-500 leading-tight">
                      Businesses Worldwide
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Experience badge - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-emerald-500 text-white rounded-2xl shadow-xl p-5"
              >
                <p className="text-3xl font-bold font-heading">5+</p>
                <p className="text-sm font-medium opacity-90">Years of SEO</p>
                <p className="text-sm font-medium opacity-90">Experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-emerald-100">
              <Calendar className="w-3.5 h-3.5" />
              How I Help
            </div>

            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#001132] mb-6 leading-tight">
              Let Me Help You
              <span className="text-emerald-500"> Grow the Business</span>
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-sans">
              I begin by learning about your business, goals, and competitors
              during a discovery call. This allows me to create a tailored
              strategy, choose the right keywords, and give you an estimate of
              the timeline and investment to reach your goals.
            </p>

            {/* Highlight Items */}
            <div className="space-y-4 mb-8">
              {aboutHighlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 transition-colors duration-200">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <span className="text-slate-700 font-medium group-hover:text-emerald-600 transition-colors duration-200 font-sans">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Link */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors group font-sans"
            >
              Book a Discovery Call
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
