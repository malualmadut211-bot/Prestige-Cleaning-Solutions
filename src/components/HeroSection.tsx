import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'motion/react';
import { Star, Clock, ArrowRight, Phone, Mail, MapPin, Sparkles, CheckCircle2, Building2, Home, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Helper Components ---

const MagneticButton = ({ children, className, onClick, href }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <Link to={href}>{content}</Link>;
  }
  return <button onClick={onClick} className="block">{content}</button>;
};

const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  return (
    <motion.span className="inline-block relative">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.8, y: 3 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.15, delay: delay + index * 0.04 }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: 4, delay: delay }}
        className="absolute -right-[4px] top-[10%] h-[80%] w-[2px] bg-gold-500"
      />
    </motion.span>
  );
};

// --- Main Hero Component ---

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Smooth Cursor Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 200, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 200, mass: 0.5 });

  // Sparkles State
  const [sparkles, setSparkles] = useState<{ id: number, x: number, y: number }[]>([]);
  const sparkleIdCount = useRef(0);
  const lastSparklePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Spawn sparkle if moved enough distance
      const dist = Math.hypot(e.clientX - lastSparklePos.current.x, e.clientY - lastSparklePos.current.y);
      if (dist > 60) {
        lastSparklePos.current = { x: e.clientX, y: e.clientY };
        const id = sparkleIdCount.current++;
        setSparkles(prev => [...prev.slice(-14), { id, x: e.clientX, y: e.clientY }]);
        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== id));
        }, 900);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const headlineWords = "Prestige Cleaning Solutions".split(" ");
  const brandValues = ["Reliable.", "Discreet.", "Structured."];

  return (
    <section ref={containerRef} className="relative w-full min-h-screen overflow-hidden bg-navy-900 text-white selection:bg-cyan-500/30 font-sans mb-12 md:mb-24">
      
      {/* --- Phase 1: Background Genesis --- */}
      <motion.div style={{ y: yBg, opacity: opacityBg }} className="absolute inset-0 z-0">
        {/* Deep Navy to Slate Blue Mesh Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-800 via-navy-900 to-[#050A18]" />
        
        {/* Animated Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

        {/* Geometric Pattern (SVG Lines) */}
        <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M-100,100 Q200,150 400,100 T800,100 T1400,150" 
            fill="none" 
            stroke="rgba(74,155,155,0.3)" 
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, delay: 0.8, ease: "easeInOut" }}
          />
          <motion.path 
            d="M-100,300 Q300,250 600,300 T1400,250" 
            fill="none" 
            stroke="rgba(212,175,55,0.15)" 
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, delay: 1.2, ease: "easeInOut" }}
          />
        </svg>


      </motion.div>

      {/* --- Interactive Spotlight Cursor --- */}
      <motion.div 
        className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] rounded-full z-0 mix-blend-screen hidden lg:block"
        style={{
          background: 'radial-gradient(circle at center, rgba(248, 249, 250, 0.04) 0%, transparent 50%)',
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />
      
      {/* Custom Cursor Ring */}
      <motion.div 
        className="pointer-events-none fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-gold-500 z-50 hidden lg:block mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />
      <motion.div 
        className="pointer-events-none fixed top-0 left-0 w-2 h-2 rounded-full bg-white z-50 hidden lg:block mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />

      {/* Sparkle Trail */}
      <AnimatePresence>
        {sparkles.map(sparkle => (
          <motion.div
            key={sparkle.id}
            initial={{ scale: 0, opacity: 0, rotate: -90 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0], rotate: 180 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="pointer-events-none fixed z-40 text-gold-500"
            style={{ left: sparkle.x - 8, top: sparkle.y - 8 }}
          >
            <Sparkles size={16} fill="currentColor" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* --- Main Content Layout --- */}
      <motion.div style={{ y: yMid }} className="relative z-10 flex flex-col lg:flex-row min-h-screen max-w-[1600px] mx-auto px-6 lg:px-16 pt-24 lg:pt-0">
        
        {/* Left Column: Content (60%) */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center pb-12 lg:pb-0 lg:pr-12">
          
          {/* Main Headline (Staggered Reveal with Blur) */}
          <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-[80px] xl:text-[96px] leading-[1.05] tracking-tight mb-8 flex flex-wrap gap-x-4 gap-y-2 relative">
            {/* Golden Shimmer Sweep */}
            <motion.div 
              className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-transparent via-gold-500/30 to-transparent skew-x-12 w-[30%]"
              initial={{ x: "-200%" }}
              animate={{ x: "400%" }}
              transition={{ duration: 1.2, delay: 2.2, ease: "easeInOut" }}
            />
            
            {headlineWords.map((word, wordIdx) => (
              <div key={wordIdx} className="flex overflow-hidden pb-2">
                {word.split('').map((letter, letterIdx) => (
                  <motion.span
                    key={letterIdx}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80 drop-shadow-[0_2px_10px_rgba(10,17,40,0.5)] cursor-default"
                    initial={{ y: 60, opacity: 0, filter: "blur(20px)", scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)", scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.8 + (wordIdx * 0.3) + (letterIdx * 0.04), 
                      ease: [0.34, 1.56, 0.64, 1] // Spring bounce
                    }}
                    whileHover={{ 
                      y: -12, 
                      scale: 1.15, 
                      color: "#D4AF37",
                      textShadow: "0 8px 30px rgba(212,175,55,0.6)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            ))}
          </h1>

          {/* Service Tags (Cascade) */}
          <div className="flex flex-wrap gap-4 mb-10">
            {[
              { name: "Offices", icon: Building2, delay: 1.8 },
              { name: "Apartments", icon: Building, delay: 2.0 },
              { name: "Airbnb", icon: Home, delay: 2.2 }
            ].map((tag, i) => (
              <motion.div
                key={tag.name}
                initial={{ opacity: 0, x: 200, rotate: -15, scale: 0.6 }}
                animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: tag.delay, type: "spring", bounce: 0.4 }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -8, 
                  rotate: 2, 
                  backgroundColor: "rgba(42, 74, 127, 0.8)",
                  borderColor: "rgba(212,175,55,0.8)",
                  boxShadow: "0 20px 60px rgba(212,175,55,0.4), 0 0 30px rgba(212,175,55,0.2)"
                }}
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-br from-navy-800 to-[#2A4A7F] border border-gold-500/30 backdrop-blur-md text-white font-semibold shadow-[0_10px_30px_rgba(10,17,40,0.3)] cursor-pointer transition-colors duration-300"
              >
                <tag.icon size={18} className="text-white/80 group-hover:text-gold-500 group-hover:scale-110 transition-all" />
                {tag.name}
              </motion.div>
            ))}
          </div>

          {/* Brand Values */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 mb-12">
            {brandValues.map((value, i) => (
              <div key={value} className="relative overflow-hidden group">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 2.0 + i * 0.4 }}
                  className="text-lg md:text-xl text-silver-400 font-medium tracking-wide inline-block pb-2"
                >
                  {value.replace('.', '')}
                  <motion.span 
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.6, 1], color: ["#C0C0C0", "#D4AF37", "#C0C0C0"] }} 
                    transition={{ duration: 0.3, delay: 2.5 + i * 0.4 }}
                    className="inline-block"
                  >.</motion.span>
                </motion.span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 2.3 + i * 0.4, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-500 origin-left"
                />
              </div>
            ))}
          </div>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 50, filter: "blur(10px)", scale: 0.8 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 0.8, delay: 3.0, type: "spring", bounce: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          >
            <MagneticButton href="/quote" className="group rounded-full shadow-[0_15px_40px_rgba(212,175,55,0.4)] hover:shadow-[0_25px_70px_rgba(212,175,55,0.7),_0_0_40px_rgba(212,175,55,0.4)] transition-all duration-400">
              <div className="relative px-8 py-4 bg-gradient-to-br from-gold-500 to-[#FFD700] rounded-full overflow-hidden group-hover:-translate-y-1 transition-transform duration-400">
                {/* Continuous Shimmer */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 w-[50%]"
                  animate={{ x: ["-200%", "300%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative z-10 flex items-center gap-3 font-sans font-bold text-[18px] uppercase tracking-wide text-navy-900 group-hover:text-navy-900 drop-shadow-sm">
                  Get Your Free Quote
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </div>
            </MagneticButton>

            <MagneticButton href="/services" className="group relative px-8 py-4 rounded-full overflow-hidden border-2 border-gold-500/50 hover:border-gold-500 transition-colors duration-400">
              {/* Hover Fill */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 to-gold-500/15 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 ease-out" />
              <span className="relative z-10 font-sans font-semibold text-[18px] uppercase tracking-wide text-white group-hover:text-white transition-colors flex items-center gap-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                View Our Services
                <Sparkles size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-gold-400" />
              </span>
            </MagneticButton>
          </motion.div>

        </div>

        {/* Right Column: Visuals (40%) */}
        <div className="hidden lg:flex w-[40%] relative items-center justify-center perspective-[1000px]">
          
          {/* Morphing Glass Container for Image */}
          <motion.div 
            initial={{ opacity: 0, x: 100, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.7, delay: 2.0, ease: [0.34, 1.56, 0.64, 1] }}
            whileHover={{ scale: 1.03, z: 20, rotateY: -2, transition: { duration: 0.5 } }}
            className="relative w-full aspect-[4/5] max-w-md rounded-3xl p-2 bg-white/5 backdrop-blur-[20px] border border-white/20 shadow-[0_30px_90px_rgba(10,17,40,0.5),_inset_0_0_0_1px_rgba(255,255,255,0.1)] group"
          >
            <motion.div 
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full rounded-2xl overflow-hidden"
            >
              {/* "Before" Image (Cluttered) */}
              <div 
                className="absolute inset-0 bg-cover bg-center filter brightness-90 sepia-[0.05]"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop")' }}
              />
              
              {/* "After" Image (Pristine) - Wipe Animation */}
              <motion.div 
                className="absolute inset-0 bg-cover bg-center filter brightness-110 contrast-105"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop")' }}
                initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
                animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                transition={{ duration: 1.3, delay: 2.6, ease: "linear" }}
              >
                {/* Wipe Line */}
                <motion.div 
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ delay: 3.9, duration: 0.3 }}
                  className="absolute top-0 bottom-0 right-0 w-[3px] bg-gradient-to-b from-gold-500 to-[#FFD700] shadow-[0_0_20px_rgba(212,175,55,0.8)]" 
                />
              </motion.div>
              
              {/* Tilt-Shift / Depth Blur Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-navy-900/20 via-transparent to-navy-900/20 backdrop-blur-[2px] mask-image-[linear-gradient(to_bottom,black_0%,transparent_20%,transparent_80%,black_100%)]" />
            </motion.div>

            {/* Floating Badges attached to Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 3.5, type: "spring" }}
              className="absolute -top-8 -right-8 w-28 h-28 rounded-full border-[3px] border-gold-500 bg-navy-900/80 backdrop-blur-md shadow-[0_10px_30px_rgba(212,175,55,0.3)] z-20 flex items-center justify-center group/badge hover:scale-115 hover:shadow-[0_15px_50px_rgba(212,175,55,0.6)] transition-all duration-300"
            >
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                  <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                  <text className="text-[10px] font-bold uppercase tracking-[0.15em] fill-white">
                    <textPath href="#textPath" startOffset="0%">100% Satisfaction Guaranteed •</textPath>
                  </text>
                </svg>
              </motion.div>
              <CheckCircle2 size={32} className="text-cyan-500 group-hover/badge:scale-110 transition-transform" />
            </motion.div>

          </motion.div>
        </div>

      </motion.div>

      {/* --- Quick Contact Floating Card (Bottom Right) --- */}
      <motion.div
        initial={{ opacity: 0, x: 150, scale: 0.8, rotateY: 45 }}
        animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
        transition={{ duration: 0.7, delay: 2.5, type: "spring", bounce: 0.4 }}
        className="fixed bottom-10 right-10 z-50 hidden md:flex flex-col gap-4 bg-navy-800/70 backdrop-blur-[20px] border border-white/20 p-6 rounded-[20px] shadow-[0_20px_60px_rgba(10,17,40,0.4),_0_0_80px_rgba(74,155,155,0.1)] w-[280px]"
      >
        <div className="flex items-center gap-2 mb-2">
          <Phone size={20} className="text-white" />
          <h4 className="text-[18px] font-semibold text-white">Quick Contact</h4>
        </div>

        <a href="tel:0922422429" className="flex items-center gap-3 group">
          <motion.div 
            animate={{ scale: [1, 1.08, 1], textShadow: ["0 0 0", "0 0 20px rgba(212,175,55,0.6)", "0 0 0"] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.075, 0.25] }}
            className="text-[20px] font-bold text-gold-500 group-hover:text-[#FFD700] transition-colors"
          >
            0922 422 429
          </motion.div>
        </a>
        
        <a href="mailto:info@prestigecleaning.com" className="flex items-center gap-3 group">
          <Mail size={16} className="text-white group-hover:text-cyan-500 transition-colors" />
          <span className="text-[14px] font-medium text-white group-hover:text-gold-500 transition-colors relative">
            info@prestigecleaning.com
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gold-500 group-hover:w-full transition-all duration-300" />
          </span>
        </a>

        <div className="flex items-center gap-3">
          <motion.div
            animate={{ y: [0, -8, 0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.1, 0.2, 0.3, 0.4] }}
          >
            <MapPin size={16} className="text-silver-400" />
          </motion.div>
          <span className="text-[14px] text-silver-400">Serving Luxury Areas</span>
        </div>

        <motion.div 
          animate={{ boxShadow: ["0 0 10px rgba(74,155,155,0.3)", "0 0 30px rgba(74,155,155,0.8), 0 0 60px rgba(74,155,155,0.4)", "0 0 10px rgba(74,155,155,0.3)"] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-2 bg-cyan-500 text-white text-[12px] font-bold uppercase tracking-wider py-2 px-4 rounded-full text-center relative overflow-hidden"
        >
          {/* Shimmer */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 w-[50%]"
            animate={{ x: ["-200%", "300%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          Always Open
        </motion.div>
      </motion.div>

    </section>
  );
}
