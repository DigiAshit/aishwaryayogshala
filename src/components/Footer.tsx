"use client";
import React from "react";
import Link from "next/link";
import { usePopup } from "./PopupContext";
import { Mail, Phone } from "lucide-react";

interface FooterProps {
  siteName?: string;
  companyName?: string;
  supportEmail?: string;
}

const Footer: React.FC<FooterProps> = ({
  siteName = "Aishwarya Yogshala",
  companyName = "Aishwarya Yogshala",
  supportEmail = "sharmaaishwarya582@gmail.com",
}) => {
  const { openPopup } = usePopup();
  return (
    <footer className="bg-[#201A18] text-[#FDFBF7]/80 pt-20 pb-10 border-t border-[#F2ECE4]/10" id="footer">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <img src="/images/logo.jpeg" alt={siteName} className="h-10 w-10 object-cover rounded-full border border-[#D8227A]" />
            <span className="font-serif font-bold text-lg tracking-tight text-white">{siteName}</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs text-[#FDFBF7]/60">
            Where wellness begins within. Traditional yoga backed by scientific understanding. Empowering lives through authentic guidelines.
          </p>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col gap-5">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest">Connect Directly</h4>
          <ul className="flex flex-col gap-3 text-sm text-[#FDFBF7]/60 font-medium">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#FD6804]" />
              <a href="tel:+918130171173" className="hover:text-white transition-colors">
                +91 8130171173
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#D8227A]" />
              <a href={`mailto:${supportEmail}`} className="hover:text-white transition-colors">
                {supportEmail}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <svg className="h-4 w-4 text-[#592893] fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              <a href="https://instagram.com/aishwaryawellnessacademy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                @aishwaryawellnessacademy
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation Column */}
        <div className="flex flex-col gap-5">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest">Navigation</h4>
          <ul className="flex flex-col gap-3 text-sm text-[#FDFBF7]/60 font-medium">
            <li><Link href="/#home" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/#about" className="hover:text-white transition-colors">Meet Your Coach</Link></li>
            <li><Link href="/#programs" className="hover:text-white transition-colors">Yoga Programs</Link></li>
            <li><Link href="/#timings" className="hover:text-white transition-colors">Class Timings</Link></li>
            <li><Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
          </ul>
        </div>

        {/* Studio Guidelines */}
        <div className="flex flex-col gap-5">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest">Support & Legals</h4>
          <ul className="flex flex-col gap-3 text-sm text-[#FDFBF7]/60 font-medium">
            <li><Link href="/#policies" className="hover:text-white transition-colors">Studio Policies</Link></li>
            <li><Link href="/#faqs" className="hover:text-white transition-colors">Frequently Asked Questions</Link></li>
            <li><Link href="/#contact" onClick={(e) => { e.preventDefault(); openPopup(); }} className="hover:text-white transition-colors">Book Consultation</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-[#F2ECE4]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FDFBF7]/40 font-medium">
        <div>© Copyright 2026 {companyName} | All rights reserved.</div>
        <div className="flex items-center gap-6">
          <Link href="/#policies" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/#policies" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
