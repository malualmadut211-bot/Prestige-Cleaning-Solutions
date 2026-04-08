import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ChevronDown, Clock, Sparkles, Trophy, ArrowRight, CheckCircle2, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

export default function Home() {
  const { scrollY } = useScroll();

  return (
    <div className="bg-offwhite overflow-hidden">
      {/* 1.1 HERO SECTION */}
      <HeroSection />

      {/* 1.2 VALUE PROPOSITION */}
      <section className="bg-white py-24 md:py-32">
        <div className="w-full px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-10 lg:gap-16">
            <ValueColumn 
              icon={<Clock className="w-12 h-12 text-navy-600" />}
              title="YOUR TIME IS VALUABLE."
              desc="Focus on your priorities. Let our trained experts handle the meticulous cleaning details."
              delay={0}
            />
            <ValueColumn 
              icon={<Sparkles className="w-12 h-12 text-navy-600" />}
              title="EXPERIENCE PURE RELAXATION."
              desc="Step into a space where every detail is taken care of, allowing you to truly unwind."
              delay={0.2}
            />
            <ValueColumn 
              icon={<Trophy className="w-12 h-12 text-navy-600" />}
              title="IMPRESS WITHOUT THE EFFORT."
              desc="A clean space reflects excellence and boosts productivity, all without lifting a finger."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* 1.3 SERVICES OVERVIEW */}
      <section className="bg-lightgray py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-2 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
        
        <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-20"
          >
            <motion.h2 
              variants={{
                hidden: { opacity: 0, x: -80, filter: 'blur(5px)' },
                visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] } }
              }}
              className="font-sans font-bold text-4xl md:text-5xl text-navy-600 tracking-[1px] uppercase"
            >
              OUR PREMIUM SERVICES
            </motion.h2>
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5, ease: "easeOut" } }
              }}
              className="font-serif italic text-gold-500 text-xl mt-4"
            >
              Tailored cleaning solutions for every need
            </motion.p>
            <motion.div 
              variants={{
                hidden: { width: 0 },
                visible: { width: 80, transition: { delay: 0.4, duration: 0.5, ease: "easeOut" } }
              }}
              className="h-[3px] bg-gold-500 mx-auto mt-6"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <ServiceCard key={idx} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 1.4 WHY CHOOSE US */}
      <section className="bg-white py-24 md:py-36">
        <div className="w-full px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col gap-8 lg:pr-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
              >
                <h2 className="font-sans font-bold text-4xl md:text-[42px] text-navy-600 leading-[1.2] mb-4">
                  <SplitText text="WHY CHOOSE PRESTIGE?" />
                </h2>
                <motion.p 
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.5 } } }}
                  className="font-serif italic text-gold-500 text-lg mb-10"
                >
                  The difference is in the details
                </motion.p>
              </motion.div>

              <div className="flex flex-col gap-6">
                {benefits.map((benefit, idx) => (
                  <BenefitItem key={idx} text={benefit} index={idx} />
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.3, rotate: -180, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ delay: 1.5, duration: 0.8, type: 'spring', bounce: 0.5 }}
                className="mt-12 inline-flex items-center gap-4 group"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-[0_4px_12px_rgba(212,175,55,0.3)] group-hover:shadow-[0_8px_24px_rgba(212,175,55,0.6)] group-hover:scale-105 transition-all duration-200 relative">
                  <div className="absolute inset-1 border-2 border-white/30 rounded-full border-dashed animate-[spin_10s_linear_infinite]" />
                  <span className="font-sans font-bold text-white text-center text-xs leading-tight">100%<br/>SATISFACTION</span>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full shadow-sm flex items-center justify-center animate-[pulse_2s_infinite]">
                    <Sparkles className="w-2.5 h-2.5 text-gold-500" />
                  </div>
                </div>
                <span className="font-sans font-bold text-gold-500 text-base">OR YOUR MONEY BACK</span>
              </motion.div>
            </div>

            <div className="relative lg:pl-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                className="relative rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Professional cleaning team"
                  className="w-full h-[600px] object-cover grayscale-[20%] brightness-105"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
              
              {/* Gold Frame */}
              <div className="absolute -inset-5 border-2 border-gold-500/0 pointer-events-none hidden md:block">
                <motion.div 
                  initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 1.5, duration: 0.4 }}
                  className="absolute top-0 left-0 right-0 h-[3px] bg-gold-500 origin-left" 
                />
                <motion.div 
                  initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ delay: 1.8, duration: 0.4 }}
                  className="absolute top-0 right-0 bottom-0 w-[3px] bg-gold-500 origin-top" 
                />
                <motion.div 
                  initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 2.1, duration: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold-500 origin-right" 
                />
                <motion.div 
                  initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ delay: 2.4, duration: 0.4 }}
                  className="absolute top-0 left-0 bottom-0 w-[3px] bg-gold-500 origin-bottom" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 CALL TO ACTION */}
      <section className="bg-navy-900 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 50%, #ffffff 50%, #ffffff 75%, transparent 75%, transparent)', backgroundSize: '40px 40px' }} />
        
        <div className="w-full px-6 md:px-12 lg:px-24 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 60, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex flex-col items-center max-w-3xl mx-auto"
          >
            <h2 className="font-sans font-bold text-3xl md:text-[44px] text-white leading-[1.3] tracking-[0.5px] uppercase mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
              READY FOR A <span className="text-gold-500">FRESH</span>, <span className="text-gold-500">STRESS-FREE</span> SPACE?
            </h2>
            
            <p className="font-serif italic text-white/90 text-xl md:text-2xl mb-10 drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              Book today and <span className="text-gold-500">reclaim your time.</span>
            </p>

            <a href="tel:0922422429" className="group inline-flex items-center gap-4 px-8 py-5 bg-white/10 border-2 border-gold-500/40 rounded-full hover:bg-white/15 hover:border-gold-500/80 hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-250 mb-10 relative overflow-hidden">
              <PhoneIcon className="w-8 h-8 text-gold-500 group-hover:animate-[bounce_0.3s_elastic]" />
              <span className="font-sans font-bold text-2xl md:text-[28px] text-white tracking-[2px] group-hover:text-gold-500 transition-colors">
                <TypewriterText text="0922 422 429" delay={1} />
              </span>
              <div className="absolute bottom-0 left-0 h-[2px] bg-gold-500 w-0 group-hover:w-full transition-all duration-300 ease-out" />
            </a>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.8, duration: 0.6, type: 'spring', bounce: 0.5 }}
            >
              <Link to="/contact" className="group relative inline-flex items-center justify-center px-12 py-5 bg-gold-500 text-navy-900 font-sans font-bold text-lg uppercase tracking-[1.5px] rounded-md shadow-[0_10px_30px_rgba(212,175,55,0.4),0_4px_10px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.6),0_10px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10">BOOK YOUR CLEANING NOW</span>
                <div className="absolute inset-0 -translate-x-[200%] group-hover:animate-[shimmer_1.2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/2 h-full skew-x-12" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 1.6 TESTIMONIALS */}
      <section className="bg-[#F5F5F5] py-24 md:py-[120px] relative overflow-hidden">
        <div className="absolute top-10 left-10 text-gold-500/5 font-serif text-[300px] leading-none select-none pointer-events-none">"</div>
        
        <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
          <div className="text-center mb-[70px]">
            <h2 className="font-sans font-bold text-4xl md:text-[48px] text-navy-600 tracking-[1px] uppercase">
              WHAT OUR CLIENTS SAY
            </h2>
            <p className="font-serif italic text-gold-500 text-xl mt-4">
              Real experiences from real people
            </p>
            <div className="w-[80px] h-[3px] bg-gold-500 mx-auto mt-6" />
          </div>

          <TestimonialCarousel />
        </div>
      </section>
    </div>
  );
}

