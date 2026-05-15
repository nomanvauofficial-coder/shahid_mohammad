"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What will be included in the reporting?",
    answer:
      "You will receive a monthly keyword ranking report. In addition, you will receive a detailed link building report that includes the live URL, target page URL, anchor text, Page Authority, Domain Authority, and Trust Flow for every link.",
  },
  {
    question:
      "Do you provide any guarantees for your SEO service results?",
    answer:
      "No ethical SEO expert can guarantee results. Anyone who promises that your page will be ranked on the first page in a fixed time frame should not be trusted. An SEO expert can only guarantee the number of links you will get per month.",
  },
  {
    question: "How long will it take to see the result?",
    answer:
      "SEO is not a sprint; it is a marathon. It takes a long time to rank pages on the first page. The time frame for ranking depends on keyword competitiveness. You will see improvement in 6 months.",
  },
  {
    question: "What is the difference between white hat SEO and black hat SEO?",
    answer:
      "White hat SEO strategies use ethical and organic methods to improve a website's content, helping to increase traffic and generate leads over time. On the other hand, black hat SEO techniques rely on questionable tactics for quick results, which can be easily spotted if not done correctly.",
  },
  {
    question: "Should I hire an individual SEO expert or an agency?",
    answer:
      "SEO agencies are good options for organizations. However, their main disadvantages are expense and transparency. On the other hand, if you hire an individual SEO expert like me, you will find that individual SEO experts provide customized SEO services that are cost-efficient and transparent.",
  },
  {
    question: "When should I hire a search engine optimizer?",
    answer:
      "When you launch your website and want organic visitors from search engines. You can also hire an SEO expert anytime for your website if you want to get substantial amount visitors from search engines.",
  },
  {
    question: "Why is SEO important for your business?",
    answer:
      "In this digital age, people start searching for businesses when they want to buy something. If customers can't find any information about a business, they won't trust it. Thus, SEO is not just about getting visitors from search engines; it helps businesses be found online when someone searches for them.",
  },
  {
    question: "Is SEO dead?",
    answer:
      "You may have heard this question and will hear. But SEO is alive. As long as you can see organic results get most clicks from search engine results page SEO is alive.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
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
          <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001132] mb-4">
            Custom SEO Solutions for Your Business{" "}
            <span className="text-emerald-500">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Find answers to common questions about SEO services, processes, and
            what to expect when working together.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-slate-200 last:border-b-0"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-slate-800 hover:text-emerald-600 hover:no-underline transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
