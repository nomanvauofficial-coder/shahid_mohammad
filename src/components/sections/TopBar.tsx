"use client";

import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#001132] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left side - Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href="https://maps.google.com/?q=Chattogram,Bangladesh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>4225, Chattogram, Bangladesh</span>
          </a>
          <a
            href="mailto:shahidecstasy@gmail.com"
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>shahidecstasy@gmail.com</span>
          </a>
          <a
            href="tel:+8801325756915"
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>+8801325756915</span>
          </a>
        </div>

        {/* Right side - CTA Button */}
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-1.5 rounded text-xs font-semibold tracking-wide transition-colors shadow-lg shadow-emerald-500/20"
        >
          Free SEO Audit
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
