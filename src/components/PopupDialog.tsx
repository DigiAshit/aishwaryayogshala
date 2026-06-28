"use client";
import React, { useState } from "react";
import { usePopup } from "./PopupContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, User, CheckCircle, MessageSquare } from "lucide-react";

const PopupDialog: React.FC = () => {
  const { isOpen, closePopup } = usePopup();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: ""
  });
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { name, email, phone, program, message } = formData;

    if (!name.trim()) {
      setError("Name is required");
      return;
    }
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    if (!phone.trim()) {
      setError("Phone number is required");
      return;
    }
    if (!program) {
      setError("Please select a program");
      return;
    }

    const messageText = `Namaste Aishwarya Yogshala! 🙏\n\nI would like to schedule a consultation / enroll in a program.\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Program:* ${program}\n*Notes:* ${message || "None."}`;
    const waUrl = `https://wa.me/918130171173?text=${encodeURIComponent(messageText)}`;
    
    window.open(waUrl, "_blank");
    closePopup();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="fixed inset-0 bg-[#2C2624]/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-[#F2ECE4] bg-[#FDFBF7] p-8 shadow-2xl z-10 text-[#2C2624]"
          >
            {/* Glowing Accent Border */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#FD6804] to-[#D8227A]" />

            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-[#726A67] hover:text-[#D8227A] transition-colors p-1 hover:bg-[#F2ECE4]/50 rounded-full"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div>
              <h3 className="font-serif font-bold text-2xl text-[#2C2624] mb-1.5">
                Book Your Consultation
              </h3>
              <p className="text-xs text-[#726A67] mb-6 leading-relaxed">
                Fill in your details to check timings and batch availability. Submitting will redirect you to direct WhatsApp chat with Coach Aishwarya.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name field */}
                <div className="text-left">
                  <label className="block text-[10px] font-bold text-[#2C2624] uppercase tracking-widest mb-1.5 pl-0.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#726A67]">
                      <User className="h-4 w-4" />
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full bg-white border border-[#F2ECE4] focus:border-[#D8227A] rounded-xl py-2.5 pl-10 pr-4 text-xs text-[#2C2624] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="text-left">
                  <label className="block text-[10px] font-bold text-[#2C2624] uppercase tracking-widest mb-1.5 pl-0.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#726A67]">
                      <Mail className="h-4 w-4" />
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full bg-white border border-[#F2ECE4] focus:border-[#D8227A] rounded-xl py-2.5 pl-10 pr-4 text-xs text-[#2C2624] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone field */}
                <div className="text-left">
                  <label className="block text-[10px] font-bold text-[#2C2624] uppercase tracking-widest mb-1.5 pl-0.5">
                    WhatsApp Number
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#726A67]">
                      <Phone className="h-4 w-4" />
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your WhatsApp number"
                      className="w-full bg-white border border-[#F2ECE4] focus:border-[#D8227A] rounded-xl py-2.5 pl-10 pr-4 text-xs text-[#2C2624] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Program Selection */}
                <div className="text-left">
                  <label className="block text-[10px] font-bold text-[#2C2624] uppercase tracking-widest mb-1.5 pl-0.5">
                    Select Program
                  </label>
                  <select
                    name="program"
                    required
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-[#F2ECE4] focus:border-[#D8227A] rounded-xl py-2.5 px-4 text-xs text-[#2C2624] outline-none transition-all"
                  >
                    <option value="" disabled>Choose your program</option>
                    <option value="Live Online Group Yoga Classes (3 Days/Week)">Live Online Group Classes (3 Days/Week)</option>
                    <option value="Live Online Group Yoga Classes (5 Days/Week)">Live Online Group Classes (5 Days/Week)</option>
                    <option value="21-Day Foundation Course">21-Day Foundation Course</option>
                    <option value="50-Hour Yoga Foundation Certification Program">50-Hour Yoga Certification Program</option>
                    <option value="General Consultation">Free Wellness Consultation Only</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                {/* Message field */}
                <div className="text-left">
                  <label className="block text-[10px] font-bold text-[#2C2624] uppercase tracking-widest mb-1.5 pl-0.5">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Health conditions, targets..."
                    className="w-full bg-white border border-[#F2ECE4] focus:border-[#D8227A] rounded-xl py-2 px-4 text-xs text-[#2C2624] outline-none transition-all"
                  />
                </div>

                {error && (
                  <p className="text-xs text-red-500 text-left font-medium">{error}</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FD6804] to-[#D8227A] text-white font-bold py-3 px-6 rounded-full text-xs transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-md mt-4"
                >
                  <MessageSquare className="h-4 w-4" />
                  Submit & Chat on WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PopupDialog;
