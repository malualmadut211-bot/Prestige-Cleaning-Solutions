import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Shield, Lock, LayoutGrid, Crown } from 'lucide-react';

export default function About() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 400]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-offwhite overflow-hidden">
      {/* 3.1 ABOUT HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center grayscale-[30%] blur-[10px] opacity-20 mix-blend-multiply"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
          />
          <div className="absolute inset-0 bg-navy-900/85" />
        </motion.div>

        <motion.div 
          style={{ opacity: useTransform(scrollY, [0, 300], [1, 0]) }}
          className="relative z-10 w-full px-6 md:px-12 lg:px-24 text-center flex flex-col items-center py-[120px]"
        >
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
            className="h-[2px] bg-gold-500 mb-6 origin-center"
          />
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
            className="font-sans text-[11px] text-gold-500/90 uppercase tracking-[3px] mb-6"
          >
            ABOUT PRESTIGE CLEANING SOLUTIONS
          </motion.h3>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="font-serif font-bold text-4xl md:text-5xl lg:text-[52px] text-white leading-[1.3] max-w-[800px] drop-shadow-[0_2px_30px_rgba(0,0,0,0.3)] shadow-gold-500/20"
          >
            Setting the standard for professional cleaning in South Sudan
          </motion.h1>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[30px] h-[50px] border-2 border-white/30 rounded-full flex justify-center p-2"
          >
            <motion.div 
              animate={{ y: [0, 15, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-gold-500 rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Transition Divider: Hero to Story */}
      <div className="relative h-0 z-20">
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 200, opacity: 0.4 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] bg-gold-500"
        />
      </div>

      {/* 3.2 OUR STORY SECTION */}
      <section className="bg-white py-24 md:py-[140px]">
        <div className="w-full px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-7 flex flex-col">
              <motion.div 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}
                className="mb-7 relative pl-5"
              >
                <motion.div 
                  initial={{ height: 0 }} whileInView={{ height: 40 }} viewport={{ once: true }} transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] bg-gold-500"
                />
                <h2 className="font-sans font-bold text-[12px] text-navy-900 uppercase tracking-[2.5px]">WHO WE ARE</h2>
              </motion.div>

              <div className="flex flex-col gap-6 mb-16">
                <motion.p 
                  initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="font-body text-[17px] text-gray-600 leading-[1.85] max-w-[560px]"
                >
                  Prestige Cleaning Solutions was founded with a singular vision: to elevate the standard of cleanliness and professionalism in Juba and beyond. We recognized a need for a service that goes beyond basic tidying, offering meticulous attention to detail and unwavering reliability.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="font-body text-[17px] text-gray-600 leading-[1.85] max-w-[560px]"
                >
                  Our team consists of highly trained, vetted professionals who treat every space with the utmost respect and care. We utilize premium products and advanced techniques to ensure exceptional results, whether it's a cozy apartment, a sprawling estate, or a bustling corporate office.
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 1.2, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                className="group bg-[#f9f6f0] border-l-[5px] border-gold-500 rounded-r-lg p-8 md:p-10 hover:bg-[#f5efd9] hover:border-l-[8px] hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(212,175,55,0.15)] transition-all duration-300"
              >
                <h3 className="font-sans text-[10px] text-gold-500 uppercase tracking-[2px] mb-3">OUR MISSION</h3>
                <p className="font-serif italic text-[19px] text-navy-900 leading-[1.7]">
                  "To provide unparalleled cleaning services that enhance the quality of life and productivity of our clients, fostering environments of pure relaxation and excellence."
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.8, duration: 0.8 }}
                className="mt-12 text-center lg:text-left"
              >
                <span className="font-sans font-bold text-[15px] text-navy-900 uppercase tracking-[3px] drop-shadow-sm">
                  RELIABLE. DISCREET. STRUCTURED.
                </span>
              </motion.div>
            </div>

            {/* Image Content */}
            <div className="lg:col-span-5 relative mt-12 lg:mt-0">
              <motion.div 
                initial={{ clipPath: 'circle(0% at 50% 50%)', opacity: 0 }}
                whileInView={{ clipPath: 'circle(100% at 50% 50%)', opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.6, duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
                className="relative rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Prestige Cleaning Team"
                  className="w-full h-[500px] md:h-[680px] object-cover group-hover:scale-105 group-hover:brightness-105 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
                className="absolute -bottom-8 -left-8 md:-bottom-10 md:-left-10 w-[200px] md:w-[260px] h-[160px] md:h-[200px] rounded-lg overflow-hidden border-[8px] border-white shadow-[0_10px_40px_rgba(0,0,0,0.15)] hidden sm:block"
              >
                <img 
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Detail cleaning"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <svg className="absolute -top-4 -right-4 w-20 h-20 pointer-events-none" viewBox="0 0 80 80" fill="none">
                <motion.path 
                  initial={{ strokeDasharray: 160, strokeDashoffset: 160 }}
                  whileInView={{ strokeDashoffset: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.8, duration: 0.6, ease: "easeInOut" }}
                  d="M 0 3 L 77 3 L 77 80" 
                  stroke="#D4AF37" 
                  strokeWidth="3" 
                />
              </svg>
            </div>

          </div>
        </div>
      </section>

      {/* Transition Divider: Story to Values */}
      <div className="w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[50px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <motion.path 
            initial={{ pathLength: 0, fillOpacity: 0 }}
            whileInView={{ pathLength: 1, fillOpacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z" 
            className="fill-lightgray"
          />
        </svg>
      </div>

      {/* 3.3 OUR VALUES/PRINCIPLES */}
      <section className="bg-lightgray py-24 md:py-[140px]">
        <div className="w-full px-6 md:px-12 lg:px-24">
          <div className="text-center mb-20">
            <h3 className="font-sans text-[11px] text-gold-500 uppercase tracking-[3px] mb-4">WHAT DRIVES US</h3>
            <h2 className="font-serif font-bold text-4xl md:text-[42px] text-navy-900">Core Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-[40px]">
            <ValueCard 
              icon={<Shield className="w-9 h-9" />}
              title="Reliability"
              desc="We show up on time, every time. You can count on us to deliver consistent, high-quality results."
              delay={0}
            />
            <ValueCard 
              icon={<Lock className="w-9 h-9" />}
              title="Discretion"
              desc="We respect your privacy and property. Our team operates with the utmost professionalism and confidentiality."
              delay={0.15}
            />
            <ValueCard 
              icon={<LayoutGrid className="w-9 h-9" />}
              title="Structure"
              desc="Our methodical approach ensures no detail is missed. We follow rigorous checklists for every service."
              delay={0.3}
            />
            <ValueCard 
              icon={<Crown className="w-9 h-9" />}
              title="Excellence"
              desc="We don't settle for 'good enough'. We strive for perfection in every corner we clean."
              delay={0.45}
            />
          </div>
        </div>
      </section>

      {/* Transition Divider: Values to Team */}
      <div className="relative h-0 z-20">
        <div className="absolute top-0 left-0 w-full h-[100px] overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.3, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.random() * 0.8, duration: 1 }}
              animate={{ y: [0, -10, 0] }}
              style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                backgroundColor: '#D4AF37',
                borderRadius: '50%'
              }}
            />
          ))}
        </div>
      </div>

      {/* 3.4 TEAM SECTION */}
      <section className="bg-white py-24 md:py-[140px]">
        <div className="w-full px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h3 className="font-sans text-[11px] text-gold-500 uppercase tracking-[3px] mb-4">THE PEOPLE BEHIND THE POLISH</h3>
            <h2 className="font-serif font-bold text-4xl md:text-[42px] text-navy-900 mb-6">Meet Our Team</h2>
            <p className="font-body text-[17px] text-gray-600 max-w-[700px] mx-auto">
              Our professionals are carefully selected, rigorously trained, and deeply committed to our core values. They are the heart of Prestige Cleaning Solutions.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            className="max-w-[900px] mx-auto bg-lightgray rounded-2xl p-10 md:p-16 border-l-[6px] border-gold-500 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="relative z-10">
              <h3 className="font-serif font-bold text-2xl md:text-[32px] text-navy-900 mb-8">Dedicated to Your Space</h3>
              <p className="font-body text-[17px] text-gray-600 leading-[1.9] mb-6">
                While we are growing our team, every member undergoes extensive background checks and rigorous training in our proprietary cleaning methods. We believe that a happy, well-supported team delivers the best results for our clients.
              </p>
              <p className="font-body text-[17px] text-gray-600 leading-[1.9]">
                Our management team oversees all operations, ensuring that our high standards are consistently met and that any client feedback is immediately addressed.
              </p>
              
              <div className="mt-10 p-8 bg-white border-l-[4px] border-gold-500 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <p className="font-serif italic text-xl text-navy-900">
                  "We don't just clean spaces; we care for the environments where people live, work, and thrive."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Helper Components

