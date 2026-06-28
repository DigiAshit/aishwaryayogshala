"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePopup } from "./PopupContext";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  siteName?: string;
  logoUrl?: string;
}

const Header: React.FC<HeaderProps> = ({ siteName = "Aishwarya Yogshala", logoUrl = "/images/logo.jpeg" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { openPopup } = usePopup();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/#home" },
    { name: "Programs & Pricing", isDropdown: true, children: [
      { name: "Programs", path: "/#programs" },
      { name: "Timings", path: "/#timings" },
      { name: "Pricing", path: "/#pricing" },
    ] },
    { name: "More Info", isDropdown: true, children: [
      { name: "Meet Your Coach", path: "/#about" },
      { name: "Policies", path: "/#policies" },
      { name: "Stories", path: "/#testimonials" },
      { name: "FAQs", path: "/#faqs" },
    ] },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#FDFBF7]/90 border-b border-[#F2ECE4] backdrop-blur-md py-4"
            : "bg-[#FDFBF7]/40 py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/#home" className="flex items-center gap-3 group">
            <img
              src={logoUrl}
              alt={siteName}
              className="h-10 w-10 object-cover rounded-full border border-[#D8227A] transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg tracking-tight text-[#2C2624]">
                Aishwarya
              </span>
              <span className="font-sans text-[0.65rem] uppercase tracking-wider font-semibold text-[#592893]">
                Yogshala
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6 text-sm font-medium text-[#726A67]">
              {navLinks.map((link) => {
                if (link.isDropdown) {
                  return (
                    <li key={link.name} className="relative group">
                      <button className="flex items-center gap-1 hover:text-[#D8227A] transition-colors py-2">
                        {link.name}
                      </button>
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-[#F2ECE4] overflow-hidden">
                        {link.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.path}
                            className="block px-4 py-2 hover:bg-gray-50 hover:text-[#D8227A] transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </li>
                  );
                }

                const isActive = pathname === link.path;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.path as string}
                      className={`hover:text-[#D8227A] transition-colors relative py-2 ${
                        isActive ? "text-[#D8227A] font-semibold" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-4">
              <a
                href="tel:+918130171173"
                className="hidden md:flex items-center gap-2 text-[#726A67] hover:text-[#D8227A] transition-colors text-sm font-semibold"
              >
                +91 81301 71173
              </a>
              {/* Header Button */}
              <Link href="/#contact" onClick={(e) => { e.preventDefault(); openPopup(); setIsOpen(false); }}
                className="bg-gradient-to-r from-[#FD6804] to-[#D8227A] hover:shadow-lg hover:shadow-pink-500/20 text-white font-bold text-xs py-2.5 px-5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
              >
                Free Consultation
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#726A67] hover:text-[#D8227A] p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[80px] z-30 lg:hidden bg-[#FDFBF7] border-b border-[#F2ECE4] py-8 px-6 flex flex-col gap-6 shadow-2xl"
          >
            <ul className="flex flex-col gap-4 text-base font-medium text-[#726A67]">
              {navLinks.map((link) => {
                if (link.isDropdown) {
                  return (
                    <li key={link.name} className="flex flex-col gap-2">
                      <span className="font-semibold text-gray-900">{link.name}</span>
                      <ul className="pl-4 flex flex-col gap-2 border-l border-gray-200 ml-2">
                        {link.children?.map((child) => (
                          <li key={child.name}>
                            <Link
                              href={child.path}
                              onClick={() => setIsOpen(false)}
                              className="hover:text-[#D8227A] transition-colors text-sm"
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }
                return (
                  <li key={link.name}>
                    <Link
                      href={link.path as string}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-[#D8227A] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col gap-4 mt-2">
              <a
                href="tel:+918130171173"
                className="w-full bg-[#FDFBF7] border border-[#F2ECE4] text-[#726A67] font-bold py-3 px-6 rounded-full text-sm transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:text-[#D8227A]"
              >
                Call +91 81301 71173
              </a>
              <Link href="/#contact" onClick={(e) => { e.preventDefault(); openPopup(); setIsOpen(false); }}
                className="w-full bg-gradient-to-r from-[#FD6804] to-[#D8227A] text-white font-bold py-3 px-6 rounded-full text-sm transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
