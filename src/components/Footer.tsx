import { Facebook, Instagram, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-forest text-card/90 overflow-hidden">
      {/* Background Illustration */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/footer-bg.png')" }}
      />

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo + Social */}
          <div className="space-y-6">
            <div className="flex flex-col items-start">
              <img 
                src={logo} 
                alt="Wild Trails Yala by Mili" 
                className="h-14 md:h-16 w-auto object-contain"
                style={{ filter: 'invert(1) brightness(2)' }}
              />
            </div>

            <div className="flex gap-4">
              {[Facebook, Instagram, MapPin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-card/20 flex items-center justify-center hover:bg-card/10 hover:border-card/40 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-2xl text-card mb-6 font-medium tracking-wide">Contact</h4>
            <div className="font-body text-[16px] leading-relaxed space-y-4 text-card/80">
              <p>
                Wild Trails Yala by Mili,<br />
                Yoda Kandiya,<br />
                Sithulpauwa Rd, Orukema,<br />
                Yala, Sri Lanka.
              </p>
              <div className="space-y-1">
                <p>Call Us: (+94) 75 728 7077</p>
                <p className="hover:text-card transition-colors cursor-pointer">mili@wildtrailsyala.com</p>
                <p className="hover:text-card transition-colors cursor-pointer">minuk@wildtrailsyala.com</p>
              </div>
              <p className="text-sm font-sans-brand tracking-widest pt-2 hover:text-card cursor-pointer">
                WWW.WILDTRAILSYALABYMILI.COM
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-2xl text-card mb-6 font-medium tracking-wide">Quick Links</h4>
            <div className="flex flex-col gap-3 font-body text-[17px] text-card/80">
              {[
                { name: 'Home', href: '#' },
                { name: 'Our Rooms', href: '#' },
                { name: 'About Us', href: '#' },
                { name: 'Offer & Event', href: '#' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-card hover:translate-x-1 transition-all duration-300 border-b border-transparent hover:border-card/20 w-fit"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Payment */}
          <div>
            <h4 className="font-display text-2xl text-card mb-6 font-medium tracking-wide">Payment methods</h4>
            <p className="font-body text-[16px] leading-relaxed text-card/80 mb-8">
              Pay any way you choose, no matter whether it's <span className="underline underline-offset-4 decoration-card/30">it's cash</span> or an <span className="underline underline-offset-4 decoration-card/30">international payment card</span>, we support all of those payment options.
            </p>
            <div className="flex gap-3">
              <div className="bg-white/5 border border-card/10 px-4 py-2 rounded-sm flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
                <span className="text-[10px] font-bold tracking-tighter italic">VISA</span>
              </div>
              <div className="bg-white/5 border border-card/10 px-4 py-2 rounded-sm flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
                <div className="flex -space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-orange-400/80"></div>
                </div>
              </div>
              <div className="bg-white/5 border border-card/10 px-4 py-2 rounded-sm flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
                <span className="text-[8px] font-bold leading-none text-center">AMERICAN<br />EXPRESS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-footer-bottom/95 border-t border-card/5 py-4 px-6 md:px-12 lg:px-20 relative z-10 transition-colors hover:bg-footer-bottom">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-sans-brand text-[11px] tracking-wider text-card/50">
          <span className="hover:text-card/80 transition-colors">© 2026 Wild Trails Yala by Mili, All Rights Reserved. Designed by Minosh</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-card/80 transition-colors">Terms of Use</a>
            <span className="opacity-30">/</span>
            <a href="#" className="hover:text-card/80 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
