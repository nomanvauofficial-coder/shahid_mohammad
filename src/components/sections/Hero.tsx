"use client";

import { motion } from "framer-motion";
import ExternalImage from "@/components/ExternalImage";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Google Business Profile Optimization",
  "AI-Driven Search Strategy",
  "Local SEO That Converts",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30"
    >
      {/* Decorative blurred circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-50/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Available Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-emerald-100">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              Available for New Projects
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#001132] leading-tight mb-4">
              Shahid Mohammad
              <span className="block text-emerald-500 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.2em] mt-2">
                LOCAL SEO SPECIALIST
              </span>
            </h1>

            {/* Primary Paragraph */}
            <p className="text-slate-600 text-lg leading-relaxed mb-4 max-w-xl font-sans">
              I help service-based businesses worldwide become the most trusted
              choice on Google and AI search.
            </p>

            {/* Secondary Paragraph */}
            <p className="text-slate-500 leading-relaxed mb-8 max-w-xl font-sans">
              I&apos;m{" "}
              <strong className="text-slate-700">Shahid Mohammad</strong>, an
              AI-driven Local SEO Specialist based in Chattogram, Bangladesh. I
              optimize websites and Google Business Profiles (GBP) to rank higher
              on Google, Bing, and AI-driven platforms like ChatGPT and
              Gemini—driving targeted traffic and sustainable revenue growth.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="font-medium font-sans">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-lg font-semibold text-base transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 font-sans"
              >
                Get FREE Audit
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-emerald-500 text-slate-700 hover:text-emerald-600 px-8 py-3.5 rounded-lg font-semibold text-base transition-all duration-200 font-sans"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full blur-2xl opacity-20 scale-110" />

              {/* Circular Profile Image */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-emerald-100 shadow-2xl">
                <ExternalImage
                  src="https://shahidmohammad.com/wp-content/uploads/2025/04/Profile-picture.png"
                  alt="Shahid Mohammad - Local SEO Specialist"
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                />
              </div>

              {/* Floating Badge - Bottom Right */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-5 py-4 border border-emerald-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">🎯</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 font-heading">
                      500+ Keywords Ranked
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge - Top Left */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl px-5 py-4 border border-emerald-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">📈</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 font-heading">
                      100+ Clients Served
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
