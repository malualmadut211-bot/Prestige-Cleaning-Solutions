import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-white pt-20 pb-10">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center">
                <span className="text-navy-900 font-serif font-bold text-xl">P</span>
              </div>
              <span className="font-sans font-bold text-xl tracking-wide text-white">
                PRESTIGE
              </span>
            </Link>
            <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">
              Setting the standard for professional cleaning in Juba, South Sudan. Experience pure relaxation while we handle the meticulous details.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-navy-900 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-navy-900 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-navy-900 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans font-bold text-lg mb-6 text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Services</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-lg mb-6 text-white tracking-wide">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Deep Cleaning</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Move-In/Move-Out</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Regular Home Cleaning</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Post-Construction</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Office Cleaning</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-lg mb-6 text-white tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Juba, South Sudan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">0922 422 429</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@prestigecleaning.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Prestige Cleaning Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gold-500 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gold-500 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
