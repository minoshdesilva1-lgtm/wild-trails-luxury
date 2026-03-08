import { ArrowLeft, Car, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingUI from '@/components/FloatingUI';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import entranceImg from '@/assets/wild-trails-entrance.jpg';
import tentExterior from '@/assets/tent-exterior.jpg';
import bushDining1 from '@/assets/bush-dining-1.jpg';
import rockDiningAerial from '@/assets/rock-dining-aerial.jpg';

const contactCards = [
  {
    icon: Car,
    title: 'Location',
    description:
      'Wild Trails Yala by Mili has its own private parking for customers. It is fully protected and covered for rain or sunny weather.',
    details: [
      'Wild Trails Yala by Mili,',
      'Yoda Kandiya, Sithulpauwa Rd,',
      'Orukema, Yala, Sri Lanka.',
    ],
    bold: true,
  },
  {
    icon: Phone,
    title: 'Telephone',
    description:
      'We are happy to answer your questions or give you directions via phone.',
    details: ['+94 75 728 7077'],
    bold: true,
  },
  {
    icon: Mail,
    title: 'E-Mail',
    description:
      'If you are on the go and still want to ask a question, simply drop us an e-mail.',
    details: ['mili@wildtrailsyala.com'],
    bold: true,
  },
];

const ContactCard = ({ card, index }: { card: typeof contactCards[number]; index: number }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center space-y-5 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 200}ms` : '0ms' }}
    >
      <div className="w-16 h-16 flex items-center justify-center text-muted-foreground">
        <card.icon size={40} strokeWidth={1.2} />
      </div>
      <h3 className="font-display text-xl md:text-2xl text-near-black uppercase tracking-[0.08em]">
        {card.title}
      </h3>
      <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-xs">
        {card.description}
      </p>
      <div className="space-y-0.5">
        {card.details.map((line, i) => (
          <p
            key={i}
            className={`font-body text-base md:text-lg leading-relaxed ${
              card.bold ? 'text-near-black font-semibold' : 'text-muted-foreground'
            }`}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: mapRef, isVisible: mapVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: heroImgRef, isVisible: heroImgVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner with Image */}
      <section ref={heroImgRef} className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={rockDiningAerial}
          alt="Wild Trails Yala wilderness"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-near-black/60 via-near-black/40 to-near-black/70" />
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-1000 ${
            heroImgVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-px bg-gold" />
            <span className="font-sans-brand uppercase tracking-[0.2em] text-[11px] text-gold">Get in Touch</span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h1 className="font-display text-5xl md:text-8xl text-white italic mb-6">
            Contact Us
          </h1>
          <p className="font-body text-lg md:text-xl text-white/80 italic max-w-xl leading-relaxed">
            We'd love to hear from you. Reach out to plan your perfect wilderness
            retreat at Wild Trails Yala.
          </p>
        </div>
      </section>

      {/* Back Link */}
      <section ref={headerRef} className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pt-8">
        <Link
          to="/"
          className={`inline-flex items-center gap-3 font-sans-brand text-[12px] uppercase tracking-[0.15em] text-near-black hover:text-gold transition-all duration-700 ${
            headerVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ArrowLeft size={16} />
          Back to Sanctuary
        </Link>
      </section>

      {/* Location Heading with Side Image */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pt-16 md:pt-20 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <h2 className="font-display text-3xl md:text-5xl text-near-black italic mb-4">
              Wild Trails Yala by Mili Location
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground italic leading-relaxed mb-6">
              Wild Trails Yala by Mili is located on the Yoda Kandiya-Sithul Pawwa road. It's
              approximately about half an hour's drive from the Tissamaharama town.
            </p>
            <a
              href="https://maps.google.com/?q=Wild+Trails+Yala+by+Mili"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-sans-brand text-[12px] uppercase tracking-[0.15em] text-gold hover:text-near-black transition-all duration-300"
            >
              Get Directions →
            </a>
          </div>
          <div
            className={`overflow-hidden transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <img
              src={entranceImg}
              alt="Wild Trails Yala entrance sign"
              className="w-full h-[300px] md:h-[380px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {contactCards.map((card, i) => (
            <ContactCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </section>

      {/* Full-width Image Divider */}
      <section className="w-full h-[300px] md:h-[400px] overflow-hidden relative">
        <img
          src={tentExterior}
          alt="Wild Trails tent exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-near-black/30 to-transparent" />
      </section>

      {/* Social Media Section */}
      <section
        ref={mapRef}
        className={`px-6 md:px-12 lg:px-20 max-w-7xl mx-auto py-16 md:py-24 transition-all duration-1000 ease-out ${
          mapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-near-black italic mb-3">Find Us Online</h2>
          <p className="font-body text-base md:text-lg text-muted-foreground italic">Follow our journey across the wild</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/wildtrailsyala/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 group"
          >
            <div className="w-20 h-20 rounded-full border-2 border-near-black/15 flex items-center justify-center group-hover:border-gold group-hover:scale-110 transition-all duration-300">
              <Instagram size={36} strokeWidth={1.3} className="text-near-black group-hover:text-gold transition-colors duration-300" />
            </div>
            <span className="font-sans-brand text-[12px] uppercase tracking-[0.15em] text-near-black group-hover:text-gold transition-colors duration-300">Instagram</span>
          </a>
          {/* Facebook */}
          <a
            href="https://www.facebook.com/wildtrailsyala/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 group"
          >
            <div className="w-20 h-20 rounded-full border-2 border-near-black/15 flex items-center justify-center group-hover:border-gold group-hover:scale-110 transition-all duration-300">
              <Facebook size={36} strokeWidth={1.3} className="text-near-black group-hover:text-gold transition-colors duration-300" />
            </div>
            <span className="font-sans-brand text-[12px] uppercase tracking-[0.15em] text-near-black group-hover:text-gold transition-colors duration-300">Facebook</span>
          </a>
          {/* TripAdvisor */}
          <a
            href="https://www.tripadvisor.com/Hotel_Review-g644053-d15071583-Reviews-Wild_Trails_Yala_by_Mili-Yala_National_Park_Southern_Province.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 group"
          >
            <div className="w-20 h-20 rounded-full border-2 border-near-black/15 flex items-center justify-center group-hover:border-gold group-hover:scale-110 transition-all duration-300">
              <svg viewBox="0 0 24 24" width="36" height="36" className="text-near-black group-hover:text-gold transition-colors duration-300" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2.5 14.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm5 0c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zM12 6c-2.21 0-4.15.95-5.52 2.45l1.77-.02A3.48 3.48 0 0 1 12 7c1.56 0 2.91.82 3.68 2.04l1.84.02C16.15 6.95 14.21 6 12 6zm-2.5 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
              </svg>
            </div>
            <span className="font-sans-brand text-[12px] uppercase tracking-[0.15em] text-near-black group-hover:text-gold transition-colors duration-300">TripAdvisor</span>
          </a>
        </div>
      </section>

      {/* Inquiry CTA with Background Image */}
      <section ref={ctaRef} className="relative py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden">
        <img
          src={bushDining1}
          alt="Bush dining experience"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-near-black/70" />
        <div
          className={`relative max-w-3xl mx-auto text-center space-y-6 transition-all duration-1000 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="font-display text-3xl md:text-5xl text-white italic">
            Ready to Experience the Wild?
          </h3>
          <p className="font-body text-base md:text-lg text-white/80 leading-relaxed">
            Whether you have questions about our packages, need directions, or want to plan a
            bespoke safari experience — we're here to help.
          </p>
          <a
            href="https://wa.me/94757287077?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Wild%20Trails%20Yala%20by%20Mili."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans-brand text-[12px] uppercase tracking-[0.15em] px-8 py-3.5 bg-gold/80 text-white hover:bg-gold transition-all duration-300"
          >
            Inquire via WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <FloatingUI />
    </div>
  );
};

export default Contact;