// Helper Components

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: delay + i * 0.045, duration: 0.12 }}
          className="inline-block"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </>
  );
}

function SplitText({ text }: { text: string }) {
  return (
    <>
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 40, rotate: -5 },
            visible: { opacity: 1, y: 0, rotate: 0, transition: { delay: i * 0.2, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } }
          }}
          className="inline-block mr-3"
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

function ValueColumn({ icon, title, desc, delay }: { key?: React.Key; icon: React.ReactNode; title: string; desc: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
      className="group flex flex-col items-center text-center p-6 rounded-xl hover:bg-navy-900/5 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-default"
    >
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-navy-600/5 to-gold-500/5 border-2 border-navy-600/10 flex items-center justify-center mb-8 group-hover:scale-115 group-hover:rotate-6 transition-all duration-400">
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>
      </div>
      <h3 className="font-sans font-bold text-2xl text-navy-600 tracking-[0.5px] uppercase leading-[1.3] group-hover:text-gold-500 transition-colors duration-250">
        {title}
      </h3>
      <div className="w-0 h-[3px] bg-gold-500 my-5 group-hover:w-[60px] group-hover:shadow-[0_0_8px_rgba(212,175,55,0.4)] transition-all duration-300 ease-out" />
      <p className="font-body text-base text-gray-600 leading-[1.7] max-w-[280px] group-hover:text-gray-800 transition-colors duration-250">
        {desc}
      </p>
    </motion.div>
  );
}

