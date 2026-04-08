import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, ChevronDown, Check, Loader2, Sparkles, MessageCircle } from 'lucide-react';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-offwhite overflow-hidden">
      {/* 5.1 CONTACT HERO */}
      <section className="relative min-h-[60vh] flex flex-col justify-center items-center py-[120px] overflow-hidden bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
        
        {/* Blurred Gold Circle Accent */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-500/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 text-center">
          <div className="relative inline-block">
            {/* Floating Icons */}
            <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-10 -left-10 opacity-10">
              <Sparkles className="w-8 h-8 text-gold-500" />
            </motion.div>
            <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -bottom-5 -right-12 opacity-10">
              <Sparkles className="w-10 h-10 text-gold-500" />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: -30, letterSpacing: '10px' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '-0.5px' }}
              transition={{ duration: 1.2, ease: [0.645, 0.045, 0.355, 1.000], delay: 0.2 }}
              className="font-serif font-bold text-4xl md:text-[42px] lg:text-[68px] text-navy-900 uppercase leading-[1.1]"
            >
              Get In Touch
            </motion.h1>
            
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 280, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.6 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-gold-500 to-gold-300 shadow-[0_2px_8px_rgba(212,175,55,0.3)]"
            />
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            className="font-sans text-base md:text-[18px] lg:text-[22px] text-gray-500 tracking-[0.3px] leading-[1.6] max-w-[600px] mx-auto mt-8"
          >
            We're here to help you create the perfect cleaning solution for your space. Reach out to us today.
          </motion.p>
        </div>
      </section>

      {/* 5.2 CONTACT FORM & INFO SECTION */}
      <section className="bg-[#F9F9F9] py-[60px] lg:py-[100px]">
        <div className="w-full px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[60px] items-start">
            
            {/* Left Column - Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-[16px] p-10 lg:p-[60px] shadow-[0_10px_40px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] border border-black/5 hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)] transition-shadow duration-400"
            >
              <div className="mb-[30px]">
                <h3 className="font-sans font-semibold text-[14px] text-gold-500 tracking-[2px] uppercase mb-2">Send Us a Message</h3>
                <div className="w-[40px] h-[2px] bg-gold-500" />
              </div>

              <ContactForm />

            </motion.div>

            {/* Right Column - Contact Info Panel */}
            <div className="lg:sticky lg:top-[100px]">
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-[16px] p-8 lg:p-[50px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-black/5"
              >
                <h3 className="font-serif font-semibold text-[28px] text-navy-900 tracking-[-0.3px] mb-2">REACH US DIRECTLY</h3>
                <motion.div 
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: 60, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  className="h-[3px] bg-gradient-to-r from-gold-500 to-gold-300 rounded-sm shadow-[0_2px_6px_rgba(212,175,55,0.3)] mb-10"
                />

                <div className="flex flex-col gap-5">
                  <ContactItem icon={MapPin} label="Office Address" value="123 Prestige Ave, Juba, South Sudan" delay={0} animationType="group-hover:animate-[pinBounce_0.6s_ease-in-out_2]" />
                  <ContactItem icon={Phone} label="Phone Number" value="+211 900 000 000" delay={0.1} animationType="group-hover:animate-[phoneShake_0.5s_ease-in-out_3]" />
                  <ContactItem icon={Mail} label="Email Address" value="hello@prestigecleaning.com" delay={0.2} animationType="group-hover:animate-[emailFly_1s_cubic-bezier(0.25,0.46,0.45,0.94)]" />
                  <ContactItem icon={Clock} label="Business Hours" value="Mon - Sat: 8:00 AM - 6:00 PM" delay={0.3} animationType="group-hover:animate-[clockTick_2s_steps(12)_infinite]" />
                </div>

                {/* Map Embed */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
                  whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
                  className="w-full h-[280px] rounded-[12px] overflow-hidden mt-10 shadow-[0_4px_16px_rgba(0,0,0,0.1)] border border-black/5 relative bg-gray-100 flex items-center justify-center"
                >
                  {/* Placeholder for actual map iframe */}
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-50" />
                  
                  {/* Animated Map Pin */}
                  <motion.div 
                    initial={{ y: -200, scale: 0.5, opacity: 0 }}
                    whileInView={{ y: 0, scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.68, -0.55, 0.265, 1.55], delay: 1.4 }}
                    className="relative z-10 text-navy-900"
                  >
                    <MapPin className="w-10 h-10 drop-shadow-lg" fill="#D4AF37" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-navy-900 rounded-full animate-[pinPulse_2s_ease-in-out_infinite]" />
                  </motion.div>
                </motion.div>

              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 5.3 QUICK CONTACT METHODS */}
      <section className="relative py-[60px] lg:py-[80px] border-t border-black/5 bg-gradient-to-b from-[#F5F5F5] to-[#FAFAFA] overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] flex flex-wrap gap-20 justify-around items-center overflow-hidden">
          <Phone className="w-24 h-24" />
          <Mail className="w-32 h-32" />
          <MessageCircle className="w-20 h-20" />
          <Phone className="w-16 h-16" />
        </div>

        <div className="w-full px-6 md:px-12 lg:px-24 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-serif font-semibold text-[28px] md:text-[36px] text-navy-900 tracking-[-0.5px] mb-[50px]"
          >
            PREFER INSTANT CONTACT?
          </motion.h2>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-[30px]">
            <QuickContactBtn icon={MessageCircle} title="WhatsApp Us" type="whatsapp" delay={0} />
            <QuickContactBtn icon={Phone} title="Call Now" type="call" delay={0.15} />
            <QuickContactBtn icon={Mail} title="Email Us" type="email" delay={0.3} />
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper Components

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <FloatingInput id="firstName" label="First Name" required />
        <FloatingInput id="lastName" label="Last Name" required />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <FloatingInput id="email" type="email" label="Email Address" required />
        <FloatingInput id="phone" type="tel" label="Phone Number" />
      </div>

      <CustomSelect 
        id="service" 
        label="Service Needed" 
        options={['Deep Cleaning', 'Regular Cleaning', 'Move-In/Move-Out', 'Office Cleaning', 'Post-Construction', 'Other']} 
      />

      <FloatingInput id="message" label="Your Message" isTextarea required />

      <button 
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className={`group relative w-full mt-10 py-[18px] px-10 rounded-[8px] font-sans font-semibold text-[16px] tracking-[1px] uppercase overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] shadow-[0_4px_12px_rgba(26,58,82,0.3)] ${
          status === 'success' 
            ? 'bg-[#27AE60] border-2 border-[#27AE60] text-white' 
            : 'bg-navy-900 border-2 border-navy-900 text-white hover:bg-gold-500 hover:border-gold-500 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(212,175,55,0.4)]'
        }`}
      >
        {/* Sweep Effect */}
        {status === 'idle' && (
          <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_0.6s_ease-in-out] pointer-events-none" />
        )}

        <div className="relative z-10 flex items-center justify-center">
          {status === 'idle' && <span>Send Message</span>}
          {status === 'loading' && <Loader2 className="w-6 h-6 animate-spin text-white" />}
          {status === 'success' && (
            <motion.div 
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
              className="flex items-center gap-2"
            >
              <Check className="w-7 h-7 text-white" />
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-sm normal-case tracking-normal"
              >
                Message Sent!
              </motion.span>
            </motion.div>
          )}
        </div>
      </button>
    </form>
  );
}

