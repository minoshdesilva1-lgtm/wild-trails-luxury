import { useState, useEffect } from 'react';
import { Menu, Phone, Globe, ChevronDown, X } from 'lucide-react';
import logo from '@/assets/wild-trails-logo-clean.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-card shadow-md' : 'bg-transparent'
    }`}>
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`w-10 h-10 flex items-center justify-center border transition-colors ${
              scrolled ? 'border-near-black/20 text-near-black' : 'border-white/30 text-card'
            }`}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          <a href="tel:+94757287077" className={`hidden md:flex items-center gap-2 font-sans-brand text-[12px] uppercase tracking-[0.1em] ${
            scrolled ? 'text-near-black' : 'text-card'
          }`}>
            <Phone size={14} />
            Reservation: +94 75 728 7077
          </a>
        </div>

        {/* Center Logo */}
        <div className="text-center">
          <img 
            src={logo}
            alt="Wild Trails Yala by Mili" 
            className="h-12 md:h-16 w-auto transition-all duration-500"
            style={{
              filter: scrolled ? 'none' : 'brightness(0) invert(1)',
            }}
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 md:gap-5">
          <div className={`hidden md:flex items-center gap-1 font-sans-brand text-[12px] ${
            scrolled ? 'text-near-black' : 'text-card'
          }`}>
            <Globe size={14} />
            English
            <ChevronDown size={12} />
          </div>
          <a href="#contact" className="btn-dark text-[11px] px-4 py-2.5 md:px-6 md:py-3 hidden sm:inline-block">
            INQUIRE NOW
          </a>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-card shadow-lg py-8 px-6">
          <div className="flex flex-col gap-4 font-sans-brand text-[13px] uppercase tracking-[0.15em] text-near-black">
            <a href="#welcome" onClick={() => setMenuOpen(false)} className="hover:text-gold transition-colors">About</a>
            <a href="#rooms" onClick={() => setMenuOpen(false)} className="hover:text-gold transition-colors">Our Rooms</a>
            <a href="#experiences" onClick={() => setMenuOpen(false)} className="hover:text-gold transition-colors">Experiences</a>
            <a href="#spa" onClick={() => setMenuOpen(false)} className="hover:text-gold transition-colors">Spa & Wellness</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-gold transition-colors">Contact</a>
            <a href="tel:+94757287077" className="flex items-center gap-2 text-gold md:hidden">
              <Phone size={14} /> +94 75 728 7077
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
