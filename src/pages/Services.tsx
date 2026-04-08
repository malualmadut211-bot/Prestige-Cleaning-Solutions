import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Check, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.05]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-offwhite overflow-hidden">
      {/* 2.1 SERVICES HERO SECTION */}
      <section className="relative min-h-[500px] h-[60vh] max-h-[700px] flex flex-col justify-center overflow-hidden pt-20">
        {/* Background Layers */}
        <motion.div 
          className="absolute inset-0 z-0"
          animate={{ scale: [1.0, 1.03, 1.0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
              filter: 'blur(8px)'
            }}
          />
          <motion.div 
            className="absolute inset-0 mix-blend-multiply" 
            animate={{ background: [
              'linear-gradient(135deg, rgba(26, 35, 53, 0.65) 0%, rgba(26, 35, 53, 0.75) 100%)',
              'linear-gradient(155deg, rgba(26, 35, 53, 0.65) 0%, rgba(26, 35, 53, 0.75) 100%)',
              'linear-gradient(135deg, rgba(26, 35, 53, 0.65) 0%, rgba(26, 35, 53, 0.75) 100%)'
            ] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 opacity-3 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,1) 35px, rgba(255,255,255,1) 70px)' }} />
        </motion.div>

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24">
          {/* Breadcrumb */}
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-6 py-3 shadow-[0_4px_15px_rgba(0,0,0,0.1)] mb-12"
          >
            <Link to="/" className="text-white/90 text-sm font-medium tracking-[0.5px] hover:text-gold-500 transition-colors">Home</Link>
            <span className="text-gold-500/70 text-xs mx-3">&gt;</span>
            <span className="text-gold-500 text-sm font-semibold tracking-[0.5px]">Services</span>
          </motion.div>

          <div className="max-w-[900px] mx-auto text-center">
            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-[48px] text-white leading-[1.2] tracking-[1px] uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)] mb-8">
              <SplitText text="OUR PROFESSIONAL SERVICES" delay={0.4} />
            </h1>
            
            <div className="relative inline-block">
              <motion.p 
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
                className="font-body text-lg md:text-xl text-white/95 leading-[1.6] tracking-[0.3px] mb-8"
              >
                Expert cleaning solutions tailored to your unique needs and standards.
              </motion.p>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 180 }}
                transition={{ delay: 1.4, duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-[3px] rounded-sm bg-gradient-to-r from-transparent via-gold-500 to-transparent shadow-[0_0_10px_rgba(212,175,55,0.5)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2.2 SERVICE DETAIL CARDS */}
      <section className="py-0">
        {serviceDetails.map((service, idx) => (
          <ServiceDetailCard key={service.id} service={service} index={idx} />
        ))}
      </section>

      {/* 2.3 CUSTOM SOLUTIONS CTA */}
      <section className="relative py-24 md:py-[120px] overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#1A2335_0%,#243049_35%,#2A3750_65%,#1A2335_100%)] -z-20" />
        <motion.div 
          animate={{ 
            backgroundPosition: ['0% 50%', '30% 30%', '70% 50%', '30% 70%', '0% 50%']
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 opacity-15 -z-10"
          style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,1) 0%, transparent 50%)', backgroundSize: '200% 200%' }}
        />
        <div className="absolute inset-0 opacity-5 -z-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,1) 35px, rgba(255,255,255,1) 70px)' }} />

        {/* Floating Particles */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -80, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[100px] -left-[200px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_70%)] blur-[60px] -z-10 pointer-events-none"
        />
        <motion.div 
          animate={{ x: [0, -60, 0], y: [0, 70, 0], scale: [1, 0.9, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[150px] -right-[200px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_70%)] blur-[60px] -z-10 pointer-events-none"
        />

        {/* Borders */}
        <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

        <div className="w-full px-6 md:px-12 lg:px-24 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
            className="font-sans font-bold text-3xl md:text-4xl lg:text-[42px] text-white uppercase tracking-[2px] leading-[1.2] mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          >
            NEED SOMETHING DIFFERENT?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.9, ease: "easeOut" }}
            className="font-body text-lg md:text-xl text-white/90 leading-[1.7] max-w-[700px] mx-auto mb-11 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
          >
            We create custom cleaning solutions tailored to your specific requirements, schedule, and property size. Let's discuss how we can help.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.9, type: 'spring', bounce: 0.5 }}
          >
            <MagneticButton to="/contact">Contact Us for Custom Quote</MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Helper Components

function MagneticButton({ children, to }: { children: React.ReactNode, to: string }) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      if (distance < 150) {
        setPosition({ x: distanceX * 0.15, y: distanceY * 0.15 });
        setIsHovered(true);
      } else {
        setPosition({ x: 0, y: 0 });
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      animate={{ x: position.x, y: position.y, scale: isHovered ? 1.03 : 1 }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      <Link 
        ref={buttonRef}
        to={to} 
        className="group relative inline-block px-12 py-5 bg-gradient-to-br from-gold-500 via-[#F4E5A5] to-gold-500 bg-[length:200%_100%] text-navy-900 font-sans font-bold text-lg uppercase tracking-[1.5px] rounded-full shadow-[0_8px_25px_rgba(212,175,55,0.4),inset_0_-2px_4px_rgba(0,0,0,0.1)] border-[3px] border-white/30 hover:bg-[position:100%_0] hover:shadow-[0_15px_40px_rgba(212,175,55,0.6),0_0_30px_rgba(212,175,55,0.5)] hover:border-white/80 transition-all duration-400 overflow-hidden"
      >
        <span className="relative z-10 drop-shadow-[0_0_10px_rgba(26,35,53,0.1)] group-hover:drop-shadow-[0_0_10px_rgba(26,35,53,0.3)] group-hover:text-[#1A2335] transition-colors duration-300">{children}</span>
        <div className="absolute inset-0 -translate-x-[100%] group-hover:animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full" />
      </Link>
    </motion.div>
  );
}

function SplitText({ text, delay = 0 }: { text: string; delay?: number; key?: React.Key }) {
  return (
    <>
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: -80, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: delay + i * 0.1, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="inline-block mr-3"
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

function ServiceDetailCard({ service, index }: { service: any; index: number; key?: React.Key }) {
  const isEven = index % 2 !== 0; // 0-indexed, so 1, 3, 5 are even in visual order (right side image)

  return (
    <div id={service.id} className={`w-full ${isEven ? 'bg-lightgray' : 'bg-white'}`}>
      <div className="w-full px-6 md:px-12 lg:px-24 py-20 md:py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: isEven ? 120 : -120, scale: 0.9, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.0, ease: [0.34, 1.56, 0.64, 1] }}
            className={`relative w-full pb-[75%] rounded-[20px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] group ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
          >
            <div className="absolute inset-0 border-[5px] border-transparent rounded-[20px] z-20 pointer-events-none" style={{ background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #D4AF37, #F4E5A5) border-box' }} />
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900/0 to-navy-900/10 opacity-30 group-hover:opacity-50 transition-opacity duration-400 z-10 pointer-events-none" />
            <motion.img 
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1.0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src={service.image} 
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] brightness-100 contrast-105 saturate-110"
            />
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: isEven ? -120 : 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className={`flex flex-col ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <motion.h2 
              initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="font-sans font-bold text-[26px] md:text-[30px] lg:text-[36px] text-navy-900 leading-[1.3] tracking-[0.5px] uppercase mb-5"
            >
              {service.title}
            </motion.h2>
            
            <motion.div 
              initial={{ width: 0, opacity: 0, scaleX: 0 }} whileInView={{ width: 60, opacity: 1, scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
              className="h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 rounded-sm shadow-[0_2px_10px_rgba(212,175,55,0.3)] mb-8 origin-left"
            />
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
              className="font-body text-base md:text-lg text-gray-600 leading-[1.8] max-w-[600px] mb-9"
            >
              {service.desc}
            </motion.p>

            <motion.h3 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 1.2, duration: 0.6 }}
              className="font-sans font-semibold text-[20px] text-navy-900 uppercase tracking-[1px] mb-5"
            >
              What's Included
            </motion.h3>

            <div className="flex flex-col gap-4 mb-9">
              {service.includes.map((item: string, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -40, scale: 0.8 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.4 + i * 0.15, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                  className="group flex items-start gap-4 p-3 bg-gold-500/5 rounded-lg hover:bg-gold-500/10 hover:translate-x-2 transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center text-white shrink-0 shadow-[0_2px_8px_rgba(212,175,55,0.3)] group-hover:rotate-[360deg] group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(212,175,55,0.5)] transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="font-body text-base text-gray-800 leading-[1.5] font-medium mt-0.5">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 mb-9">
              <motion.div 
                initial={{ opacity: 0, scale: 0, rotate: -45 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: 2.0, duration: 0.6, type: 'spring', bounce: 0.5 }}
                className="flex items-center gap-2.5 bg-navy-900/5 px-6 py-3.5 rounded-full border border-navy-900/10"
              >
                <Clock className="w-6 h-6 text-navy-900 hover:rotate-12 transition-transform duration-300" />
                <span className="font-sans font-semibold text-base text-navy-900 whitespace-nowrap">Duration: {service.duration}</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0, rotate: -45 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: 2.15, duration: 0.6, type: 'spring', bounce: 0.5 }}
                className="flex items-center gap-2.5 bg-navy-900/5 px-6 py-3.5 rounded-full border border-navy-900/10"
              >
                <DollarSign className="w-6 h-6 text-navy-900 hover:rotate-12 transition-transform duration-300" />
                <span className="font-sans font-semibold text-base text-navy-900 whitespace-nowrap">Pricing: {service.price}</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: 2.3, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <Link to="/contact" className="group relative inline-flex items-center justify-center px-10 py-4 bg-navy-900 text-white font-sans font-semibold text-base uppercase tracking-[1px] rounded-full shadow-[0_4px_15px_rgba(26,35,53,0.2)] hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(212,175,55,0.4)] transition-all duration-300 overflow-hidden">
                <span className="relative z-10 group-hover:text-gold-400 transition-colors duration-300">Book This Service</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-gold-500/20 to-transparent transition-opacity duration-400" />
                <div className="absolute inset-0 -translate-x-[100%] group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full" />
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Data
const serviceDetails = [
  {
    id: 'deep',
    title: 'Deep Cleaning',
    desc: 'Transform your space with our comprehensive deep cleaning service. We go beyond surface-level tidying to meticulously clean every nook, cranny, and overlooked area. Perfect for seasonal refreshes, special occasions, or when your space needs extra attention. Our trained professionals use premium products and proven techniques to deliver exceptional, long-lasting results that exceed standard cleaning.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
    includes: [
      'Complete top-to-bottom sanitization of all rooms',
      'Detailed appliance interior cleaning (oven, refrigerator, microwave)',
      'Baseboard, molding, and trim scrubbing',
      'Cabinet exterior and interior wiping',
      'Light fixture and ceiling fan cleaning',
      'Window washing (interior and accessible exterior)',
      'Bathroom deep scrub (tile, grout, fixtures)',
      'Floor cleaning and treatment (all surface types)'
    ],
    duration: '4-8 hours',
    price: 'From $299'
  },
  {
    id: 'move',
    title: 'Move-In/Move-Out Cleaning',
    desc: "Ensure a seamless transition with our specialized move-in/move-out cleaning service. Whether you're preparing a property for new tenants or want to leave your old place spotless, we handle every detail. Our thorough process meets landlord expectations and security deposit standards, making moving stress-free. We clean empty spaces efficiently, reaching areas typically blocked by furniture.",
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
    includes: [
      'Complete interior of all cabinets and drawers',
      'Inside all appliances (refrigerator, oven, dishwasher)',
      'Comprehensive window cleaning (inside and outside when accessible)',
      'Wall spot-cleaning and scuff mark removal',
      'Closet vacuuming and shelf wiping',
      'Door frame and threshold cleaning',
      'Air vent and return cleaning',
      'Thorough floor cleaning and sanitization',
      'Bathroom complete detail (fixtures, tile, grout)'
    ],
    duration: '3-6 hours',
    price: 'From $249'
  },
  {
    id: 'regular',
    title: 'Regular Home Cleaning',
    desc: 'Maintain a consistently clean and healthy living environment with our regular home cleaning service. Designed to fit seamlessly into your schedule, we provide reliable, high-quality cleaning that keeps your home fresh and inviting. Choose weekly, bi-weekly, or monthly visits customized to your needs. Our recurring service builds trust and familiarity, with the same team caring for your space.',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
    includes: [
      'Comprehensive dusting of all surfaces and furniture',
      'Vacuuming all floors and carpets (including under furniture)',
      'Mopping hard surface floors',
      'Bathroom complete sanitization (toilets, sinks, showers, tubs)',
      'Kitchen cleaning (counters, sinks, exterior appliances)',
      'Trash removal and liner replacement',
      'Mirror and glass surface cleaning',
      'General organizing and tidying',
      'Bed making (optional add-on)'
    ],
    duration: '2-4 hours per visit',
    price: 'From $129 per visit'
  },
  {
    id: 'post',
    title: 'Post-Construction Cleaning',
    desc: "Reveal the true beauty of your renovation or new construction with our specialized post-construction cleaning service. Construction creates layers of fine dust and debris that standard cleaning can't address. Our experienced team uses professional-grade equipment and techniques to safely remove all construction residue, preparing your space for immediate occupancy or final showcase.",
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
    includes: [
      'Fine dust removal from all surfaces (multiple passes)',
      'Construction debris collection and disposal',
      'Window washing and frame cleaning (label/sticker removal)',
      'Floor treatment (sweeping, vacuuming, mopping, buffing as appropriate)',
      'Fixture and hardware polishing',
      'Paint overspray and drywall dust removal',
      'Cabinet and drawer interior cleaning',
      'Air vent and filter cleaning',
      'Detailed bathroom and kitchen sanitization',
      'Final touch polish and inspection'
    ],
    duration: '6-12 hours',
    price: 'Custom quotes'
  },
  {
    id: 'office',
    title: 'Office Cleaning',
    desc: 'Create a productive and professional work environment with our comprehensive office cleaning service. A clean workspace boosts morale, improves health, and impresses clients. We work around your business hours, providing discreet, efficient service that doesn\'t disrupt operations. Our customizable plans address the unique needs of your office, from small startups to large corporate spaces.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
    includes: [
      'Desk and workstation sanitizing (keyboards, phones, surfaces)',
      'Floor cleaning (vacuuming carpets, mopping hard floors)',
      'Restroom maintenance and sanitization',
      'Trash removal and recycling',
      'Break room/kitchen cleaning',
      'Conference room setup and cleaning',
      'Window and glass surface cleaning',
      'Dusting (furniture, shelves, equipment)',
      'Entry and reception area detailing'
    ],
    duration: 'Varies',
    price: 'From $199/week'
  },
  {
    id: 'event',
    title: 'Event Cleanup',
    desc: 'Let us handle the aftermath so you can enjoy your event\'s success. Our rapid-response event cleanup service efficiently restores any venue to pristine condition after weddings, corporate events, parties, or gatherings. We coordinate with your timeline, working quickly without sacrificing quality. Our experienced team handles everything from intimate gatherings to large-scale events.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
    includes: [
      'Rapid trash and debris collection',
      'Complete waste management and disposal',
      'Table, chair, and surface sanitizing',
      'Floor sweeping, vacuuming, and mopping',
      'Restroom deep cleaning and restocking',
      'Kitchen/catering area cleanup',
      'Glass and dish collection (if applicable)',
      'Spot carpet cleaning',
      'Final venue walkthrough and inspection'
    ],
    duration: '1-4 hours',
    price: 'From $179'
  }
];
