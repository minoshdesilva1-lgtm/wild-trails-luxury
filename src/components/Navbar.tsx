import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/wild-trails-logo-white-bg.png';

const navLinks = [
  { label: 'HOME', href: '/', isRoute: true },
  { label: 'ABOUT US', href: '#welcome', isRoute: false },
  { label: 'EXCURSIONS', href: '/excursions', isRoute: true },
  { label: 'RATES & INQUIRIES', href: '/rates', isRoute: true },
  { label: 'GALLERY', href: '/gallery', isRoute: true },
  { label: 'CONTACT', href: '/contact', isRoute: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, isRoute: boolean) => {
    setMenuOpen(false);
    if (!isRoute && href.startsWith('#')) {
      if (location.pathname !== '/') {
        window.location.href = '/' + href;
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const textColor = scrolled ? 'text-near-black' : 'text-card';
  const hoverColor = 'hover:text-gold';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white shadow-md' : 'bg-black/20 backdrop-blur-[2px]'
    }`}>
      <div className="flex items-center justify-between pl-5 md:pl-8 pr-4 md:pr-8 py-2 max-w-[1400px] mx-auto">
        {/* Left - Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="Wild Trails Yala by Mili"
            width={178}
            height={130}
            decoding="async"
            className="h-[90px] md:h-[130px] w-auto transition-all duration-500"
            style={{
              filter: scrolled ? 'none' : 'brightness(0) invert(1)',
            }}
          />
        </Link>

        {/* Center - Nav Links (desktop) */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => {
            const isActive =
              (link.isRoute && location.pathname === link.href) ||
              (!link.isRoute && location.pathname === '/' && false);

            return link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className={`font-sans-brand text-[11px] xl:text-[12px] uppercase tracking-[0.15em] transition-all duration-300 relative group ${textColor} ${hoverColor} ${isActive ? 'font-semibold' : ''}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-6 bg-gold'
                    : 'w-0 group-hover:w-6 bg-gold'
                }`} />
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href, link.isRoute);
                }}
                className={`font-sans-brand text-[11px] xl:text-[12px] uppercase tracking-[0.15em] transition-all duration-300 relative group ${textColor} ${hoverColor}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full bg-gold group-hover:w-6 transition-all duration-300" />
              </a>
            );
          })}
        </div>

        {/* Right - CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-block font-sans-brand text-[11px] uppercase tracking-[0.12em] px-5 py-2.5 bg-gold/80 text-near-black hover:bg-gold transition-all duration-300"
          >
            INQUIRE NOW
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center border transition-all duration-300 ${
              scrolled ? 'border-near-black/20 text-near-black' : 'border-white/30 text-card'
            }`}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-card shadow-lg py-6 px-6 flex flex-col gap-4 border-t border-border">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-sans-brand text-[13px] uppercase tracking-[0.15em] text-near-black hover:text-gold hover:translate-x-1 transition-all duration-300"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href, link.isRoute);
                }}
                className="font-sans-brand text-[13px] uppercase tracking-[0.15em] text-near-black hover:text-gold hover:translate-x-1 transition-all duration-300"
              >
                {link.label}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
