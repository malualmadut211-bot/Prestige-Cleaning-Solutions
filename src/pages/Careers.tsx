import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Trophy, TrendingUp, BookOpen, Users, DollarSign, ChevronDown, ArrowRight, MessageCircle } from 'lucide-react';

export default function Careers() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 300]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-offwhite overflow-hidden">
      {/* 4.1 CAREERS HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-20 overflow-hidden bg-[#0A2240]">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,58,95,1)_0%,rgba(10,34,64,1)_100%)]" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
          
          {/* Decorative Lines */}
          <svg className="absolute top-0 left-0 w-64 h-64 opacity-20" viewBox="0 0 100 100" fill="none">
            <path d="M0 20 L20 0 M0 40 L40 0 M0 60 L60 0" stroke="#C9A961" strokeWidth="1" />
          </svg>
          <svg className="absolute bottom-0 right-0 w-64 h-64 opacity-20" viewBox="0 0 100 100" fill="none">
            <path d="M100 80 L80 100 M100 60 L60 100 M100 40 L40 100" stroke="#C9A961" strokeWidth="1" />
          </svg>
        </motion.div>

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 text-center flex flex-col items-center">
          <motion.div
            initial={{ scale: 0, opacity: 0, y: -200, rotate: -15 }}
            animate={{ scale: [0, 1.2, 0.95, 1.05, 1], opacity: 1, y: 0, rotate: [-15, 2, -1, 0] }}
            transition={{ duration: 1.2, ease: [0.68, -0.55, 0.265, 1.55] }}
            className="mb-12 relative"
          >
            <motion.div 
              animate={{ scale: [1, 1.08, 1], boxShadow: ['0 4px 20px rgba(201,169,97,0.3)', '0 4px 30px rgba(201,169,97,0.6)', '0 4px 20px rgba(201,169,97,0.3)'] }}
              transition={{ delay: 1.2, duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="bg-[#C9A961] border-2 border-white rounded-xl px-8 py-3 flex items-center justify-center"
            >
              <span className="font-sans font-bold text-[#0A2240] text-lg tracking-[1px]">WE ARE HIRING!</span>
            </motion.div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="font-serif font-bold text-4xl md:text-5xl lg:text-[56px] text-white leading-[1.2] tracking-[-0.5px] mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
          >
            JOIN OUR PRESTIGE TEAM
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="font-sans text-lg md:text-[20px] text-[#C9A961] leading-[1.6] tracking-[0.3px] mb-12"
          >
            We're growing and looking for passionate professionals
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            onClick={() => document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-4 bg-gradient-to-r from-[#C9A961] to-[#D4BA7E] rounded-full font-sans font-bold text-[#0A2240] text-[16px] tracking-[0.5px] shadow-[0_4px_15px_rgba(201,169,97,0.4)] hover:shadow-[0_6px_25px_rgba(201,169,97,0.5)] hover:scale-105 hover:-translate-y-1 transition-all duration-200 overflow-hidden"
          >
            <motion.div 
              animate={{ scale: [1, 1.06, 1], boxShadow: ['0 4px 15px rgba(201,169,97,0.4)', '0 8px 30px rgba(201,169,97,0.6)', '0 4px 15px rgba(201,169,97,0.4)'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full"
            />
            <span className="relative z-10">EXPLORE POSITIONS BELOW</span>
          </motion.button>
        </div>
      </section>

      {/* 4.2 OPEN POSITIONS SECTION */}
      <section id="positions" className="relative bg-white py-24 md:py-[100px]">
        <div className="absolute inset-0 opacity-2" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 11px)' }} />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A961]/20 to-transparent" />

        <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {jobs.map((job, idx) => (
              <JobCard key={idx} job={job} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 4.3 WHY WORK WITH US */}
      <section className="relative bg-[#F7F8FA] py-24 md:py-[90px]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[3px] bg-gradient-to-r from-transparent via-[#C9A961] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C9A961]/30" />

        <div className="w-full px-6 md:px-12 lg:px-24">
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-16"
          >
            <h2 className="font-serif font-bold text-3xl md:text-[44px] text-[#0A2240] tracking-[-0.5px] mb-4">
              WHY JOIN PRESTIGE?
            </h2>
            <motion.div 
              initial={{ width: 0 }} whileInView={{ width: 180 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="h-1 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7 md:gap-8">
            <BenefitCard icon={<Trophy />} title="Performance-based opportunity" delay={0} />
            <BenefitCard icon={<TrendingUp />} title="Growth potential" delay={0.15} />
            <BenefitCard icon={<BookOpen />} title="Professional development" delay={0.3} />
            <BenefitCard icon={<Users />} title="Supportive team environment" delay={0.45} />
            <BenefitCard icon={<DollarSign />} title="Competitive compensation" delay={0.6} />
          </div>
        </div>
      </section>

      {/* 4.4 APPLICATION CTA */}
      <section className="relative bg-[#0A2240] py-20 md:py-[80px] overflow-hidden">
        <div className="absolute inset-0 opacity-3" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, #fff 20px, #fff 21px)' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[4px] bg-gradient-to-r from-transparent via-[#C9A961] to-transparent" />

        <div className="w-full px-6 md:px-12 lg:px-24 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30, scale: 0.95, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="font-serif font-bold text-3xl md:text-[42px] text-white tracking-[-0.5px] mb-5 drop-shadow-[0_0_20px_rgba(201,169,97,0.4)]"
          >
            READY TO APPLY?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            className="font-sans text-[16px] md:text-[18px] text-white/90 leading-[1.7] max-w-[600px] mx-auto mb-10"
          >
            Send a message with a short introduction about yourself.
          </motion.p>

          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -15, y: 20 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}
            className="mb-12 relative inline-block"
          >
            <a href="https://wa.me/0922422429" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-10 py-4 bg-[#C9A961] rounded-full shadow-[0_6px_20px_rgba(201,169,97,0.4)] hover:bg-gradient-to-br hover:from-[#C9A961] hover:to-[#D4BA7E] hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_30px_rgba(201,169,97,0.6)] border-2 border-transparent hover:border-white/50 transition-all duration-300">
              <MessageCircle className="w-6 h-6 text-[#0A2240] group-hover:animate-[wiggle_0.5s_ease-in-out]" />
              <span className="font-sans font-bold text-[17px] text-[#0A2240] uppercase tracking-[0.8px]">WhatsApp Us</span>
            </a>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 1.0, duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <span className="text-xl">📧</span>
              <span className="font-sans text-[16px] text-white/80">careers@prestigecleaning.com</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 1.4, duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <span className="text-xl">📱</span>
              <span className="font-sans text-[16px] text-white/80">0922 422 429</span>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper Components

function JobCard({ job, index }: { key?: React.Key; job: any; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
      className="group relative bg-white rounded-2xl border-2 border-[#E8E9EB] p-8 shadow-[0_4px_12px_rgba(10,34,64,0.08)] hover:shadow-[0_12px_32px_rgba(10,34,64,0.15)] hover:-translate-y-2 hover:border-[#C9A961]/40 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-16 h-16 bg-[#C9A961] opacity-10 group-hover:opacity-15 transition-opacity duration-500" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
      
      <div className="flex flex-col gap-5 relative z-10">
        <div className="w-16 h-16 rounded-full bg-[#C9A961]/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-400">
          <div className="text-[#C9A961]">{job.icon}</div>
        </div>

        <div>
          <h3 className="font-sans font-bold text-2xl text-[#0A2240] leading-[1.3] tracking-[-0.3px] mb-4 group-hover:text-[#1A4A7F] transition-colors">
            {job.title}
          </h3>
          <p className="font-serif text-[16px] text-[#4A5568] leading-[1.7] max-w-[90%]">
            {job.desc}
          </p>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col gap-6 pt-4 border-t border-[#C9A961]/20 mt-2"
            >
              <div>
                <h4 className="font-sans font-semibold text-[14px] text-[#0A2240] tracking-[1px] uppercase mb-3 border-b-2 border-[#C9A961] inline-block pb-1">Responsibilities:</h4>
                <ul className="flex flex-col gap-2">
                  {job.responsibilities.map((item: string, i: number) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.1 }}
                      className="relative pl-6 font-sans text-[15px] text-[#2D3748] leading-[1.8]"
                    >
                      <span className="absolute left-0 top-[10px] w-1.5 h-1.5 rounded-full bg-[#C9A961]" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-sans font-semibold text-[14px] text-[#0A2240] tracking-[1px] uppercase mb-3 border-b-2 border-[#C9A961] inline-block pb-1">Requirements:</h4>
                <ul className="flex flex-col gap-2">
                  {job.reqs.map((item: string, i: number) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
                      className="relative pl-6 font-sans text-[15px] text-[#2D3748] leading-[1.8]"
                    >
                      <span className="absolute left-0 top-[10px] w-1.5 h-1.5 rounded-full bg-[#C9A961]" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5, type: 'spring' }}
                className="mt-4"
              >
                <a href="https://wa.me/0922422429" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0A2240] text-white font-sans font-bold text-[15px] uppercase tracking-[0.5px] rounded-full border-2 border-[#C9A961] shadow-[0_4px_15px_rgba(10,34,64,0.2)] hover:bg-gradient-to-r hover:from-[#0A2240] hover:to-[#1A4A7F] hover:border-[#D4BA7E] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(10,34,64,0.3)] transition-all duration-300">
                  APPLY NOW
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="self-start flex items-center gap-2 mt-2 font-sans font-semibold text-[15px] text-[#C9A961] hover:text-[#0A2240] transition-colors"
        >
          {isExpanded ? 'Show Less' : 'View Details'}
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </motion.div>
  );
}

function BenefitCard({ icon, title, delay }: { icon: React.ReactNode; title: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9, filter: 'blur(3px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className="group flex items-center gap-5 bg-white rounded-xl p-6 md:p-7 border border-[#E8E9EB] shadow-[0_2px_8px_rgba(10,34,64,0.05)] hover:bg-[#C9A961]/5 hover:border-[#C9A961]/30 hover:shadow-[0_6px_18px_rgba(10,34,64,0.1)] hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-full bg-[#C9A961]/10 border-2 border-[#C9A961]/30 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
        <div className="text-[#C9A961] w-7 h-7">
          {icon}
        </div>
      </div>
      <h3 className="font-sans font-semibold text-[17px] text-[#0A2240] leading-[1.4] group-hover:text-[#1A4A7F] transition-colors">
        {title}
      </h3>
    </motion.div>
  );
}

// Data
const jobs = [
  {
    title: 'Operations & Client Assistant',
    desc: 'We are looking for a highly organized and customer-focused individual to support our daily operations and ensure exceptional client communication.',
    icon: <Users className="w-8 h-8" />,
    responsibilities: [
      'Manage client inquiries and scheduling via phone, email, and WhatsApp.',
      'Coordinate daily schedules for cleaning teams.',
      'Assist with administrative tasks and operational logistics.',
      'Ensure high levels of customer satisfaction and resolve any issues promptly.'
    ],
    reqs: [
      'Excellent communication and interpersonal skills.',
      'Strong organizational abilities and attention to detail.',
      'Proficiency in basic office software and scheduling tools.',
      'Previous experience in customer service or administration is a plus.'
    ]
  },
  {
    title: 'Professional Cleaner',
    desc: 'Join our team of elite cleaners dedicated to providing top-tier cleaning services for residential and commercial clients.',
    icon: <Trophy className="w-8 h-8" />,
    responsibilities: [
      'Perform detailed cleaning tasks according to Prestige standards.',
      'Handle various cleaning equipment and chemicals safely.',
      'Ensure all assigned areas are spotless and well-maintained.',
      'Report any maintenance issues or safety hazards.'
    ],
    reqs: [
      'Prior professional cleaning experience preferred but not required (training provided).',
      'Strong attention to detail and a commitment to excellence.',
      'Ability to work independently and as part of a team.',
      'Physical stamina to perform active cleaning duties.'
    ]
  }
];