function ValueCard({ icon, title, desc, delay }: { icon: React.ReactNode; title: string; desc: string; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate rotation (-10deg to 10deg)
    const rY = ((mouseX / width) - 0.5) * 20;
    const rX = ((mouseY / height) - 0.5) * -20;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, rotateY: 90, rotateX: 10 }}
      whileInView={{ opacity: 1, rotateY: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
      style={{ 
        transformOrigin: 'center', 
        perspective: 1000,
        transformStyle: 'preserve-3d'
      }}
      className="relative"
    >
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="group bg-white rounded-2xl p-10 md:p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col items-center relative overflow-hidden h-full z-10"
      >
        <div className="w-20 h-20 rounded-full bg-[#f9f6f0] flex items-center justify-center mb-8 group-hover:bg-gold-500 group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-500 ease-out">
          <div className="text-gold-500 group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        </div>
        
        <h4 className="font-sans font-bold text-[20px] text-navy-900 tracking-[0.5px] mb-4 text-center group-hover:text-gold-500 transition-colors duration-300">
          {title}
        </h4>
        
        <p className="font-body text-[15px] text-gray-600 leading-[1.75] text-center max-w-[280px] group-hover:-translate-y-1 transition-transform duration-300">
          {desc}
        </p>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[50px] h-[3px] bg-gold-500 opacity-0 group-hover:opacity-100 group-hover:w-[80px] transition-all duration-400 ease-out" />
      </motion.div>
    </motion.div>
  );
}
