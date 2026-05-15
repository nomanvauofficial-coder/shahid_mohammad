"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Settings,
  Search,
  Link2,
  BrainCircuit,
  MapPin,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "On-Page SEO",
    description:
      "Optimize your pages for search intent, CTR, and conversions. Improve rankings with proven on-page strategies that drive targeted traffic.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Technical SEO",
    description:
      "Fix Core Web Vitals, crawl issues, indexing errors, and site speed problems to improve performance and rankings.",
    icon: Settings,
  },
  {
    number: "03",
    title: "Keyword Research",
    description:
      "Find high-intent keywords your customers are actually searching for — not just high volume keywords.",
    icon: Search,
  },
  {
    number: "04",
    title: "Link Building",
    description:
      "Earn niche-relevant, white-hat backlinks through manual outreach and authority placements — no spam, no shortcuts.",
    icon: Link2,
  },
  {
    number: "05",
    title: "AI Features",
    description:
      "Use AI-driven data analysis, content optimization, and search intent mapping to improve rankings faster and smarter.",
    icon: BrainCircuit,
  },
  {
    number: "06",
    title: "Local SEO",
    description:
      "Dominate local search results with optimized Google Business Profiles, local citations, and geo-targeted strategies.",
    icon: MapPin,
  },
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001132] mb-4">
            Result-Driven SEO Services for
            <span className="text-emerald-500"> Real Business Growth</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Comprehensive SEO solutions tailored to help your business dominate
            local search results and drive sustainable revenue.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon + Number */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <div className="absolute inset-0 bg-emerald-100 rounded-xl group-hover:bg-emerald-500 transition-colors duration-300" />
                    <div className="relative w-full h-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <span className="text-4xl font-bold text-emerald-100 group-hover:text-emerald-200 font-heading transition-colors duration-300">
                    {service.number}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
