import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="w-full px-6 md:px-12 lg:px-24 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 z-50">
          <div className="w-10 h-10 bg-navy-900 rounded-sm flex items-center justify-center">
            <span className="text-gold-500 font-serif font-bold text-xl">P</span>
          </div>
          <span className={`font-sans font-bold text-xl tracking-wide ${isScrolled ? 'text-navy-900' : 'text-navy-900'}`}>
            PRESTIGE
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-sans text-sm tracking-widest uppercase transition-colors hover:text-gold-500 ${
                location.pathname === link.path ? 'text-gold-500 font-semibold' : 'text-navy-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-navy-900 text-white px-6 py-2.5 rounded hover:bg-gold-500 transition-colors font-sans text-sm tracking-widest uppercase"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-navy-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-sans text-2xl tracking-widest uppercase transition-colors hover:text-gold-500 ${
                    location.pathname === link.path ? 'text-gold-500 font-bold' : 'text-navy-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
