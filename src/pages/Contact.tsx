import { ArrowLeft, Car, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingUI from '@/components/FloatingUI';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import entranceBg from '@/assets/wild-trails-entrance.jpg';

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

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background image - blended and light */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.15]"
        style={{ backgroundImage: `url(${entranceBg})` }}
      />
      <div className="relative z-10">
      <Navbar />

      {/* Header */}
      <section ref={headerRef} className="pt-32 pb-8 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <div
              className={`flex items-center gap-4 mb-6 transition-all duration-700 ${
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="w-10 h-px bg-gold" />
              <span className="label-small">Get in Touch</span>
            </div>

            <h1
              className={`font-display text-6xl md:text-8xl text-near-black italic mb-8 transition-all duration-1000 ${
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: headerVisible ? '200ms' : '0ms' }}
            >
              Contact Us
            </h1>

            <p
              className={`font-body text-lg md:text-xl text-muted-foreground italic max-w-xl leading-relaxed transition-all duration-1000 ${
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: headerVisible ? '400ms' : '0ms' }}
            >
              We'd love to hear from you. Reach out to plan your perfect wilderness
              retreat at Wild Trails Yala.
            </p>
          </div>

          <Link
            to="/"
            className={`flex items-center gap-3 font-sans-brand text-[12px] uppercase tracking-[0.15em] text-near-black hover:text-gold transition-all duration-700 mt-4 md:mt-8 shrink-0 ${
              headerVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: headerVisible ? '500ms' : '0ms' }}
          >
            <ArrowLeft size={16} />
            Back to Sanctuary
          </Link>
        </div>
      </section>

      {/* Location Heading */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pt-12 md:pt-16 pb-6 text-center">
        <div className={`transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <h2 className="font-display text-3xl md:text-4xl text-near-black italic mb-4">
            Wild Trails Yala by Mili Location
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground italic max-w-2xl mx-auto leading-relaxed mb-6">
            Wild Trails Yala by Mili is located on the Yoda Kandiya-Sithul Pawwa road. It's
            approximately about half an hour's drive from the Tissamaharama town.
          </p>
          <a
            href="https://maps.google.com/?q=Wild+Trails+Yala+by+Mili"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans-brand text-[12px] uppercase tracking-[0.15em] text-gold hover:text-near-black transition-all duration-300"
          >
            Get Directions
          </a>
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

      {/* Map Embed */}
      <section
        ref={mapRef}
        className={`px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pb-16 md:pb-24 transition-all duration-1000 ease-out ${
          mapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
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

      {/* Inquiry CTA */}
      <section className="bg-secondary/50 py-16 md:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h3 className="font-display text-3xl md:text-4xl text-near-black italic">
            Ready to Experience the Wild?
          </h3>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            Whether you have questions about our packages, need directions, or want to plan a
            bespoke safari experience — we're here to help.
          </p>
          <a
            href="https://wa.me/94757287077"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans-brand text-[12px] uppercase tracking-[0.15em] px-8 py-3.5 bg-gold/80 text-near-black hover:bg-gold transition-all duration-300"
          >
            Inquire via WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <FloatingUI />
      </div>
    </div>
  );
};

export default Contact;
