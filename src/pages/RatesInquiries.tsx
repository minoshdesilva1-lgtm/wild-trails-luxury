import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingUI from '@/components/FloatingUI';
import LazyImage from '@/components/LazyImage';
import { useScrollReveal } from '@/hooks/useScrollReveal';

import room1Interior from '@/assets/room1-interior.jpg';
import tentExterior from '@/assets/tent-exterior.jpg';
import yalaLeopard from '@/assets/yala-leopard.jpg';

const packages = [
  {
    title: 'Bed and Breakfast Basis',
    image: room1Interior,
    imageAlt: 'Luxury tent interior',
    imagePosition: 'right' as const,
    children: [
      'Children up to six years free of charge. (Sharing bed with parents).',
      'Children between the age of 6 to 12 years with a single bed.',
      '12 Years and above would be considered as an adult.',
    ],
    includes:
      'The above includes breakfast, drinking water, tea/coffee, picking up and dropping off the guests from the pickup point.',
  },
  {
    title: 'All Inclusive with One Safari',
    image: tentExterior,
    imageAlt: 'Safari tent exterior with wooden deck',
    imagePosition: 'left' as const,
    children: [
      'Children up to six years free of charge. (Sharing bed with parents).',
      'Children between the age of 6 to 12 years with a single bed.',
      '12 Years and above would be considered as an adult.',
    ],
    includes:
      'The above is inclusive of breakfast, lunch, dinner, drinking water, tea/coffee, two bottles of beer per tent for dinner under the stars by the bonfire, park entrance fee, safari jeep, bush walk, picking up and dropping off guests from the pick up point.',
  },
  {
    title: 'All Inclusive with Two Safaris',
    image: yalaLeopard,
    imageAlt: 'Leopard in Yala National Park',
    imagePosition: 'right' as const,
    children: [
      'Children up to six years free of charge. (Sharing bed with parents).',
      'Children between the age of 6 to 12 years with a single bed.',
      '12 Years and above would be considered as an adult.',
    ],
    includes:
      'This includes breakfast, lunch and dinner, drinking water, tea/coffee, two bottles of beer per tent for dinner under the stars with bonfire, morning and afternoon safari with park entrance fee and safari jeep, bush walk.',
  },
];

const PackageItem = ({ pkg }: { pkg: typeof packages[number] }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const imageOnLeft = pkg.imagePosition === 'left';

  return (
    <div
      ref={ref}
      className={`flex flex-col ${imageOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-16 items-center`}
    >
      {/* Image */}
      <div
        className={`w-full md:w-1/2 h-[300px] md:h-[420px] overflow-hidden transition-all duration-1000 ease-out ${
          isVisible
            ? 'opacity-100 translate-x-0'
            : imageOnLeft
              ? 'opacity-0 -translate-x-12'
              : 'opacity-0 translate-x-12'
        }`}
        style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
      >
        <LazyImage
          src={pkg.image}
          alt={pkg.imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div
        className={`w-full md:w-1/2 space-y-6 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
      >
        <h2 className="font-display text-3xl md:text-4xl text-near-black italic">
          {pkg.title}
        </h2>

        <div className="space-y-2">
          {pkg.children.map((line, j) => (
            <p key={j} className="font-body text-base md:text-lg text-foreground leading-relaxed">
              {line}
            </p>
          ))}
        </div>

        <p className="font-body text-base md:text-lg text-muted-foreground italic leading-relaxed">
          {pkg.includes}
        </p>

        <a
          href="https://wa.me/94773333444"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-sans-brand text-[12px] uppercase tracking-[0.15em] px-8 py-3.5 bg-gold/80 text-near-black hover:bg-gold transition-all duration-300 mt-2"
        >
          Inquire Now
        </a>
      </div>
    </div>
  );
};

const RatesInquiries = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section ref={headerRef} className="pt-32 pb-8 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <div className={`flex items-center gap-4 mb-6 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="w-10 h-px bg-gold" />
              <span className="label-small">Packages & Pricing</span>
            </div>

            <h1
              className={`font-display text-6xl md:text-8xl text-near-black italic mb-8 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: headerVisible ? '200ms' : '0ms' }}
            >
              Rates & Inquiries
            </h1>

            <p
              className={`font-body text-lg md:text-xl text-muted-foreground italic max-w-xl leading-relaxed transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: headerVisible ? '400ms' : '0ms' }}
            >
              Choose the perfect package for your wilderness retreat. Each option is designed to
              immerse you in the beauty and serenity of Yala.
            </p>
          </div>

          <Link
            to="/"
            className={`flex items-center gap-3 font-sans-brand text-[12px] uppercase tracking-[0.15em] text-near-black hover:text-gold transition-all duration-700 mt-4 md:mt-8 shrink-0 ${headerVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: headerVisible ? '500ms' : '0ms' }}
          >
            <ArrowLeft size={16} />
            Back to Sanctuary
          </Link>
        </div>
      </section>

      {/* Packages */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto py-12 md:py-16 space-y-20 md:space-y-28">
        {packages.map((pkg) => (
          <PackageItem key={pkg.title} pkg={pkg} />
        ))}
      </section>

      <Footer />
      <FloatingUI />
    </div>
  );
};

export default RatesInquiries;
