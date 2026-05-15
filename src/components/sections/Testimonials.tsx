"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Esu Tekle",
    company: "Blacck Tier Ride Limousine Transportation Service",
    rating: 5,
    text: "I had the pleasure of working with Shahid Mohammad for SEO consultancy, and I must say it was one of the best business decisions I made. From the very beginning, Shahid took the time to understand my business goals, target audience, and challenges. He didn't just provide generic advice—his strategies were highly tailored, practical, and results-driven.",
    text2:
      "Within a short time, I noticed significant improvements in website traffic, keyword rankings, and most importantly, quality leads coming in consistently. His communication is clear, his approach is professional, and he always goes the extra mile to ensure success. If you are looking for someone who genuinely cares about your growth and knows how to deliver measurable SEO results, I highly recommend Shahid Mohammad. He's not just an SEO consultant—he's a true growth partner.",
  },
  {
    name: "Sarah Mitchell",
    company: "GreenView Landscaping Services",
    rating: 5,
    text: "Shahid transformed our online presence completely. Before working with him, we were invisible on Google. Within 3 months, we were ranking in the top 3 for all our target keywords in our local area. His approach to local SEO is methodical and data-driven.",
    text2:
      "What sets Shahid apart is his commitment to understanding our business deeply. He didn't just optimize our website — he helped us refine our entire digital strategy. The ROI has been incredible, and we continue to see growth month after month.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-gradient-to-br from-emerald-600 to-emerald-700 relative overflow-hidden"
    >
      {/* Decorative blurred circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-800/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Testimonial
          </h2>
          <p className="text-emerald-100 text-lg max-w-xl mx-auto">
            What my happy clients say
          </p>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl"
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote className="w-10 h-10 text-emerald-200" />
              </div>

              {/* Star rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-emerald-500 text-emerald-500"
                  />
                ))}
              </div>

              {/* Testimonial text - two paragraphs */}
              <p className="text-slate-600 leading-relaxed mb-3">
                {testimonial.text}
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                {testimonial.text2}
              </p>

              {/* Author section */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 font-bold text-lg font-heading">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-slate-800 font-heading">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