function FloatingInput({ id, label, type = "text", required = false, isTextarea = false }: { id: string; label: string; type?: string; required?: boolean; isTextarea?: boolean }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  
  const isActive = focused || value.length > 0;

  return (
    <div className="relative mb-8 w-full">
      {isTextarea ? (
        <textarea
          id={id}
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full pt-4 pb-3 bg-transparent border-b-2 border-[#E0E0E0] font-body text-[16px] text-navy-900 focus:outline-none resize-y min-h-[100px] max-h-[300px] h-[140px] transition-colors duration-300 relative z-10"
        />
      ) : (
        <input
          type={type}
          id={id}
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full pt-4 pb-3 bg-transparent border-b-2 border-[#E0E0E0] font-body text-[16px] text-navy-900 focus:outline-none transition-colors duration-300 relative z-10"
        />
      )}
      
      <label
        htmlFor={id}
        className={`absolute left-0 font-body transition-all duration-300 pointer-events-none z-0 ${
          isActive 
            ? '-translate-y-6 scale-[0.85] text-gold-500 font-medium' 
            : 'translate-y-4 scale-100 text-[#999999] font-normal'
        }`}
        style={{ transformOrigin: 'left center' }}
      >
        {label} {required && '*'}
      </label>
      
      {/* Animated Bottom Border */}
      <div 
        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-gold-500 to-[#F0D885] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] z-20 ${
          focused ? 'w-full shadow-[0_0_8px_rgba(212,175,55,0.4)]' : 'w-0'
        }`}
      />
      
      {isTextarea && (
        <div className={`absolute -bottom-6 right-0 text-[12px] ${value.length > 450 ? 'text-gold-500' : 'text-[#999999]'}`}>
          {value.length} / 500
        </div>
      )}
    </div>
  );
}

function CustomSelect({ id, label, options }: { id: string; label: string; options: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const selectRef = useRef<HTMLDivElement>(null);
  
  const isActive = isOpen || selected !== '';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative mb-8 w-full" ref={selectRef}>
      <div 
        className="w-full pt-4 pb-3 border-b-2 border-[#E0E0E0] cursor-pointer flex justify-between items-center relative z-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`font-body text-[16px] ${selected ? 'text-navy-900' : 'text-transparent'}`}>
          {selected || 'Select'}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 text-gold-500" />
        </motion.div>
      </div>
      
      <label
        className={`absolute left-0 font-body transition-all duration-300 pointer-events-none z-0 ${
          isActive 
            ? '-translate-y-6 scale-[0.85] text-gold-500 font-medium' 
            : 'translate-y-4 scale-100 text-[#999999] font-normal'
        }`}
        style={{ transformOrigin: 'left center' }}
      >
        {label}
      </label>
      
      <div 
        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-gold-500 to-[#F0D885] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] z-20 ${
          isOpen ? 'w-full shadow-[0_0_8px_rgba(212,175,55,0.4)]' : 'w-0'
        }`}
      />
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            className="absolute top-full left-0 w-full bg-white rounded-[8px] shadow-[0_8px_24px_rgba(0,0,0,0.15)] mt-2 z-50 overflow-hidden"
          >
            {options.map((opt, i) => (
              <motion.div
                key={opt}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
                className="px-5 py-[14px] font-body text-navy-900 hover:bg-gradient-to-r hover:from-gold-500/10 hover:to-transparent cursor-pointer border-l-[3px] border-transparent hover:border-gold-500 transition-all duration-200"
                onClick={() => { setSelected(opt); setIsOpen(false); }}
              >
                {opt}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, delay, animationType }: { icon: any; label: string; value: string; delay: number; animationType: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group flex items-start p-6 rounded-[12px] cursor-pointer border border-transparent hover:border-gold-500/30 hover:bg-gradient-to-br hover:from-gold-500/5 hover:to-gold-500/10 hover:translate-x-2 hover:shadow-[-4px_0_0_0_#D4AF37] transition-all duration-300 relative overflow-hidden"
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500/10 to-gold-500/20 flex items-center justify-center mr-5 shrink-0 group-hover:bg-gold-500 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
        <Icon className={`w-[22px] h-[22px] text-gold-500 group-hover:text-white transition-colors duration-300 ${animationType}`} />
      </div>
      <div className="flex-1">
        <div className="font-sans font-semibold text-[12px] text-[#999999] tracking-[1.5px] uppercase mb-1.5 group-hover:text-gold-500 transition-colors duration-300">
          {label}
        </div>
        <div className="font-body font-medium text-[16px] text-navy-900 leading-[1.5] group-hover:font-semibold group-hover:translate-x-1 transition-all duration-300">
          {value}
        </div>
      </div>
    </motion.div>
  );
}

function QuickContactBtn({ icon: Icon, title, type, delay }: { icon: any; title: string; type: 'whatsapp' | 'call' | 'email'; delay: number }) {
  const getColors = () => {
    switch(type) {
      case 'whatsapp': return { bg: 'from-[#25D366] to-[#1EBE57]', border: 'border-[#25D366]', text: 'text-[#25D366]', glow: 'rgba(37,211,102,0.3)', iconAnim: 'group-hover:animate-[whatsappSpin_0.6s_ease-in-out]' };
      case 'call': return { bg: 'from-navy-900 to-navy-700', border: 'border-navy-900', text: 'text-navy-900', glow: 'rgba(26,58,82,0.3)', iconAnim: 'group-hover:animate-[phoneShake_0.5s_ease-in-out_2]' };
      case 'email': return { bg: 'from-gold-500 to-gold-400', border: 'border-gold-500', text: 'text-gold-500', glow: 'rgba(212,175,55,0.3)', iconAnim: 'group-hover:animate-[emailFly_1s_cubic-bezier(0.25,0.46,0.45,0.94)]' };
      default: return { bg: '', border: '', text: '', glow: '', iconAnim: '' };
    }
  };
  
  const colors = getColors();
  const [isPressed, setIsPressed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3, rotate: -45 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, type: 'spring', bounce: 0.5 }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      className={`group w-full md:w-[280px] h-[100px] md:h-[140px] bg-white border-2 border-navy-900/10 rounded-[16px] flex flex-col items-center justify-center cursor-pointer relative transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:scale-[1.02] hover:${colors.border} hover:shadow-[0_12px_32px_${colors.glow}] overflow-hidden ${isPressed ? 'scale-95 translate-y-0' : ''}`}
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${colors.bg} mix-blend-multiply opacity-5 transition-opacity duration-400`} />
      
      <div className={`w-12 h-12 md:w-[60px] md:h-[60px] rounded-full bg-gradient-to-br ${colors.bg} flex items-center justify-center mb-2 md:mb-4 relative z-10 group-hover:scale-110 transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-md group-hover:shadow-lg`}>
        <Icon className={`w-5 h-5 md:w-7 md:h-7 text-white ${colors.iconAnim}`} />
      </div>
      
      <span className={`font-sans font-semibold text-[16px] md:text-[18px] tracking-[0.5px] text-navy-900 group-hover:${colors.text} group-hover:-translate-y-1 transition-all duration-300 z-10`}>
        {title}
      </span>
    </motion.div>
  );
}
