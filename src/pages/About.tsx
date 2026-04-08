import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useInView } from 'motion/react';
import { Clock, Lock, CheckSquare, Sparkles, MapPin, Phone, Mail, ArrowRight, ShieldCheck, Leaf, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Utility Components ---

function TypewriterText({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  return (
    <span className={className}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: delay + i * 0.03, duration: 0.1 }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

function Counter({ from, to, duration = 2, suffix = "" }: { from: number; to: number; duration?: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

// --- Main Page Component ---

export default function About() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-offwhite overflow-hidden font-sans text-navy-900">
      
      {/* 1. HERO SECTION - Animated Introduction */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-navy-900">
        {/* Background Image with Parallax & Zoom */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80")' }}
          />
          {/* Deep Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent" />
          
          {/* Animated Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-30"
                initial={{ 
                  x: Math.random() * window.innerWidth, 
                  y: window.innerHeight + 100,
                  scale: Math.random() * 2 + 0.5
                }}
                animate={{ 
                  y: -100,
                  x: `+=${Math.random() * 100 - 50}`
                }}
                transition={{ 
                  duration: Math.random() * 10 + 10, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: Math.random() * 10
                }}
              />
            ))}
          </div>
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <motion.div className="overflow-hidden mb-4">
            <motion.h1 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
              className="font-serif font-bold text-5xl md:text-7xl lg:text-[90px] text-white leading-tight tracking-tight"
            >
              Our Story of <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Excellence</span>
            </motion.h1>
          </motion.div>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
            className="h-[2px] w-32 bg-gold-500 mx-auto mb-8 origin-left"
          />

          <h2 className="font-sans text-lg md:text-2xl text-silver-300 font-light tracking-wide">
            <TypewriterText text="Transforming Spaces, Elevating Standards Since 2024" delay={1.5} />
          </h2>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-gold-500 text-xs uppercase tracking-widest font-bold animate-pulse">Discover More</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[30px] h-[50px] border-2 border-gold-500/50 rounded-full flex justify-center p-2 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            <motion.div 
              animate={{ y: [0, 15, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-gold-500 rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. BRAND STORY SECTION - Parallax Narrative */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Text Narrative */}
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h3 className="text-gold-500 font-bold tracking-[3px] uppercase text-sm mb-4 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-gold-500 inline-block"></span>
                  The Genesis
                </h3>
                <h2 className="font-serif text-4xl md:text-5xl text-navy-900 font-bold leading-tight mb-8">
                  Redefining Cleanliness in <span className="text-gold-500">Juba</span>
                </h2>
                
                <div className="space-y-6 text-lg text-gray-600 font-body leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    Prestige Cleaning Solutions was born from a clear observation: Juba's rapidly developing residential and commercial sectors required a cleaning service that matched international standards of excellence.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    We saw beyond mops and buckets. We envisioned a service built on unwavering reliability, absolute discretion, and highly structured methodologies. A service where "Prestige" isn't just a name, but a promise of meticulous attention to every detail.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    Today, we are proud to be the trusted partner for discerning homeowners, busy professionals, and leading businesses across South Sudan, transforming spaces to elevate their daily standards.
                  </motion.p>
                </div>
              </motion.div>
            </div>

            {/* Image Gallery Carousel */}
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(10,17,40,0.15)] group">
              <ImageCarousel />
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE VALUES SECTION - Interactive Cards */}
      <section className="py-32 bg-navy-900 relative overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%"],
              backgroundSize: ["100% 100%", "120% 120%"]
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-navy-700 via-navy-900 to-black"
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-6xl text-white font-bold mb-6"
            >
              Our Core <span className="text-gold-500">Pillars</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-silver-300 text-xl max-w-2xl mx-auto"
            >
              The principles that guide every sweep, scrub, and polish.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ValueFlipCard 
              icon={<Clock size={40} />}
              title="Reliable"
              frontDesc="Time is your most valuable asset."
              backDesc="We arrive precisely when scheduled and complete our work efficiently. Our consistency is the bedrock of the trust we build with every client."
              delay={0}
            />
            <ValueFlipCard 
              icon={<Lock size={40} />}
              title="Discreet"
              frontDesc="Your privacy is paramount."
              backDesc="Our vetted professionals operate with silent efficiency, respecting your space, your belongings, and your confidentiality at all times."
              delay={0.2}
            />
            <ValueFlipCard 
              icon={<CheckSquare size={40} />}
              title="Structured"
              frontDesc="Excellence by design."
              backDesc="We don't guess. We follow rigorous, multi-point checklists tailored to your specific space, ensuring no detail is ever overlooked."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* 3.5 OUR EXPERTISE SHOWCASE - Vertical Flowing Diagram */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-navy-900 font-bold mb-4">The Anatomy of a Clean</h2>
            <p className="text-gray-600 text-lg">Our structured approach to transforming your space.</p>
          </div>

          <div className="relative">
            {/* Central Animated Line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gold-500/30 -translate-x-1/2"
            >
              <motion.div 
                animate={{ y: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-full h-20 bg-gradient-to-b from-transparent via-gold-500 to-transparent"
              />
            </motion.div>

            {/* Nodes */}
            <div className="space-y-20">
              <ExpertiseNode 
                number="01"
                title="Assessment & Planning"
                desc="We begin with a thorough walkthrough to identify specific needs, high-traffic areas, and delicate surfaces requiring special care."
                align="left"
              />
              <ExpertiseNode 
                number="02"
                title="Deep Dusting & Prep"
                desc="Systematic removal of dust and allergens from top to bottom, including hard-to-reach fixtures and vents."
                align="right"
              />
              <ExpertiseNode 
                number="03"
                title="Surface Treatment"
                desc="Application of specialized, eco-friendly cleaning agents tailored to different materials (wood, marble, glass)."
                align="left"
              />
              <ExpertiseNode 
                number="04"
                title="Final Polish & Inspection"
                desc="A meticulous final walkthrough by a supervisor to ensure our rigorous 'Prestige Standard' has been met."
                align="right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. TEAM/TRUST SECTION - Photo Reveals & Counters */}
      <section className="py-32 bg-offwhite relative">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col items-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-navy-900 font-bold mb-4">The Prestige Standard</h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-gold-500 relative"
            >
              <motion.div 
                animate={{ x: [0, 100, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-1 -right-2 text-gold-500"
              >
                <Sparkles size={12} />
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            <StatCounter number={500} suffix="+" label="Spaces Cleaned" delay={0} />
            <StatCounter number={100} suffix="%" label="Satisfaction" delay={0.1} />
            <StatCounter number={50} suffix="+" label="Expert Staff" delay={0.2} />
            <StatCounter number={24} suffix="/7" label="Support Available" delay={0.3} />
          </div>

          {/* Image Reveal Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden group">
              <motion.div 
                initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
                whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
                className="absolute inset-0"
              >
                <img 
                  src="https://images.unsplash.com/photo-1628177142898-93e46e462850?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Professional Cleaning Team" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, type: "spring", bounce: 0.5 }}
                className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 w-32 h-32 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] border-4 border-gold-500 flex items-center justify-center z-20"
              >
                <div className="text-center">
                  <Award className="w-8 h-8 text-gold-500 mx-auto mb-1" />
                  <span className="block text-[10px] font-bold text-navy-900 uppercase leading-tight">Certified<br/>Excellence</span>
                </div>
                {/* Rotating text ring could go here */}
              </motion.div>
            </div>

            <div className="space-y-8 pl-0 md:pl-10">
              <h3 className="text-3xl font-serif font-bold text-navy-900">Vetted, Trained, Trusted.</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We don't just hire cleaners; we cultivate hospitality professionals. Every member of the Prestige team undergoes rigorous background checks and extensive training in our proprietary cleaning methodologies.
              </p>
              <ul className="space-y-4">
                {[
                  "Comprehensive Background Verification",
                  "Intensive 4-Week Training Program",
                  "Continuous Quality Assurance Audits",
                  "Fully Insured and Bonded Professionals"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 text-navy-900 font-medium"
                  >
                    <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-600">
                      <ShieldCheck size={14} />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICE STANDARDS - Interactive Infographic */}
      <section className="py-32 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-navy-900 font-bold mb-4">Our Commitment to Quality</h2>
            <p className="text-gray-600 text-lg">The tools and techniques that set us apart.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StandardCard icon={<Sparkles />} title="Premium Products" desc="We use industry-leading, safe, and effective cleaning solutions." delay={0} />
            <StandardCard icon={<Leaf />} title="Eco-Friendly Options" desc="Sustainable cleaning practices available upon request." delay={0.1} />
            <StandardCard icon={<Calendar />} title="Flexible Scheduling" desc="Services tailored to your timetable, minimizing disruption." delay={0.2} />
            <StandardCard icon={<ShieldCheck />} title="Fully Insured" desc="Complete peace of mind with our comprehensive coverage." delay={0.3} />
          </div>
        </div>
      </section>

      {/* 6. LOCATION - Map Integration */}
      <section className="py-24 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(212,175,55,0.4)]"
              >
                <MapPin className="text-navy-900 w-8 h-8" />
              </motion.div>
              <h2 className="text-4xl font-serif font-bold text-white mb-4">Proudly Serving Juba</h2>
              <p className="text-silver-300 text-lg leading-relaxed mb-8">
                Headquartered in Thongpiny, we provide rapid, reliable service across all major residential and commercial districts in Juba. Our local knowledge combined with international standards makes us the premier choice.
              </p>
              <div className="flex items-center gap-4 text-gold-400 font-bold tracking-wider uppercase text-sm">
                <span className="w-10 h-[2px] bg-gold-400"></span>
                South Sudan
              </div>
            </motion.div>
          </div>
          
          {/* Stylized Map Representation */}
          <div className="w-full md:w-1/2 h-[400px] relative flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-white/10 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-10 border border-gold-500/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute inset-20 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
            
            {/* Center Pin (Thongpiny) */}
            <div className="relative z-10 flex flex-col items-center">
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute w-20 h-20 bg-gold-500 rounded-full"
              />
              <div className="w-6 h-6 bg-gold-500 rounded-full z-10 shadow-[0_0_20px_rgba(212,175,55,1)]" />
              <span className="mt-4 text-white font-bold tracking-widest">THONGPINY HQ</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COMMITMENT BANNER */}
      <section className="py-40 relative flex items-center justify-center overflow-hidden bg-black">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0.5 }}
          whileInView={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-black/80" />
        
        <div className="relative z-10 text-center px-6">
          <motion.h2 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Where Cleanliness Meets <span className="text-gold-500 italic">Prestige</span>.
          </motion.h2>
        </div>
      </section>

      {/* 8. CTA FINALE */}
      <section className="py-32 bg-gradient-to-b from-white to-lightgray relative overflow-hidden">
        {/* Ascending Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gold-500/20 rounded-full"
              initial={{ y: "100%", x: Math.random() * window.innerWidth }}
              animate={{ y: "-10%", x: `+=${Math.random() * 50 - 25}` }}
              transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold text-navy-900 mb-10"
          >
            Experience the Prestige Difference
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <Link to="/contact" className="group relative px-10 py-5 bg-navy-900 text-white rounded-full overflow-hidden shadow-[0_15px_30px_rgba(10,17,40,0.2)] hover:shadow-[0_20px_40px_rgba(10,17,40,0.4)] hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 font-bold tracking-wider uppercase flex items-center gap-3">
                Get Your Free Quote
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
            
            <a href="tel:0922422429" className="group flex items-center gap-3 px-8 py-4 rounded-full border-2 border-navy-900/10 hover:border-gold-500 transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-navy-900/5 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-colors">
                <Phone size={18} />
              </div>
              <span className="font-bold text-navy-900">0922 422 429</span>
            </a>
          </motion.div>

          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-bold text-gray-600 uppercase tracking-widest">Available 24/7 for Emergencies</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// --- Sub-components ---

function ImageCarousel() {
  const images = [
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  ];
  const labels = ["Pristine Living", "Corporate Excellence", "Detail Oriented"];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
      
      <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
        <motion.div
          key={`label-${currentIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-2 block">Service Showcase</span>
          <h4 className="text-white text-3xl font-serif">{labels[currentIndex]}</h4>
        </motion.div>
        
        <div className="flex gap-2">
          {images.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1 transition-all duration-500 rounded-full ${idx === currentIndex ? 'w-8 bg-gold-500' : 'w-2 bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ValueFlipCard({ icon, title, frontDesc, backDesc, delay }: any) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.8, type: "spring" }}
      className="h-[400px] perspective-1000 cursor-pointer group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        className="w-full h-full relative preserve-3d"
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 flex flex-col items-center justify-center text-center shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
          <div className="w-20 h-20 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-2xl font-serif font-bold text-white mb-4">{title}</h3>
          <p className="text-silver-400">{frontDesc}</p>
          <div className="absolute bottom-8 text-gold-500/50 text-sm uppercase tracking-widest font-bold flex items-center gap-2">
            Hover to reveal <ArrowRight size={14} />
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-gold-600 to-gold-400 rounded-3xl p-10 flex flex-col items-center justify-center text-center shadow-[0_20px_40px_rgba(212,175,55,0.2)]">
          <h3 className="text-2xl font-serif font-bold text-navy-900 mb-6">{title}</h3>
          <p className="text-navy-900/90 font-medium leading-relaxed">{backDesc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function StatCounter({ number, suffix, label, delay }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-serif font-bold text-gold-500 mb-2">
        <Counter from={0} to={number} duration={2.5} suffix={suffix} />
      </div>
      <div className="text-navy-900 font-bold uppercase tracking-wider text-sm">{label}</div>
    </motion.div>
  );
}

function StandardCard({ icon, title, desc, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="bg-offwhite border border-gray-200 rounded-2xl p-8 hover:bg-navy-900 hover:text-white transition-colors duration-500 group"
    >
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-navy-900 shadow-sm mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-500">
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-3 group-hover:text-gold-400 transition-colors">{title}</h4>
      <p className="text-gray-600 group-hover:text-silver-300 transition-colors leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function ExpertiseNode({ number, title, desc, align }: { number: string, title: string, desc: string, align: 'left' | 'right' }) {
  const isLeft = align === 'left';
  
  return (
    <div className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
      {/* Center Node */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", bounce: 0.5 }}
        className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-12 h-12 bg-navy-900 rounded-full border-4 border-gold-500 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
      >
        <span className="text-white font-bold text-sm">{number}</span>
      </motion.div>

      {/* Content Card */}
      <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-16 pl-16 md:pl-0' : 'md:pl-16 pl-16 md:pr-0'}`}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring" }}
          className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] hover:border-gold-500/30 transition-all duration-300 group"
        >
          <h4 className="text-2xl font-serif font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">{title}</h4>
          <p className="text-gray-600 leading-relaxed">{desc}</p>
        </motion.div>
      </div>
    </div>
  );
}