function ServiceCard({ service, index }: { key?: React.Key; service: any; index: number }) {
  return (
    <motion.article
      initial={{ rotateX: 90, opacity: 0, y: 30 }}
      whileInView={{ rotateX: 0, opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.15, duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
      style={{ transformOrigin: 'center bottom', perspective: 1000 }}
      className="group bg-white rounded-lg border border-navy-600/10 p-10 flex flex-col items-center shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-3 hover:shadow-[0_24px_60px_rgba(0,0,0,0.15),0_12px_30px_rgba(26,54,93,0.1)] transition-all duration-350 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#FAFAFA] group-hover:bg-gradient-to-br group-hover:from-white group-hover:via-white/95 group-hover:to-gold-500/5 transition-all duration-500 -z-10" />
      
      {/* Animated Border */}
      <div className="absolute inset-0 border-[3px] border-gold-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />

      <div className="w-16 h-16 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,rgba(26,54,93,0.08)_100%)] border-2 border-gold-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-400">
        {service.icon}
      </div>
      
      <h3 className="font-sans font-bold text-[22px] text-navy-600 tracking-[0.5px] uppercase text-center leading-[1.3] mb-6 group-hover:text-gold-500 transition-colors duration-300">
        {service.title}
      </h3>
      
      <p className="font-body text-[15px] text-gray-500 leading-[1.7] text-center max-w-[85%] mb-6 flex-grow group-hover:text-gray-700 transition-colors duration-300">
        {service.desc}
      </p>
      
      <Link to={`/services#${service.id}`} className="inline-flex items-center gap-2 font-sans font-semibold text-[15px] text-gold-500 uppercase tracking-[1px] group-hover:text-navy-600 transition-colors duration-250 relative">
        Learn More
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-250" />
        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-500 group-hover:w-full transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
      </Link>
    </motion.article>
  );
}

function BenefitItem({ text, index }: { key?: React.Key; text: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ delay: 0.8 + index * 0.15, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      className="group flex items-start gap-5 p-4 rounded-lg hover:bg-gradient-to-r hover:from-gold-500/10 hover:to-gold-500/5 transition-colors duration-250"
    >
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-navy-600 to-navy-500 border-2 border-gold-500 flex items-center justify-center shadow-[0_2px_8px_rgba(212,175,55,0.2)] group-hover:shadow-[0_4px_16px_rgba(212,175,55,0.5)] group-hover:scale-110 transition-all duration-250 shrink-0">
        <CheckCircle2 className="w-4 h-4 text-white" />
      </div>
      <span className="font-sans font-medium text-[19px] text-navy-600 leading-[1.5] tracking-[0.3px] group-hover:text-gold-500 transition-colors duration-200 mt-0.5">
        {text}
      </span>
    </motion.div>
  );
}

// Data
const services = [
  { id: 'deep', title: 'DEEP CLEANING', desc: 'Comprehensive deep cleaning for every corner. Perfect for seasonal refresh or special occasions. We handle what regular cleaning misses.', icon: <Sparkles className="w-10 h-10 text-navy-600" /> },
  { id: 'move', title: 'MOVE-IN/MOVE-OUT', desc: 'Stress-free transitions between homes. Thorough cleaning ensures you leave or enter a pristine space. Perfect for landlords and tenants.', icon: <ArrowRight className="w-10 h-10 text-navy-600" /> },
  { id: 'regular', title: 'REGULAR HOME', desc: 'Consistent, reliable cleaning on your schedule. Weekly, bi-weekly, or monthly plans. Maintain a spotless home effortlessly.', icon: <Clock className="w-10 h-10 text-navy-600" /> },
  { id: 'post', title: 'POST-CONSTRUCTION', desc: 'Remove dust, debris, and construction residue. Specialized cleaning for renovations and new builds. Ready for move-in or showcase.', icon: <Trophy className="w-10 h-10 text-navy-600" /> },
  { id: 'office', title: 'OFFICE CLEANING', desc: 'Professional workspace cleaning that impresses clients and boosts productivity. Flexible scheduling for minimal business disruption.', icon: <Sparkles className="w-10 h-10 text-navy-600" /> },
  { id: 'event', title: 'EVENT CLEANUP', desc: 'Rapid post-event restoration. We handle the mess so you can enjoy the memories. Perfect for parties, weddings, and corporate events.', icon: <Trophy className="w-10 h-10 text-navy-600" /> },
];

const benefits = [
  "Trusted Local Team",
  "Reliable & On Time",
  "Affordable Prices",
  "Attention to Detail",
  "Professional Equipment",
  "100% Satisfaction Guaranteed"
];

const testimonials = [
  {
    rating: 5,
    text: "Prestige Cleaning transformed our office. Their attention to detail is unmatched, and our workspace has never looked better. Highly professional!",
    client: "Maria Santos",
    title: "Office Manager, BGC",
    initials: "MS"
  },
  {
    rating: 5,
    text: "I use them for my Airbnb properties. Guests always comment on how spotless everything is. Reliable, thorough, and great communication!",
    client: "James Rodriguez",
    title: "Airbnb Host, Makati",
    initials: "JR"
  },
  {
    rating: 5,
    text: "After our home renovation, Prestige handled all the post-construction cleanup. They were efficient and left our place move-in ready. Outstanding service!",
    client: "Lisa Chen",
    title: "Homeowner, Quezon City",
    initials: "LC"
  },
  {
    rating: 5,
    text: "Their deep cleaning service is worth every peso. My apartment feels brand new. The team was punctual, friendly, and incredibly thorough.",
    client: "Carlos Mendoza",
    title: "Apartment Resident, Manila",
    initials: "CM"
  },
  {
    rating: 5,
    text: "We hired Prestige for a large corporate event cleanup. They worked quickly and efficiently. Our venue looked perfect for the next day's event.",
    client: "Ana Garcia",
    title: "Event Coordinator, Pasig",
    initials: "AG"
  },
  {
    rating: 5,
    text: "Consistent, reliable, and detail-oriented. I've been using their weekly cleaning service for months. Couldn't be happier with the results!",
    client: "David Tan",
    title: "Busy Professional, Taguig",
    initials: "DT"
  }
];

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Responsive cards per view
  const [cardsPerView, setCardsPerView] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalCards = testimonials.length;
  const maxIndex = Math.max(0, totalCards - cardsPerView);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, maxIndex]);

  const nextSlide = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <div 
      className="relative px-0 md:px-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden py-10">
        <motion.div 
          className="flex gap-[30px]"
          animate={{ x: `calc(-${currentIndex * (100 / cardsPerView)}% - ${currentIndex * (30 / cardsPerView)}px)` }}
          transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
        >
          {testimonials.map((testimonial, idx) => {
            const isActive = idx >= currentIndex && idx < currentIndex + cardsPerView;
            const isCenter = cardsPerView === 3 ? idx === currentIndex + 1 : isActive;
            
            return (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 80, scale: 0.9, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: (idx % 3) * 0.2, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                className={`flex-shrink-0 w-full md:w-[calc(50%-15px)] lg:w-[calc(33.333%-20px)] bg-white rounded-xl border border-navy-600/5 p-8 md:p-10 flex flex-col justify-between min-h-[400px] transition-all duration-600 ${isCenter ? 'scale-100 opacity-100 z-10 shadow-[0_12px_40px_rgba(0,0,0,0.15)]' : 'scale-95 opacity-70 z-0 shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:opacity-85 hover:scale-[0.97]'}`}
              >
                <div>
                  <div className="flex justify-center gap-1.5 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180, opacity: 0 }}
                        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.3, ease: [0.68, -0.55, 0.265, 1.55] }}
                      >
                        <Star className="w-5 h-5 fill-gold-500 text-gold-500" />
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="text-center text-gold-500/15 font-serif text-6xl leading-none mb-4">"</div>
                  
                  <p className="font-sans text-base text-gray-600 leading-[1.8] text-center mb-8">
                    {testimonial.text}
                  </p>
                </div>
                
                <div className="flex flex-col items-center gap-3 mt-auto">
                  <div className="w-[70px] h-[70px] rounded-full bg-navy-900 border-3 border-gold-500 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                    <span className="font-sans font-bold text-white text-xl">{testimonial.initials}</span>
                  </div>
                  <div className="text-center">
                    <h4 className="font-sans font-semibold text-[17px] text-navy-900 tracking-[0.5px]">{testimonial.client}</h4>
                    <p className="font-sans italic text-[14px] text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="hidden md:flex absolute top-1/2 left-0 -translate-y-1/2 w-[50px] h-[50px] rounded-full bg-white border-2 border-gold-500/30 items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:bg-gold-500 hover:text-white hover:scale-110 hover:shadow-[0_8px_24px_rgba(212,175,55,0.5)] transition-all duration-250 z-20 group"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6 text-navy-900 group-hover:text-white group-hover:-translate-x-0.5 transition-transform" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="hidden md:flex absolute top-1/2 right-0 -translate-y-1/2 w-[50px] h-[50px] rounded-full bg-white border-2 border-gold-500/30 items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:bg-gold-500 hover:text-white hover:scale-110 hover:shadow-[0_8px_24px_rgba(212,175,55,0.5)] transition-all duration-250 z-20 group"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6 text-navy-900 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-10">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`rounded-full transition-all duration-200 ${currentIndex === idx ? 'w-3.5 h-3.5 bg-gold-500 shadow-[0_0_0_3px_rgba(212,175,55,0.2)]' : 'w-3 h-3 bg-navy-900/20 hover:bg-navy-900/40 hover:scale-110'}`}
            aria-label={`Show testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}
