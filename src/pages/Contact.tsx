import { ArrowLeft, Car, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingUI from '@/components/FloatingUI';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import entranceImg from '@/assets/wild-trails-entrance.jpg';
import tentExterior from '@/assets/tent-exterior.jpg';
import bushDining1 from '@/assets/bush-dining-1.jpg';
import heroJungle from '@/assets/hero-jungle.jpg';

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
          src={heroJungle}
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

      {/* Map Embed */}
      <section
        ref={mapRef}
        className={`px-6 md:px-12 lg:px-20 max-w-7xl mx-auto py-16 md:py-24 transition-all duration-1000 ease-out ${
          mapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl text-near-black italic mb-3">Find Us</h2>
          <p className="font-body text-base md:text-lg text-muted-foreground italic">Nestled in the heart of Yala's wilderness</p>
        </div>
        <div className="w-full h-[350px] md:h-[450px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.123!2d81.3784!3d6.3712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjInMTYuMyJOIDgxwrAyMic0Mi4yIkU!5e0!3m2!1sen!2slk!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wild Trails Yala by Mili location"
          />
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
            href="https://wa.me/94757287077"
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
