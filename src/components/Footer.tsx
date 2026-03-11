import { useState } from 'react';
import { Facebook, Instagram, MapPin } from 'lucide-react';
import footerLogo from '@/assets/wild-trails-logo-footer.png';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const quickLinks = [
  { label: 'Home', href: '/', isRoute: true },
  { label: 'About Us', href: '/#welcome', isRoute: false },
  { label: 'Excursions', href: '/excursions', isRoute: true },
  { label: 'Rates & Inquiries', href: '/rates', isRoute: true },
  { label: 'Gallery', href: '/gallery', isRoute: true },
  { label: 'Contact', href: '/contact', isRoute: true },
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const col1 = useScrollReveal({ threshold: 0.1 });
  const col2 = useScrollReveal({ threshold: 0.1 });
  const col3 = useScrollReveal({ threshold: 0.1 });
  const col4 = useScrollReveal({ threshold: 0.1 });
  const labelReveal = useScrollReveal({ threshold: 0.2 });

  return (
    <footer id="contact" className="bg-forest text-cream/90">
      {/* Top decorative divider */}
      <div className="flex items-center justify-center py-0">
        <div className="w-full h-px bg-cream/15" />
      </div>

      <div className="py-20 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Small label */}
          <div
            ref={labelReveal.ref}
            className={`text-center mb-14 transition-all duration-700 ${labelReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <span className="font-sans-brand text-[11px] tracking-[0.25em] uppercase text-gold">
              — Wild Trails —
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            {/* Brand Column */}
            <div
              ref={col1.ref}
              className={`transition-all duration-700 ${col1.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="font-logo text-xl text-cream tracking-[0.1em] mb-1">
                WILD TRAILS
              </div>
              <div className="font-sans-brand text-[10px] tracking-[0.25em] text-cream/50 uppercase mb-5">
                YALA BY MILI
              </div>
              <p className="font-body text-[17px] italic text-cream/70 mb-7">
                "Where Comfort Meets the Wild"
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, href: '#' },
                  { Icon: Instagram, href: '#' },
                  { Icon: MapPin, href: '#' },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-10 h-10 rounded-full border border-cream/25 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/60 hover:scale-110 transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div
              ref={col2.ref}
              className={`transition-all duration-700 delay-150 ${col2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <h4 className="font-display text-xl text-cream mb-6 tracking-wide">
                Quick Links
              </h4>
              <div className="flex flex-col gap-3">
                {quickLinks.map((link) =>
                  link.isRoute ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="font-sans-brand text-[12px] uppercase tracking-[0.15em] text-cream/60 hover:text-cream transition-colors duration-300 relative w-fit group"
                    >
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      className="font-sans-brand text-[12px] uppercase tracking-[0.15em] text-cream/60 hover:text-cream transition-colors duration-300 relative w-fit group"
                    >
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Contact */}
            <div
              ref={col3.ref}
              className={`transition-all duration-700 delay-300 ${col3.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <h4 className="font-display text-xl text-cream mb-6 tracking-wide">
                Contact
              </h4>
              <div className="font-body text-[16px] space-y-3 text-cream/60">
                <p>
                  Wild Trails Yala by Mili,
                  <br />
                  Yoda Kandiya, Sithulpauwa Rd,
                  <br />
                  Orukema, Yala, Sri Lanka.
                </p>
                <a
                  href="tel:+94757287077"
                  className="block hover:text-cream transition-colors duration-300 relative w-fit group"
                >
                  (+94) 75 728 7077
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                </a>
                <a
                  href="mailto:mili@wildtrailsyala.com"
                  className="block hover:text-cream transition-colors duration-300 relative w-fit group"
                >
                  mili@wildtrailsyala.com
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                </a>
                <a
                  href="mailto:minuk@wildtrailsyala.com"
                  className="block hover:text-cream transition-colors duration-300 relative w-fit group"
                >
                  minuk@wildtrailsyala.com
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                </a>
              </div>
            </div>

            {/* Newsletter / CTA */}
            <div
              ref={col4.ref}
              className={`transition-all duration-700 delay-[450ms] ${col4.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <h4 className="font-display text-xl text-cream mb-6 tracking-wide">
                Stay in the Wild
              </h4>
              <p className="font-body text-[15px] text-cream/60 mb-5">
                Subscribe for exclusive offers and safari stories.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setEmail('');
                }}
                className="flex flex-col gap-3"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border border-cream/25 px-4 py-3 font-sans-brand text-[12px] tracking-wider text-cream placeholder:text-cream/35 focus:outline-none focus:border-gold/60 transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="w-full border border-gold/60 text-gold font-sans-brand text-[11px] uppercase tracking-[0.15em] px-5 py-3 hover:bg-gold/10 hover:border-gold transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Divider before bottom bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="h-px bg-cream/10" />
      </div>

      {/* Bottom bar */}
      <div className="py-5 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="font-sans-brand text-[11px] tracking-wider text-cream/40">
            © 2026 Wild Trails Yala by Mili. All Rights Reserved.
          </span>
          <div className="flex gap-3">
            {['VISA', 'MC', 'AMEX'].map((card) => (
              <span
                key={card}
                className="font-sans-brand text-[10px] tracking-widest text-cream/40 border border-cream/15 px-3 py-1 hover:border-cream/40 hover:text-cream/60 transition-all duration-300"
              >
                {card}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
