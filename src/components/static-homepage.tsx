"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePopup } from "./PopupContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Sparkles, 
  CheckCircle, 
  ChevronRight, 
  Calendar,
  X,
  Compass,
  Zap,
  Activity,
  Heart,
  Smile,
  Moon,
  Award
} from "lucide-react";

export default function StaticHomepage() {
  const { openPopup } = usePopup();
  const [activeTab, setActiveTab] = useState("week1");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [showWpPopup, setShowWpPopup] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: ""
  });

  useEffect(() => {
    // Show WhatsApp popup after 5 seconds on mount
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem("wpPopupDismissed");
      if (!dismissed) {
        setShowWpPopup(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, program, message } = formData;
    const messageText = `Namaste Aishwarya Yogshala! 🙏\n\nI would like to schedule a consultation / enroll in a program.\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Program:* ${program}\n*Notes:* ${message || "None."}`;
    const waUrl = `https://wa.me/918130171173?text=${encodeURIComponent(messageText)}`;
    window.open(waUrl, "_blank");
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const closeWpPopup = () => {
    setShowWpPopup(false);
    sessionStorage.setItem("wpPopupDismissed", "true");
  };

  const selectPricingPreset = (programName: string) => {
    setFormData(prev => ({
      ...prev,
      program: programName
    }));
  };

  const directWhatsAppEnquiry = () => {
    const msg = "Namaste! I have an enquiry regarding Aishwarya Yogshala classes and consultations.";
    window.open(`https://wa.me/918130171173?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="relative bg-[#FDFBF7] text-[#2C2624] overflow-hidden">
      
      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-32 bg-gradient-to-br from-[#FDFBF7] via-[#fef3d5]/30 to-[#FDFBF7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="mb-6">
              <span className="badge-gradient">Where Wellness Begins Within</span>
            </div>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.15] mb-6 text-[#2C2624]">
              <span className="text-gradient">Discover Your Inner Balance. Learn Authentic Yoga.</span>
            </h1>
            <p className="text-[#726A67] text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
              Welcome to Aishwarya Yogshala, where yoga is more than just a workout, it is a journey towards a healthier body, a calmer mind, and a more balanced life. Led by Aishwarya Sharma, a qualified Wellness Coach with over 5 years of experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
              <Link href="#contact" onClick={(e) => { e.preventDefault(); openPopup(); }} 
                className="bg-gradient-to-r from-[#FD6804] to-[#D8227A] hover:shadow-lg hover:shadow-pink-500/20 text-white font-bold py-4 px-8 rounded-full text-center transition-all cursor-pointer active:scale-95 text-sm"
              >
                Book a Free Consultation
              </Link>
              <Link 
                href="#programs" 
                className="bg-white hover:bg-[#F2ECE4] text-[#592893] border border-[#F2ECE4] font-bold py-4 px-8 rounded-full text-center transition-all cursor-pointer active:scale-95 text-sm"
              >
                Join a Trial Class
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-[#2C2624] font-medium">
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                <span>Live Interactive Classes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                <span>Small Batches (Personal Care)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-[10px]">✓</span>
                <span>Real-Time Corrections</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-2xl z-10">
              <img 
                src="/images/landscape-1.jpeg" 
                alt="Yoga Group Class at Aishwarya Yogshala" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-6 w-[45%] aspect-[3/4] rounded-2xl overflow-hidden border-4 border-white shadow-2xl z-20"
            >
              <img 
                src="/images/portrait-14.jpeg" 
                alt="Aishwarya Sharma Yoga Practice" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-radial-gradient from-[#D8227A]/10 to-transparent blur-3xl -z-10" />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 w-full overflow-hidden z-10 pointer-events-none">
          <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0,0 C320,80 420,80 720,40 C1020,0 1120,0 1440,40 L1440,120 L0,120 Z" fill="#FDFBF7" />
          </svg>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 md:py-28 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-subtitle block text-[#D8227A] uppercase text-xs tracking-[2px] font-semibold mb-3">Overcome Modern Struggles</span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#2C2624] mb-4">Are You Facing Any of These Challenges?</h2>
            <p className="text-[#726A67] max-w-xl mx-auto text-sm sm:text-base">Modern lifestyles often bring physical and mental challenges that drain our vitality. Yoga offers a scientific and authentic path to reclaim your well-being.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Struggle 1 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-2xl border border-[#F2ECE4] shadow-sm flex flex-col items-start transition-all"
            >
              <div className="h-14 w-14 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6">
                <Smile className="h-7 w-7" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#2C2624] mb-3">Stress, anxiety, and mental fatigue</h3>
              <p className="text-sm text-[#726A67] leading-relaxed">A constantly racing mind and corporate pressure leading to chronic mental exhaustion and cognitive fatigue.</p>
            </motion.div>

            {/* Struggle 2 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-2xl border border-[#F2ECE4] shadow-sm flex flex-col items-start transition-all"
            >
              <div className="h-14 w-14 rounded-xl bg-[#FD6804]/10 text-[#FD6804] flex items-center justify-center mb-6">
                <Activity className="h-7 w-7" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#2C2624] mb-3">Body stiffness and poor flexibility</h3>
              <p className="text-sm text-[#726A67] leading-relaxed">Sitting for long hours restricts your natural range of motion, creating severe muscle stiffness and tight joints.</p>
            </motion.div>

            {/* Struggle 3 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-2xl border border-[#F2ECE4] shadow-sm flex flex-col items-start transition-all"
            >
              <div className="h-14 w-14 rounded-xl bg-[#592893]/10 text-[#592893] flex items-center justify-center mb-6">
                <Heart className="h-7 w-7" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#2C2624] mb-3">Neck, shoulder, or back pain</h3>
              <p className="text-sm text-[#726A67] leading-relaxed">Chronic desk posture leads to strain in the cervical spine and lumbar region, causing daily aches and fatigue.</p>
            </motion.div>

            {/* Struggle 4 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-2xl border border-[#F2ECE4] shadow-sm flex flex-col items-start transition-all"
            >
              <div className="h-14 w-14 rounded-xl bg-[#0789bb]/10 text-[#0789bb] flex items-center justify-center mb-6">
                <Compass className="h-7 w-7" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#2C2624] mb-3">Poor posture due to long hours of sitting</h3>
              <p className="text-sm text-[#726A67] leading-relaxed">Hours of slouching over laptops damages natural spinal alignment, leading to rounded shoulders and weak core stability.</p>
            </motion.div>

            {/* Struggle 5 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-2xl border border-[#F2ECE4] shadow-sm flex flex-col items-start transition-all"
            >
              <div className="h-14 w-14 rounded-xl bg-[#8BC34A]/10 text-[#2E7D32] flex items-center justify-center mb-6">
                <Zap className="h-7 w-7" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#2C2624] mb-3">Low energy and constant fatigue</h3>
              <p className="text-sm text-[#726A67] leading-relaxed">Waking up tired and relying on caffeine. Yoga builds natural prana (vitality) to keep you active throughout the day.</p>
            </motion.div>

            {/* Struggle 6 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-2xl border border-[#F2ECE4] shadow-sm flex flex-col items-start transition-all"
            >
              <div className="h-14 w-14 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-6">
                <Moon className="h-7 w-7" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#2C2624] mb-3">Poor sleep quality</h3>
              <p className="text-sm text-[#726A67] leading-relaxed">Trouble falling asleep or staying asleep due to an overactive nervous system. Breath training helps restore rest cycles.</p>
            </motion.div>
          </div>

          <div className="text-center mb-24">
            <Link href="#contact" onClick={(e) => { e.preventDefault(); openPopup(); }} 
              className="bg-gradient-to-r from-[#FD6804] to-[#D8227A] hover:shadow-lg text-white font-bold py-4 px-8 rounded-full transition-all inline-block active:scale-95 text-sm"
            >
              Start Relieving Pain Now
            </Link>
          </div>

          {/* Advantage Panel */}
          <div className="bg-white rounded-3xl border border-[#F2ECE4] p-8 md:p-12 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="block text-[#D8227A] uppercase text-xs tracking-[2px] font-semibold mb-3">The Academy Advantage</span>
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-[#2C2624] mb-6">Why Choose Aishwarya Yogshala?</h3>
                <p className="text-[#726A67] mb-8 text-sm sm:text-base">We combine the timeless wisdom of traditional yoga with modern scientific understanding to create structured programs that fit your lifestyle.</p>
                <ul className="space-y-4 mb-8 text-sm text-[#2C2624] font-medium">
                  <li className="flex items-start gap-3">
                    <span className="text-[#D8227A] font-bold text-lg leading-none">✓</span>
                    <span><strong>Live Online Group Yoga Classes:</strong> Real-time interaction, not recorded videos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D8227A] font-bold text-lg leading-none">✓</span>
                    <span><strong>Small Batch Learning:</strong> Limited participants so everyone receives personal attention.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D8227A] font-bold text-lg leading-none">✓</span>
                    <span><strong>Real-Time Posture Corrections:</strong> Practice safely and avoid injuries from home.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D8227A] font-bold text-lg leading-none">✓</span>
                    <span><strong>Beginner-Friendly:</strong> Custom progressions tailored to all levels and age groups.</span>
                  </li>
                </ul>
                <Link href="#contact" onClick={(e) => { e.preventDefault(); openPopup(); }} 
                  className="bg-gradient-to-r from-[#FD6804] to-[#D8227A] text-white font-bold py-3.5 px-7 rounded-full inline-block transition-all text-sm shadow-md"
                >
                  Book Your Free Consultation
                </Link>
              </div>
              <div className="lg:col-span-5 relative">
                <img 
                  src="/images/landscape-2.jpeg" 
                  alt="Online Yoga Group Practice" 
                  className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#FD6804] to-[#D8227A] text-white py-4 px-6 rounded-2xl shadow-xl flex flex-col items-center justify-center">
                  <span className="font-serif font-bold text-3xl leading-none">5+</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold mt-1">Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Coach */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="relative w-full">
                <img 
                  src="/images/professional.jpeg" 
                  alt="Yoga Coach Aishwarya Sharma" 
                  className="w-full rounded-3xl shadow-xl z-10 relative object-cover aspect-[16/9]"
                />
                <div className="absolute top-4 -left-4 w-full h-full border-2 border-[#D8227A] rounded-3xl z-0" />
              </div>
              <div className="bg-[#FDFBF7] rounded-2xl border border-[#F2ECE4] p-6 shadow-sm">
                <h4 className="font-serif font-bold text-lg text-[#592893] mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-[#FD6804]" /> Qualifications (Click to verify)
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="/education/Masters%20Of%20Yoga.pdf" target="_blank" className="text-sm text-[#2C2624] hover:text-[#D8227A] flex items-center justify-between border-b border-transparent hover:border-[#D8227A] pb-1 transition-all">
                      <span>Masters Degree in Yoga</span>
                      <span className="text-xs">📄</span>
                    </a>
                  </li>
                  <li>
                    <a href="/education/PG%20Diploma%20In%20Yoga.pdf" target="_blank" className="text-sm text-[#2C2624] hover:text-[#D8227A] flex items-center justify-between border-b border-transparent hover:border-[#D8227A] pb-1 transition-all">
                      <span>Post Graduate Diploma in Yoga</span>
                      <span className="text-xs">📄</span>
                    </a>
                  </li>
                  <li>
                    <a href="/education/Ministry%20of%20AYUSH,%20Govt.%20of%20India.pdf" target="_blank" className="text-sm text-[#2C2624] hover:text-[#D8227A] flex items-center justify-between border-b border-transparent hover:border-[#D8227A] pb-1 transition-all">
                      <span>Certified Yoga Protocol Instructor (YPI)</span>
                      <span className="text-xs">📄</span>
                    </a>
                  </li>
                  <li>
                    <a href="/education/Wellness%20Instructor.pdf" target="_blank" className="text-sm text-[#2C2624] hover:text-[#D8227A] flex items-center justify-between border-b border-transparent hover:border-[#D8227A] pb-1 transition-all">
                      <span>Certified Yoga Wellness Instructor (YWI)</span>
                      <span className="text-xs">📄</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="section-subtitle block text-[#D8227A] uppercase text-xs tracking-[2px] font-semibold mb-3">Meet Your Coach</span>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#2C2624] mb-2">Aishwarya Sharma</h2>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#D8227A] mb-6">Founder | Yoga Wellness Coach</p>
              
              <div className="text-sm sm:text-base text-[#726A67] space-y-4 mb-8">
                <p className="font-serif font-bold text-lg text-[#592893]">Namaste!</p>
                <p>I believe yoga is much more than a form of exercise, it is a way of living that nurtures the body, calms the mind, and transforms the way we experience life.</p>
                <p>My journey in yoga has been driven by a passion to help people improve their overall well-being through authentic yogic practices. Over the years, I have had the privilege of guiding children, working professionals, homemakers, athletes, and senior citizens towards healthier and more balanced lives.</p>
                <p>Every class I teach focuses on proper alignment, mindful breathing, safe progression, and personalized guidance so that every student feels confident and experiences long-term benefits.</p>
              </div>

              <div className="mb-8 w-full">
                <h4 className="font-serif font-bold text-[#592893] mb-4 text-base">Areas of Expertise</h4>
                <div className="flex flex-wrap gap-2.5">
                  <span className="bg-[#FDFBF7] border border-[#F2ECE4] text-xs font-semibold px-4 py-2 rounded-full text-[#2C2624]">Lifestyle Disorders</span>
                  <span className="bg-[#FDFBF7] border border-[#F2ECE4] text-xs font-semibold px-4 py-2 rounded-full text-[#2C2624]">Therapeutic Yoga</span>
                  <span className="bg-[#FDFBF7] border border-[#F2ECE4] text-xs font-semibold px-4 py-2 rounded-full text-[#2C2624]">Prenatal Yoga</span>
                  <span className="bg-[#FDFBF7] border border-[#F2ECE4] text-xs font-semibold px-4 py-2 rounded-full text-[#2C2624]">Postnatal Yoga</span>
                  <span className="bg-[#FDFBF7] border border-[#F2ECE4] text-xs font-semibold px-4 py-2 rounded-full text-[#2C2624]">Senior Citizens</span>
                  <span className="bg-[#FDFBF7] border border-[#F2ECE4] text-xs font-semibold px-4 py-2 rounded-full text-[#2C2624]">Kids Yoga</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full border-t border-[#F2ECE4] pt-8 mb-8">
                <div>
                  <h5 className="font-serif font-bold text-[#592893] text-sm mb-2 flex items-center gap-1.5"><Compass className="h-4 w-4 text-[#FD6804]" /> Our Vision</h5>
                  <p className="text-xs text-[#726A67] leading-relaxed">To inspire individuals across the world to adopt yoga as a lifelong practice for physical health and emotional balance.</p>
                </div>
                <div>
                  <h5 className="font-serif font-bold text-[#592893] text-sm mb-2 flex items-center gap-1.5"><Sparkles className="h-4 w-4 text-[#D8227A]" /> Our Mission</h5>
                  <p className="text-xs text-[#726A67] leading-relaxed">To make authentic yoga accessible, practical, and enjoyable for everyone through structured programs.</p>
                </div>
              </div>

              <Link href="#contact" onClick={(e) => { e.preventDefault(); openPopup(); }} 
                className="bg-gradient-to-r from-[#FD6804] to-[#D8227A] text-white font-bold py-3.5 px-7 rounded-full text-sm shadow-md"
              >
                Book Consultation with Aishwarya
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 md:py-28 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-subtitle block text-[#D8227A] uppercase text-xs tracking-[2px] font-semibold mb-3">Structured for Transformation</span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#2C2624] mb-4">Our Yoga Programs</h2>
            <p className="text-[#726A67] max-w-xl mx-auto text-sm sm:text-base">From daily group practices to structured certification courses, select the pathway that fits your journey.</p>
          </div>

          {/* Program 1 */}
          <div className="bg-white rounded-3xl border border-[#F2ECE4] mb-12 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center items-start">
                <span className="badge-gradient mb-4">Most Popular</span>
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-[#2C2624] mb-1">Live Online Group Yoga Classes</h3>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#D8227A] mb-4">Practice Yoga. Build Strength. Transform Your Lifestyle.</p>
                
                <div className="bg-[#FDFBF7] border border-[#F2ECE4] rounded-xl px-5 py-3.5 mb-6 w-full text-sm">
                  <span className="block text-[10px] uppercase font-bold text-[#726A67] tracking-wider mb-1">Pricing</span>
                  <span className="font-serif font-bold text-lg text-[#592893]">₹1,499/month / $39/month (3 Days/Wk)</span>
                  <div className="h-px bg-[#F2ECE4] my-2" />
                  <span className="font-serif font-bold text-lg text-[#592893]">₹1,999/month / $59/month (5 Days/Wk)</span>
                </div>

                <p className="text-sm text-[#726A67] mb-6">Our Live Online Group Yoga Classes are designed to make authentic yoga accessible, engaging, and effective for people of all ages and levels. Conducted in small batches, these interactive classes ensure personal care.</p>
                
                <div className="bg-[#FDFBF7] border border-[#F2ECE4] rounded-xl p-5 mb-8 w-full">
                  <h4 className="font-serif font-bold text-sm text-[#592893] mb-4">What’s Included in Every 60-Min Class?</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-xs text-[#2C2624] font-medium">
                      <li className="flex items-center gap-2">🧘 Centering & Breath</li>
                      <li className="flex items-center gap-2">🧘 Joint Warm-Up</li>
                      <li className="flex items-center gap-2">🧘 Yoga Asanas</li>
                    </ul>
                    <ul className="space-y-2 text-xs text-[#2C2624] font-medium">
                      <li className="flex items-center gap-2">🧘 Strength & Flexibility</li>
                      <li className="flex items-center gap-2">🧘 Meditation & Pranayama</li>
                      <li className="flex items-center gap-2">🧘 Relaxation (Shavasana)</li>
                    </ul>
                  </div>
                </div>
                <Link href="#contact" onClick={(e) => { e.preventDefault(); selectPricingPreset("Live Online Group Yoga Classes (5 Days/Week)"); openPopup(); }}
                  className="bg-gradient-to-r from-[#FD6804] to-[#D8227A] text-white font-bold py-3 px-6 rounded-full text-sm shadow-md"
                >
                  Register for Group Classes
                </Link>
              </div>
              <div className="lg:col-span-5 relative min-h-[300px]">
                <img src="/images/landscape-3.jpeg" alt="Live Online Yoga Session Group" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#592893]/70 to-transparent flex items-end p-8">
                  <div>
                    <h4 className="font-serif font-bold text-white text-lg mb-2">Who Can Join?</h4>
                    <p className="text-white/80 text-xs leading-relaxed">Beginners, working professionals, homemakers, students, senior citizens, and anyone seeking alignment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Program 2 */}
          <div className="bg-white rounded-3xl border border-[#F2ECE4] mb-12 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 relative min-h-[300px] lg:order-1">
                <img src="/images/landscape-6.jpeg" alt="21-Day Yoga Foundation Course" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute top-6 right-6 bg-white border border-[#F2ECE4] rounded-xl p-4 shadow-md text-xs font-semibold text-[#2C2624] flex flex-col gap-1.5 z-10">
                  <div><strong>Duration:</strong> 21 Days</div>
                  <div><strong>Mode:</strong> Live Online</div>
                  <div><strong>Certificate:</strong> Academy Certified</div>
                </div>
              </div>
              <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center items-start lg:order-2">
                <span className="badge-gradient mb-4">Step-by-Step Training</span>
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-[#2C2624] mb-1">21-Day Foundation Course</h3>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#D8227A] mb-4">Build the Right Foundation for Your Yoga Journey</p>

                <div className="bg-[#FDFBF7] border border-[#F2ECE4] rounded-xl px-5 py-3.5 mb-6 w-full text-sm">
                  <span className="block text-[10px] uppercase font-bold text-[#726A67] tracking-wider mb-1">Course Fee</span>
                  <span className="font-serif font-bold text-lg text-[#592893]">₹2,999 / $79 (One-time)</span>
                </div>

                <p className="text-sm text-[#726A67] mb-6">Starting yoga can feel overwhelming without proper guidance. Many beginners struggle with incorrect posture. This course helps you learn the fundamentals and establish a daily practice.</p>

                {/* Tabs */}
                <div className="w-full mb-8">
                  <div className="flex gap-2 border-b border-[#F2ECE4] mb-4">
                    <button 
                      onClick={() => setActiveTab("week1")}
                      className={`py-2 px-4 text-xs font-semibold border-b-2 transition-all ${activeTab === "week1" ? "border-[#D8227A] text-[#D8227A]" : "border-transparent text-[#726A67]"}`}
                    >
                      Week 1
                    </button>
                    <button 
                      onClick={() => setActiveTab("week2")}
                      className={`py-2 px-4 text-xs font-semibold border-b-2 transition-all ${activeTab === "week2" ? "border-[#D8227A] text-[#D8227A]" : "border-transparent text-[#726A67]"}`}
                    >
                      Week 2
                    </button>
                    <button 
                      onClick={() => setActiveTab("week3")}
                      className={`py-2 px-4 text-xs font-semibold border-b-2 transition-all ${activeTab === "week3" ? "border-[#D8227A] text-[#D8227A]" : "border-transparent text-[#726A67]"}`}
                    >
                      Week 3
                    </button>
                  </div>
                  <div className="min-h-[100px] text-xs text-[#726A67] leading-relaxed">
                    {activeTab === "week1" && (
                      <div className="animate-fadeIn">
                        <h5 className="font-bold text-[#2C2624] text-sm mb-2">Understanding the Basics</h5>
                        <ul className="space-y-1">
                          <li>⚡ Intro & alignment of yoga practices</li>
                          <li>⚡ Joint mobility exercises & breathing awareness</li>
                          <li>⚡ Basic standing asanas & injury safety guidelines</li>
                        </ul>
                      </div>
                    )}
                    {activeTab === "week2" && (
                      <div className="animate-fadeIn">
                        <h5 className="font-bold text-[#2C2624] text-sm mb-2">Building Strength & Flexibility</h5>
                        <ul className="space-y-1">
                          <li>⚡ Surya Namaskar (Sun Salutation) alignment</li>
                          <li>⚡ Standing & sitting postures training</li>
                          <li>⚡ Balance practices & recovery sequences</li>
                        </ul>
                      </div>
                    )}
                    {activeTab === "week3" && (
                      <div className="animate-fadeIn">
                        <h5 className="font-bold text-[#2C2624] text-sm mb-2">Creating a Sustainable Practice</h5>
                        <ul className="space-y-1">
                          <li>⚡ Advanced breathing (Pranayama) & meditation</li>
                          <li>⚡ Everyday stress and mindfulness exercises</li>
                          <li>⚡ Sequencing your daily practice & building consistency</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <Link href="#contact" onClick={(e) => { e.preventDefault(); selectPricingPreset("21-Day Foundation Course"); openPopup(); }}
                  className="bg-gradient-to-r from-[#FD6804] to-[#D8227A] text-white font-bold py-3 px-6 rounded-full text-sm shadow-md"
                >
                  Enroll in Foundation Course
                </Link>
              </div>
            </div>
          </div>

          {/* Program 3 */}
          <div className="bg-white rounded-3xl border border-[#F2ECE4] mb-12 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center items-start">
                <span className="badge-gradient mb-4">Advanced Training</span>
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-[#2C2624] mb-1">50-Hour Yoga Foundation Certification</h3>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#D8227A] mb-4">Deepen Your Practice. Understand the Science of Yoga.</p>

                <div className="bg-[#FDFBF7] border border-[#F2ECE4] rounded-xl px-5 py-3.5 mb-6 w-full text-sm">
                  <span className="block text-[10px] uppercase font-bold text-[#726A67] tracking-wider mb-1">Program Fee</span>
                  <span className="font-serif font-bold text-lg text-[#592893]">₹7,999 / $199 (One-time)</span>
                </div>

                <p className="text-sm text-[#726A67] mb-6">For those who want to transition from a casual practitioner to a knowledgeable yogi. This program dives deep into the academic, anatomical, and philosophical aspects of traditional yoga.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8 text-xs">
                  <div className="bg-[#FDFBF7] border border-[#F2ECE4] rounded-lg p-4">
                    <h5 className="font-bold text-[#592893] mb-1">1. Anatomy & Alignment</h5>
                    <p className="text-[#726A67]">Study bones, muscles, and joint mechanics in asanas for safe practice.</p>
                  </div>
                  <div className="bg-[#FDFBF7] border border-[#F2ECE4] rounded-lg p-4">
                    <h5 className="font-bold text-[#592893] mb-1">2. Pranayama & Physiology</h5>
                    <p className="text-[#726A67]">The science of breath, nervous system controls, and traditional Kriyas.</p>
                  </div>
                </div>
                <Link href="#contact" onClick={(e) => { e.preventDefault(); selectPricingPreset("50-Hour Yoga Foundation Certification Program"); openPopup(); }}
                  className="bg-gradient-to-r from-[#FD6804] to-[#D8227A] text-white font-bold py-3 px-6 rounded-full text-sm shadow-md"
                >
                  Enroll in Certification Program
                </Link>
              </div>
              <div className="lg:col-span-5 relative min-h-[300px]">
                <img src="/images/landscape-5.jpeg" alt="Yoga Certification Program" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#592893]/70 to-transparent flex items-end p-8">
                  <div>
                    <h4 className="font-serif font-bold text-white text-lg mb-2">Key Outcomes</h4>
                    <p className="text-white/80 text-xs leading-relaxed">Receive a verified Certificate of Completion, sequencing templates, and direct lifetime mentorship under Aishwarya Sharma.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-subtitle block text-[#D8227A] uppercase text-xs tracking-[2px] font-semibold mb-3">Realize Your Potential</span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#2C2624] mb-4">Benefits of Regular Yoga Practice</h2>
            <p className="text-[#726A67] max-w-xl mx-auto text-sm sm:text-base">Integrating authentic yogic practices into your routine shapes your body, stabilizes your mind, and elevates your lifestyle.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Physical */}
            <div className="bg-[#FDFBF7] rounded-3xl border border-[#F2ECE4] p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-[#FD6804] text-white flex items-center justify-center">
                  {/* Yoga position SVG */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="4" r="2"/>
                    <path d="M5 20l3-6 4-3 4 3 3 6M12 11v9"/>
                  </svg>
                </div>
                <h3 className="font-serif font-bold text-xl text-[#2C2624]">Physical Well-being</h3>
              </div>
              <ul className="space-y-3 text-sm text-[#2C2624] font-medium">
                <li className="flex gap-2">🌿 Improved flexibility & joint mobility</li>
                <li className="flex gap-2">🌿 Better skeletal alignment & posture</li>
                <li className="flex gap-2">🌿 Increased strength, tone, & stamina</li>
                <li className="flex gap-2">🌿 Enhanced coordination & physical balance</li>
                <li className="flex gap-2">🌿 Relief from chronic body stiffness</li>
              </ul>
            </div>

            {/* Mental */}
            <div className="bg-[#FDFBF7] rounded-3xl border border-[#F2ECE4] p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-[#D8227A] text-white flex items-center justify-center">
                  {/* Scale SVG */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M5 7h14M5 7L3 17h4L5 7zm14 0l-2 10h4l-2-10zM12 22H6m6 0h6"/>
                  </svg>
                </div>
                <h3 className="font-serif font-bold text-xl text-[#2C2624]">Mental & Emotional Balance</h3>
              </div>
              <ul className="space-y-3 text-sm text-[#2C2624] font-medium">
                <li className="flex gap-2">🌿 Marked reduction in stress & anxiety</li>
                <li className="flex gap-2">🌿 Sharper focus, memory & concentration</li>
                <li className="flex gap-2">🌿 Deeper sleep quality & recovery</li>
                <li className="flex gap-2">🌿 Greater emotional resilience & calm</li>
                <li className="flex gap-2">🌿 Deeper mind-body connection</li>
              </ul>
            </div>

            {/* Lifestyle */}
            <div className="bg-[#FDFBF7] rounded-3xl border border-[#F2ECE4] p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-[#592893] text-white flex items-center justify-center">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="font-serif font-bold text-xl text-[#2C2624]">Lifestyle & Habits</h3>
              </div>
              <ul className="space-y-3 text-sm text-[#2C2624] font-medium">
                <li className="flex gap-2">🌿 Build a positive morning routine</li>
                <li className="flex gap-2">🌿 Constant high natural energy</li>
                <li className="flex gap-2">🌿 Higher workplace focus & productivity</li>
                <li className="flex gap-2">🌿 Mindful eating habits</li>
                <li className="flex gap-2">🌿 Sustainable lifelong wellness</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="#contact" onClick={(e) => { e.preventDefault(); openPopup(); }} 
              className="bg-gradient-to-r from-[#FD6804] to-[#D8227A] text-white font-bold py-4 px-8 rounded-full transition-all inline-block active:scale-95 text-sm"
            >
              Start Your Transformation Today
            </Link>
          </div>
        </div>
      </section>

      {/* Timings Section */}
      <section id="timings" className="py-20 md:py-28 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-subtitle block text-[#D8227A] uppercase text-xs tracking-[2px] font-semibold mb-3">Flexible Batches</span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#2C2624] mb-4">Live Group Class Timings</h2>
            <p className="text-[#726A67] max-w-xl mx-auto text-sm sm:text-base">We offer multiple batch timings in the morning and evening, letting you prioritize wellness around your schedule.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Morning */}
              <div className="bg-white rounded-3xl border border-[#F2ECE4] p-8 shadow-sm">
                <div className="flex flex-col gap-2 mb-6 pb-4 border-b border-[#F2ECE4]">
                  <span className="text-xs uppercase font-semibold tracking-wider text-[#FD6804] bg-[#FD6804]/10 py-1 px-3.5 rounded-full self-start">Morning</span>
                  <h3 className="font-serif font-bold text-xl text-[#2C2624]">Morning Batches</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span className="text-lg">🕒</span>
                    <div>
                      <span className="block font-bold text-sm text-[#2C2624]">6:30 AM – 7:30 AM</span>
                      <span className="text-xs text-[#726A67]">Live Online Group Session</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-lg">🕒</span>
                    <div>
                      <span className="block font-bold text-sm text-[#2C2624]">7:45 AM – 8:45 AM</span>
                      <span className="text-xs text-[#726A67]">Live Online Group Session</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-lg">🕒</span>
                    <div>
                      <span className="block font-bold text-sm text-[#2C2624]">9:00 AM – 10:00 AM</span>
                      <span className="text-xs text-[#726A67]">Live Online Group Session</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Evening */}
              <div className="bg-white rounded-3xl border border-[#F2ECE4] p-8 shadow-sm">
                <div className="flex flex-col gap-2 mb-6 pb-4 border-b border-[#F2ECE4]">
                  <span className="text-xs uppercase font-semibold tracking-wider text-[#592893] bg-[#592893]/10 py-1 px-3.5 rounded-full self-start">Evening</span>
                  <h3 className="font-serif font-bold text-xl text-[#2C2624]">Evening Batches</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span className="text-lg">🕒</span>
                    <div>
                      <span className="block font-bold text-sm text-[#2C2624]">7:45 PM – 8:45 PM</span>
                      <span className="text-xs text-[#726A67]">Live Online Group Session</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-lg">🕒</span>
                    <div>
                      <span className="block font-bold text-sm text-[#2C2624]">9:00 PM – 10:00 PM</span>
                      <span className="text-xs text-[#726A67]">Live Online Group Session</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#fef3d5] rounded-2xl p-6 border border-[#592893]/10 text-center mb-8">
              <p className="text-sm font-medium text-[#592893]">💡 All batches are conducted live online with strictly limited spots to ensure Aishwarya Sharma can provide real-time posture corrections and cue adjustments.</p>
            </div>
            
            <div className="text-center">
              <Link href="#contact" onClick={(e) => { e.preventDefault(); openPopup(); }} 
                className="bg-gradient-to-r from-[#FD6804] to-[#D8227A] text-white font-bold py-3.5 px-7 rounded-full text-sm shadow-md"
              >
                Book Your Timing Slot
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-subtitle block text-[#D8227A] uppercase text-xs tracking-[2px] font-semibold mb-3">Invest In Yourself</span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#2C2624] mb-4">Transparent & Unified Pricing</h2>
            <p className="text-[#726A67] max-w-xl mx-auto text-sm sm:text-base">Select the wellness plan matching your commitments. We display domestic (INR) and international (USD) pricing side-by-side for absolute clarity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Card 1 */}
            <div className="bg-[#FDFBF7] rounded-3xl border border-[#F2ECE4] p-8 shadow-sm flex flex-col items-center text-center">
              <h3 className="font-serif font-bold text-lg text-[#2C2624] mb-1">Group Classes</h3>
              <p className="text-xs text-[#726A67] mb-6">3 Days/Week</p>
              <div className="flex flex-col gap-1 items-center mb-6 pb-6 border-b border-[#F2ECE4] w-full">
                <span className="font-serif font-bold text-2xl text-[#592893]">₹1,499<span className="text-xs font-sans font-normal text-[#726A67]">/month</span></span>
                <span className="text-[#726A67] text-xs">/</span>
                <span className="font-serif font-bold text-2xl text-[#D8227A]">$39<span className="text-xs font-sans font-normal text-[#726A67]">/month</span></span>
              </div>
              <ul className="space-y-2.5 text-xs text-[#2C2624] font-medium w-full text-left mb-8">
                <li className="flex gap-2">🌸 Live Interactive Sessions</li>
                <li className="flex gap-2">🌸 Small Batch Learning</li>
                <li className="flex gap-2">🌸 Posture Corrections</li>
                <li className="flex gap-2">🌸 Breathwork & Meditation</li>
              </ul>
              <Link href="#contact" onClick={(e) => { e.preventDefault(); selectPricingPreset("Live Online Group Yoga Classes (3 Days/Week)"); openPopup(); }}
                className="bg-white hover:bg-[#F2ECE4] text-[#592893] border border-[#F2ECE4] font-bold py-2.5 px-6 rounded-xl w-full text-center transition-all text-xs"
              >
                Book Slot
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl border-2 border-[#D8227A] p-8 shadow-md flex flex-col items-center text-center relative">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FD6804] to-[#D8227A] text-white text-[9px] uppercase tracking-wider font-semibold py-1 px-3 rounded-full">Best Value</div>
              <h3 className="font-serif font-bold text-lg text-[#2C2624] mb-1">Group Classes</h3>
              <p className="text-xs text-[#726A67] mb-6">5 Days/Week</p>
              <div className="flex flex-col gap-1 items-center mb-6 pb-6 border-b border-[#F2ECE4] w-full">
                <span className="font-serif font-bold text-2xl text-[#592893]">₹1,999<span className="text-xs font-sans font-normal text-[#726A67]">/month</span></span>
                <span className="text-[#726A67] text-xs">/</span>
                <span className="font-serif font-bold text-2xl text-[#D8227A]">$59<span className="text-xs font-sans font-normal text-[#726A67]">/month</span></span>
              </div>
              <ul className="space-y-2.5 text-xs text-[#2C2624] font-medium w-full text-left mb-8">
                <li className="flex gap-2">🌸 Live Interactive Sessions</li>
                <li className="flex gap-2">🌸 Full Weekly Access</li>
                <li className="flex gap-2">🌸 Posture Corrections</li>
                <li className="flex gap-2">🌸 Breathwork & Meditation</li>
              </ul>
              <Link href="#contact" onClick={(e) => { e.preventDefault(); selectPricingPreset("Live Online Group Yoga Classes (5 Days/Week)"); openPopup(); }}
                className="bg-gradient-to-r from-[#FD6804] to-[#D8227A] text-white font-bold py-2.5 px-6 rounded-xl w-full text-center transition-all text-xs"
              >
                Book Slot
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FDFBF7] rounded-3xl border border-[#F2ECE4] p-8 shadow-sm flex flex-col items-center text-center">
              <h3 className="font-serif font-bold text-lg text-[#2C2624] mb-1">Foundation Course</h3>
              <p className="text-xs text-[#726A67] mb-6">21-Day Fundamentals</p>
              <div className="flex flex-col gap-1 items-center mb-6 pb-6 border-b border-[#F2ECE4] w-full">
                <span className="font-serif font-bold text-2xl text-[#592893]">₹2,999<span className="text-xs font-sans font-normal text-[#726A67]"> one-time</span></span>
                <span className="text-[#726A67] text-xs">/</span>
                <span className="font-serif font-bold text-2xl text-[#D8227A]">$79<span className="text-xs font-sans font-normal text-[#726A67]"> one-time</span></span>
              </div>
              <ul className="space-y-2.5 text-xs text-[#2C2624] font-medium w-full text-left mb-8">
                <li className="flex gap-2">🌸 21 Days Live Online Sessions</li>
                <li className="flex gap-2">🌸 Step-by-Step Fundamentals</li>
                <li className="flex gap-2">🌸 Posture Corrections</li>
                <li className="flex gap-2">🌸 Certificate of Completion</li>
              </ul>
              <Link href="#contact" onClick={(e) => { e.preventDefault(); selectPricingPreset("21-Day Foundation Course"); openPopup(); }}
                className="bg-white hover:bg-[#F2ECE4] text-[#592893] border border-[#F2ECE4] font-bold py-2.5 px-6 rounded-xl w-full text-center transition-all text-xs"
              >
                Enroll Now
              </Link>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FDFBF7] rounded-3xl border border-[#F2ECE4] p-8 shadow-sm flex flex-col items-center text-center">
              <h3 className="font-serif font-bold text-lg text-[#2C2624] mb-1">Certification</h3>
              <p className="text-xs text-[#726A67] mb-6">50-Hour Certification</p>
              <div className="flex flex-col gap-1 items-center mb-6 pb-6 border-b border-[#F2ECE4] w-full">
                <span className="font-serif font-bold text-2xl text-[#592893]">₹7,999<span className="text-xs font-sans font-normal text-[#726A67]"> one-time</span></span>
                <span className="text-[#726A67] text-xs">/</span>
                <span className="font-serif font-bold text-2xl text-[#D8227A]">$199<span className="text-xs font-sans font-normal text-[#726A67]"> one-time</span></span>
              </div>
              <ul className="space-y-2.5 text-xs text-[#2C2624] font-medium w-full text-left mb-8">
                <li className="flex gap-2">🌸 Live Interactive Lectures</li>
                <li className="flex gap-2">🌸 Anatomy & Philosophy</li>
                <li className="flex gap-2">🌸 Practice Sequencing Study</li>
                <li className="flex gap-2">🌸 Certificate of Completion</li>
              </ul>
              <Link href="#contact" onClick={(e) => { e.preventDefault(); selectPricingPreset("50-Hour Yoga Foundation Certification Program"); openPopup(); }}
                className="bg-white hover:bg-[#F2ECE4] text-[#592893] border border-[#F2ECE4] font-bold py-2.5 px-6 rounded-xl w-full text-center transition-all text-xs"
              >
                Enroll Now
              </Link>
            </div>
          </div>

          <div className="text-center text-xs text-[#726A67] mt-8">
            <p>💳 <strong>Convenient Payment Options:</strong> UPI, Bank Transfer, Razorpay, Stripe, PayPal</p>
          </div>
        </div>
      </section>

      {/* Studio Policies & Guidelines */}
      <section id="policies" className="py-20 md:py-28 bg-[#FDFBF7] border-t border-[#F2ECE4]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-subtitle block text-[#D8227A] uppercase text-xs tracking-[2px] font-semibold mb-3">Studio Guidelines</span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#2C2624] mb-4">Studio Policies & Disclaimer</h2>
            <p className="text-[#726A67] text-sm sm:text-base">Implementing clear studio policies was the turning point that allowed me to build real structure. It took the guesswork out of daily operations and made the studio a professional space where the energy of the practice is respected.</p>
          </div>

          <div className="space-y-4">
            {/* Policy item 1 */}
            <div className="bg-white p-6 rounded-2xl border border-[#F2ECE4] shadow-sm flex items-start gap-4 hover:border-[#D8227A] transition-all">
              <span className="text-xl">🌸</span>
              <div>
                <h4 className="font-serif font-bold text-base text-[#592893] mb-1.5">Limited Spots & Batch Model</h4>
                <p className="text-xs text-[#726A67] leading-relaxed">We teach in progressive monthly batches with limited capacity to guarantee you get individual attention.</p>
              </div>
            </div>

            {/* Policy item 2 */}
            <div className="bg-white p-6 rounded-2xl border border-[#F2ECE4] shadow-sm flex items-start gap-4 hover:border-[#D8227A] transition-all">
              <span className="text-xl">🌸</span>
              <div>
                <h4 className="font-serif font-bold text-base text-[#592893] mb-1.5">Payment & Commitment</h4>
                <p className="text-xs text-[#726A67] leading-relaxed">Registration is only confirmed upon full payment; because the curriculum is progressive, missed classes cannot be refunded or carried over.</p>
              </div>
            </div>

            {/* Policy item 3 */}
            <div className="bg-white p-6 rounded-2xl border border-[#F2ECE4] shadow-sm flex items-start gap-4 hover:border-[#D8227A] transition-all">
              <span className="text-xl">🌸</span>
              <div>
                <h4 className="font-serif font-bold text-base text-[#592893] mb-1.5">Health & Safety</h4>
                <p className="text-xs text-[#726A67] leading-relaxed">You are required to declare any injuries or medical conditions before the batch begins so your practice can be modified safely.</p>
              </div>
            </div>

            {/* Policy item 4 */}
            <div className="bg-white p-6 rounded-2xl border border-[#F2ECE4] shadow-sm flex items-start gap-4 hover:border-[#D8227A] transition-all">
              <span className="text-xl">🌸</span>
              <div>
                <h4 className="font-serif font-bold text-base text-[#592893] mb-1.5">Recording & Content</h4>
                <p className="text-xs text-[#726A67] leading-relaxed">We take brief clips for studio promotions, but you can easily opt out by telling me beforehand.</p>
              </div>
            </div>

            {/* Policy item 5 */}
            <div className="bg-white p-6 rounded-2xl border border-[#F2ECE4] shadow-sm flex items-start gap-4 hover:border-[#D8227A] transition-all">
              <span className="text-xl">🌸</span>
              <div>
                <h4 className="font-serif font-bold text-base text-[#592893] mb-1.5">Liability Waiver</h4>
                <p className="text-xs text-[#726A67] leading-relaxed">Your physical participation is entirely at your own discretion and personal risk.</p>
              </div>
            </div>

            {/* Policy item 6 */}
            <div className="bg-white p-6 rounded-2xl border border-[#F2ECE4] shadow-sm flex items-start gap-4 hover:border-[#D8227A] transition-all">
              <span className="text-xl">🌸</span>
              <div>
                <h4 className="font-serif font-bold text-base text-[#592893] mb-1.5">Practice Disclaimer</h4>
                <p className="text-xs text-[#726A67] leading-relaxed">Yoga is a personal journey; every body is different, and we expect you to honor your own pace.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 text-xs text-[#726A67]">
            <p className="mb-4">These rules exist so that the minute you step onto your mat, you don't have to worry about a thing. The structure is already holding the space for you.</p>
            <Link href="#contact" onClick={(e) => { e.preventDefault(); openPopup(); }} 
              className="bg-gradient-to-r from-[#FD6804] to-[#D8227A] text-white font-bold py-3.5 px-7 rounded-full inline-block shadow-md text-sm"
            >
              I Agree & Want to Register
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="testimonials" className="py-20 md:py-28 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-subtitle block text-[#D8227A] uppercase text-xs tracking-[2px] font-semibold mb-3">Real Experiences</span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#2C2624] mb-4">Student Success Stories</h2>
            <p className="text-[#726A67] max-w-xl mx-auto text-sm sm:text-base">Read how learning authentic yoga has transformed the daily health and energy of our global community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Story 1 */}
            <div className="bg-white rounded-3xl border border-[#F2ECE4] p-8 shadow-sm flex flex-col justify-between">
              <div className="mb-4">
                <span className="text-[#FBBF24] text-lg">★★★★★</span>
                <p className="text-sm font-medium italic text-[#2C2624] mt-3">"Joining Aishwarya Yogshala has transformed my daily routine. My flexibility has improved, my stress levels have reduced, and I feel much more energetic."</p>
              </div>
              <div>
                <span className="block font-bold text-xs text-[#2C2624]">Riya S.</span>
                <span className="text-[10px] text-[#726A67]">New Delhi, India</span>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-white rounded-3xl border border-[#F2ECE4] p-8 shadow-sm flex flex-col justify-between">
              <div className="mb-4">
                <span className="text-[#FBBF24] text-lg">★★★★★</span>
                <p className="text-sm font-medium italic text-[#2C2624] mt-3">"The small group classes make all the difference. I received personal attention throughout, and my posture improved significantly with corrections."</p>
              </div>
              <div>
                <span className="block font-bold text-xs text-[#2C2624]">Rahul M.</span>
                <span className="text-[10px] text-[#726A67]">Bengaluru, India</span>
              </div>
            </div>

            {/* Story 3 */}
            <div className="bg-white rounded-3xl border border-[#F2ECE4] p-8 shadow-sm flex flex-col justify-between">
              <div className="mb-4">
                <span className="text-[#FBBF24] text-lg">★★★★★</span>
                <p className="text-sm font-medium italic text-[#2C2624] mt-3">"Despite attending online from another country, I felt connected. The teaching style is clear, professional, and very encouraging."</p>
              </div>
              <div>
                <span className="block font-bold text-xs text-[#2C2624]">Emily R.</span>
                <span className="text-[10px] text-[#726A67]">Sydney, Australia</span>
              </div>
            </div>

            {/* Story 4 */}
            <div className="bg-white rounded-3xl border border-[#F2ECE4] p-8 shadow-sm flex flex-col justify-between">
              <div className="mb-4">
                <span className="text-[#FBBF24] text-lg">★★★★★</span>
                <p className="text-sm font-medium italic text-[#2C2624] mt-3">"The 21-Day Foundation Course gave me the confidence to begin my yoga journey with proper technique. Highly recommend Aishwarya!"</p>
              </div>
              <div>
                <span className="block font-bold text-xs text-[#2C2624]">Sarah L.</span>
                <span className="text-[10px] text-[#726A67]">Toronto, Canada</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="#contact" onClick={(e) => { e.preventDefault(); openPopup(); }} 
              className="bg-gradient-to-r from-[#FD6804] to-[#D8227A] text-white font-bold py-4 px-8 rounded-full inline-block active:scale-95 text-sm"
            >
              Start Your Success Story Today
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-subtitle block text-[#D8227A] uppercase text-xs tracking-[2px] font-semibold mb-3">Got Questions?</span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#2C2624] mb-4">Frequently Asked Questions</h2>
            <p className="text-[#726A67] text-sm sm:text-base">Find answers to common questions about our virtual setups, mats, certificates, and enrollment.</p>
          </div>

          <div className="space-y-4 mb-12">
            {[
              {
                q: "Who can join the classes?",
                a: "Our programs are suitable for complete beginners, working professionals, homemakers, students, senior citizens, and anyone interested in improving their health and fitness through yoga."
              },
              {
                q: "Are these individual or group classes?",
                a: "All regular sessions are conducted as Live Online Group Yoga Classes in small batches. This setup allows participants to receive personalized guidance while enjoying the motivational energy of practicing with others."
              },
              {
                q: "Do I need previous yoga experience?",
                a: "No. All beginners are highly welcome. Our programs are designed to teach postures from the ground up, scaling the difficulty according to your comfort level."
              },
              {
                q: "Are the classes live?",
                a: "Yes. Every single class is conducted completely live online by Aishwarya Sharma, allowing real-time interaction, verbal cues, and posture corrections."
              },
              {
                q: "What equipment do I need to join?",
                a: "All you need to start is: a yoga mat, comfortable clothing, a stable internet connection, a water bottle, and a quiet, well-lit practice space."
              },
              {
                q: "Will I receive a certificate?",
                a: "Yes. Students who successfully complete the 21-Day Foundation Course or the 50-Hour Yoga Foundation Certification Program will receive a Certificate of Completion from Aishwarya Yogshala."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#FDFBF7] rounded-xl border border-[#F2ECE4] overflow-hidden">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left py-5 px-6 font-semibold text-sm flex items-center justify-between text-[#2C2624] hover:text-[#D8227A]"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#D8227A]">{openFaqIndex === index ? "−" : "+"}</span>
                </button>
                {openFaqIndex === index && (
                  <div className="py-4 px-6 border-t border-[#F2ECE4] text-xs text-[#726A67] leading-relaxed animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={directWhatsAppEnquiry}
              className="bg-gradient-to-r from-[#FD6804] to-[#D8227A] text-white font-bold py-3.5 px-8 rounded-full text-xs shadow-md active:scale-95"
            >
              Have More Questions? Ask Us on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl border border-[#F2ECE4] shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gradient-to-br from-[#FD6804]/5 via-[#D8227A]/5 to-[#592893]/5 p-8 md:p-12 flex flex-col justify-center">
                <span className="block text-[#D8227A] uppercase text-xs tracking-[2px] font-semibold mb-3">Start Your Journey</span>
                <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#2C2624] mb-4">Book Your Free Consultation</h2>
                <p className="text-sm text-[#726A67] mb-8 max-w-sm">Ready to step onto the mat? Fill out this quick form. We will reach out to schedule your free wellness consultation and guide you on the best path forward.</p>
                
                <div className="space-y-4">
                  <a href="tel:+918130171173" className="bg-white p-4 rounded-xl border border-[#F2ECE4] flex items-center gap-4 hover:border-[#D8227A] transition-all">
                    <span className="text-lg">📞</span>
                    <div>
                      <span className="block text-[10px] uppercase text-[#726A67]">Call or Message Direct</span>
                      <span className="block font-bold text-sm text-[#2C2624]">+91 8130171173</span>
                    </div>
                  </a>
                  <a href="https://wa.me/918130171173" className="bg-white p-4 rounded-xl border border-[#F2ECE4] flex items-center gap-4 hover:border-[#D8227A] transition-all" target="_blank" rel="noopener noreferrer">
                    <span className="text-lg">💬</span>
                    <div>
                      <span className="block text-[10px] uppercase text-[#726A67]">Chat on WhatsApp</span>
                      <span className="block font-bold text-sm text-[#2C2624]">+91 8130171173</span>
                    </div>
                  </a>
                  <a href="mailto:sharmaaishwarya582@gmail.com" className="bg-white p-4 rounded-xl border border-[#F2ECE4] flex items-center gap-4 hover:border-[#D8227A] transition-all">
                    <span className="text-lg">✉️</span>
                    <div>
                      <span className="block text-[10px] uppercase text-[#726A67]">Email Address</span>
                      <span className="block font-bold text-sm text-[#2C2624]">sharmaaishwarya582@gmail.com</span>
                    </div>
                  </a>
                  <a href="https://instagram.com/aishwaryawellnessacademy" className="bg-white p-4 rounded-xl border border-[#F2ECE4] flex items-center gap-4 hover:border-[#D8227A] transition-all" target="_blank" rel="noopener noreferrer">
                    <span className="text-lg">📷</span>
                    <div>
                      <span className="block text-[10px] uppercase text-[#726A67]">Follow Us on Instagram</span>
                      <span className="block font-bold text-sm text-[#2C2624]">@aishwaryawellnessacademy</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#2C2624] mb-1.5">Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name" 
                      className="w-full bg-[#FDFBF7] border border-[#F2ECE4] rounded-xl py-3 px-4 text-xs text-[#2C2624] focus:border-[#D8227A] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#2C2624] mb-1.5">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address" 
                      className="w-full bg-[#FDFBF7] border border-[#F2ECE4] rounded-xl py-3 px-4 text-xs text-[#2C2624] focus:border-[#D8227A] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#2C2624] mb-1.5">WhatsApp / Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number" 
                      className="w-full bg-[#FDFBF7] border border-[#F2ECE4] rounded-xl py-3 px-4 text-xs text-[#2C2624] focus:border-[#D8227A] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#2C2624] mb-1.5">Select Program</label>
                    <select 
                      name="program" 
                      required 
                      value={formData.program}
                      onChange={handleInputChange}
                      className="w-full bg-[#FDFBF7] border border-[#F2ECE4] rounded-xl py-3 px-4 text-xs text-[#2C2624] focus:border-[#D8227A] outline-none"
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
                  <div>
                    <label className="block text-xs font-semibold text-[#2C2624] mb-1.5">Additional Notes (Optional)</label>
                    <textarea 
                      name="message" 
                      rows={3} 
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about any health conditions or previous yoga experience..." 
                      className="w-full bg-[#FDFBF7] border border-[#F2ECE4] rounded-xl py-3 px-4 text-xs text-[#2C2624] focus:border-[#D8227A] outline-none"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#FD6804] to-[#D8227A] text-white font-bold py-3.5 px-6 rounded-full text-xs shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    Submit & Chat on WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Enquiry Popup Modal */}
      <AnimatePresence>
        {showWpPopup && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-8 w-[320px] z-50 shadow-2xl rounded-2xl overflow-hidden border border-[#F2ECE4] bg-white"
          >
            <div className="bg-gradient-to-r from-[#FD6804] to-[#D8227A] text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-xl">🧘</span>
                <div>
                  <h4 className="font-bold text-sm text-white leading-tight">Aishwarya Sharma</h4>
                  <p className="text-[10px] text-white/90">Online // Wellness Coach</p>
                </div>
              </div>
              <button onClick={closeWpPopup} className="text-white hover:text-white/80 text-xl font-light leading-none">×</button>
            </div>
            <div className="p-5 bg-[#FDFBF7]">
              <p className="text-xs text-[#2C2624] leading-relaxed bg-white border border-[#F2ECE4] p-3 rounded-lg relative">
                Namaste! 🙏 Welcome to Aishwarya Yogshala. Let me know if you have any questions regarding class registrations, batches, or consultations.
              </p>
            </div>
            <div className="p-4 bg-white border-t border-[#F2ECE4]">
              <a 
                href="https://wa.me/918130171173?text=Namaste!%20I%20have%20an%20enquiry%20regarding%20Aishwarya%20Yogshala%20classes%20and%20consultations." 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={closeWpPopup}
                className="w-full bg-gradient-to-r from-[#FD6804] to-[#D8227A] text-white font-bold py-2.5 px-6 rounded-full text-xs text-center flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <MessageSquare className="h-4 w-4" /> Connect on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Bubble on the Right */}
      <div 
        onClick={() => setShowWpPopup(prev => !prev)}
        className="fixed bottom-8 right-8 h-14 w-14 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-2xl cursor-pointer z-50 hover:scale-105 transition-all animate-pulse-slow"
      >
        <span className="text-2xl">💬</span>
      </div>

    </div>
  );
}
