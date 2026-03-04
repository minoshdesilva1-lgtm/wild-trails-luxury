import { Facebook, Instagram, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-forest text-card/90">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + Social */}
          <div>
            <div className="font-logo text-xl text-card tracking-[0.1em] mb-1">WILD TRAILS</div>
            <div className="font-sans-brand text-[10px] tracking-[0.25em] text-card/60 uppercase mb-6">YALA BY MILI</div>
            <div className="flex gap-3">
              {[Facebook, Instagram, MapPin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-card/30 flex items-center justify-center hover:bg-card/10 transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl text-card mb-4">Contact</h4>
            <div className="font-body text-[15px] space-y-2 text-card/70">
              <p>Wild Trails Yala by Mili,<br />Yoda Kandiya, Sithulpauwa Rd,<br />Orukema, Yala, Sri Lanka.</p>
              <p>Call Us: (+94) 75 728 7077</p>
              <p>mili@wildtrailsyala.com</p>
              <p>minuk@wildtrailsyala.com</p>
              <p>www.wildtrailsyalabymili.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-card mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 font-sans-brand text-[13px] text-card/70">
              {['Home', 'Our Rooms', 'About Us', 'Offer & Event', 'Contact'].map((link) => (
                <a key={link} href="#" className="hover:text-card hover:underline transition-colors">{link}</a>
              ))}
            </div>
          </div>

          {/* Payment */}
          <div>
            <h4 className="font-display text-xl text-card mb-4">Payment methods</h4>
            <p className="font-body text-[15px] text-card/70 mb-4">
              Pay any way you choose, no matter whether it's cash or an international payment card, we support all of
              those payment options.
            </p>
            <div className="flex gap-3 font-sans-brand text-[11px] tracking-wider text-card/50 uppercase">
              <span className="border border-card/20 px-3 py-1">VISA</span>
              <span className="border border-card/20 px-3 py-1">MC</span>
              <span className="border border-card/20 px-3 py-1">AMEX</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-footer-bottom py-4 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 font-sans-brand text-[12px] text-muted-foreground">
          <span>© 2026 Wild Trails Yala by Mili, All Rights Reserved</span>
          <span>Terms of Use / Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
