"use client";

import { motion } from "framer-motion";
import { Search, BarChart3, Video, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understanding Your Business",
    description:
      "I begin by learning about your business, goals, and competitors during a discovery call",
    icon: Search,
  },
  {
    number: "02",
    title: "In-Depth Keyword Research",
    description:
      "I conduct thorough keyword research to find overlooked opportunities and analyze competitor data",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Customised Strategy Discussion",
    description:
      "During a video call, I share my keyword research and strategies for your SEO campaign",
    icon: Video,
  },
  {
    number: "04",
    title: "Campaign Launch and Ongoing Updates",
    description:
      "Once everything is finalized, I launch your campaign right away. You'll receive weekly updates to keep you informed",
    icon: Rocket,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const timelineVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export default function WorkingProcess() {
  return (
    <section id="process" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Visual Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative flex flex-col items-center">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.number} className="relative flex flex-col items-center">
                    <motion.div
                      variants={timelineVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      className="w-20 h-20 rounded-2xl bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center relative z-10"
                    >
                      <IconComponent className="w-8 h-8 text-emerald-600" />
                    </motion.div>
                    {/* Connector line */}
                    {index < steps.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: 48 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                        className="w-0.5 bg-emerald-200"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-emerald-500 font-semibold text-sm tracking-wider uppercase mb-3 font-heading">
              My Working Process
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#001132] mb-4">
              How I Deliver Real SEO Results
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              My results-driven approach guarantees positive outcomes. I create
              SEO strategies that deliver measurable growth in organic traffic.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {steps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    variants={stepVariants}
                    className="flex gap-5 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-slate-800 mb-1 group-hover:text-emerald-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
