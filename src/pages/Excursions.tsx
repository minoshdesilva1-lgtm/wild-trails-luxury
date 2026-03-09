import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingUI from '@/components/FloatingUI';
import LazyImage from '@/components/LazyImage';
import { useScrollReveal } from '@/hooks/useScrollReveal';

import yalaImg from '@/assets/yala-leopard.jpg';
import leopardTree from '@/assets/leopard-tree.jpg';
import kirindaImg from '@/assets/kirinda-beach.jpg';
import kataragamaImg from '@/assets/kataragama-temple.jpg';

const excursions = [
  {
    subtitle: 'Safari in Our Own Jeeps',
    title: 'Yala National Park',
    image: leopardTree,
    imageAlt: 'Leopard resting on a tree in Yala National Park',
    imagePosition: 'right' as const,
    description:
      'Go on a half or full day safari to Yala National Park in our own safari-ready jeeps. Our well-trained and experienced jeep drivers will take you through the trails of the big game — the elephant, leopard and the ever elusive sloth bear. If bird watching is your passion, there\'s the Bundala National Park where an array of birds — local, endemic and migratory — await.',
  },
  {
    subtitle: 'Take a Salt Water Dip',
    title: 'Kirinda Beach',
    image: kirindaImg,
    imageAlt: 'Monks overlooking the ocean at Kirinda Beach',
    imagePosition: 'left' as const,
    description:
      'Half an hour\'s drive from the camp in our own jeeps, Kirinda beach is a perfect location for a sea bath on a hot afternoon. After cooling off, take a walk down the annals of history and discover the legend of Sri Lanka\'s most revered King, whose story begins on Kirinda beach nearly two millennia ago.',
  },
  {
    subtitle: 'An Ancient City Revered by Several Religions',
    title: 'Kataragama',
    image: kataragamaImg,
    imageAlt: 'Colourful Kataragama temple entrance',
    imagePosition: 'right' as const,
    description:
      'A 45-minute drive from the camp, Kataragama is where thousands of pilgrims flock to worship Lord Skanda (Murugesh). The predominantly Buddhist Kings and armies of the Ruhuna kingdom first sought blessings at the shrine before marching to fight South Indian invaders. Beyond the wildlife, there is a lot of mystery and history to explore.',
  },
  {
    subtitle: 'Visit the Historic Temples and Sights',
    title: 'Thissamaharama Temple',
    image: yalaImg,
    imageAlt: 'Ancient Thissamaharama dagoba surrounded by lotus ponds',
    imagePosition: 'left' as const,
    description:
      'More than two millennia ago, this region was a seat of power for a small provincial kingdom with a courageous heart, called Ruhuna. With Anuradhapura and Polonnaruwa under attack from the armies of South India, it is this little kingdom that always gave hope and saw the rise of princes who would go on to re-take power, despite the massive odds.',
  },
];

const ExcursionItem = ({ item, index }: { item: typeof excursions[number]; index: number }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const imageOnLeft = item.imagePosition === 'left';

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
          src={item.image}
          alt={item.imageAlt}
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
        <div>
          <span className="label-small text-gold mb-2 block">{item.subtitle}</span>
          <h2 className="font-display text-3xl md:text-4xl text-near-black italic">
            {item.title}
          </h2>
        </div>

        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
          {item.description}
        </p>

        <a
          href="https://wa.me/94773333444"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-sans-brand text-[12px] uppercase tracking-[0.15em] px-8 py-3.5 bg-gold/80 text-near-black hover:bg-gold transition-all duration-300 mt-2"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

const Excursions = () => {
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
              <span className="font-sans-brand text-sm uppercase tracking-[0.2em] text-gold font-semibold">Explore the Region</span>
            </div>

            <h1 className={`font-display text-6xl md:text-8xl text-near-black italic mb-8 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: headerVisible ? '200ms' : '0ms' }}
            >
              Experiences &amp; Excursions
            </h1>

            <p className={`font-body text-lg md:text-xl text-muted-foreground italic max-w-xl leading-relaxed transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: headerVisible ? '400ms' : '0ms' }}
            >
              From thrilling safaris to ancient temples and pristine beaches, discover the wonders
              surrounding Wild Trails Yala.
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

      {/* Excursion Items */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto py-12 md:py-16 space-y-20 md:space-y-28">
        {excursions.map((item, i) => (
          <ExcursionItem key={item.title} item={item} index={i} />
        ))}
      </section>

      <Footer />
      <FloatingUI />
    </div>
  );
};

export default Excursions;
