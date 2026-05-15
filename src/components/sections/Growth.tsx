"use client";

import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight } from "lucide-react";

const stats = [
  { label: "Organic Traffic", value: "+245%", description: "Average increase for clients" },
  { label: "Keywords Ranked", value: "500+", description: "Top 10 positions achieved" },
  { label: "Client Retention", value: "95%", description: "Clients stay long-term" },
  { label: "Revenue Growth", value: "+180%", description: "Average client revenue increase" },
];

const progressData = [
  { month: "January", value: 20 },
  { month: "February", value: 35 },
  { month: "March", value: 55 },
  { month: "April", value: 75 },
  { month: "May", value: 90 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function Growth() {
  return (
    <section id="growth" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-emerald-500 font-semibold text-sm tracking-wider uppercase mb-3 font-heading">
              Growth Strategy That Drives Real Impact
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#001132] mb-4">
              Grow Your Business
              <span className="text-emerald-500"> Within Few Months</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              My data-driven approach combines proven SEO strategies with AI-powered
              insights to deliver measurable business growth. Every campaign is built
              on real metrics, not vanity numbers.
            </p>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={statVariants}
                  className="bg-slate-50 rounded-xl p-5 hover:bg-emerald-50 transition-colors duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-[#001132] font-heading group-hover:text-emerald-600 transition-colors">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">{stat.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Traffic Growth
                  </p>
                  <p className="text-2xl font-bold text-[#001132] font-heading">
                    +245%
                  </p>
                </div>
                <div className="flex items-center gap-1 text-emerald-600">
                  <ArrowUpRight className="w-5 h-5" />
                  <span className="text-sm font-semibold">Growing</span>
                </div>
              </div>

              {/* Animated Progress Bars */}
              <div className="space-y-3">
                {progressData.map((item, index) => (
                  <div key={item.month} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">{item.month}</span>
                      <span className="text-slate-400">{item.value}%</span>
                    </div>
                    <div className="h-2.5 bg-emerald-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        className={`h-full rounded-full ${
                          index < 3
                            ? "bg-gradient-to-r from-emerald-400 to-emerald-500"
                            : "bg-gradient-to-r from-emerald-300 to-emerald-400"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-emerald-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs text-slate-500">Clicks</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-300" />
                  <span className="text-xs text-slate-500">Impressions</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
