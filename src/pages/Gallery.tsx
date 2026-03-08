import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingUI from '@/components/FloatingUI';
import LazyImage from '@/components/LazyImage';

import room1Exterior from '@/assets/room1-exterior.jpg';
import room1Pool from '@/assets/room1-pool.jpg';
import room1PoolView from '@/assets/room1-pool-view.jpg';
import room1Interior from '@/assets/room1-interior.jpg';
import room1Bedroom from '@/assets/room1-bedroom.jpg';
import spaLifestyle from '@/assets/spa-lifestyle.jpg';
import leopardTree from '@/assets/leopard-tree.jpg';
import yalaLeopard from '@/assets/yala-leopard.jpg';
import kirindaBeach from '@/assets/kirinda-beach.jpg';
import kataragamaTemple from '@/assets/kataragama-temple.jpg';
import bushDining1 from '@/assets/bush-dining-1.jpg';
import bushDining2 from '@/assets/bush-dining-2.jpg';
import bushDining3 from '@/assets/bush-dining-3.jpg';
import bushDining4 from '@/assets/bush-dining-4.jpg';

type Category = 'ALL' | 'THE TENTS' | 'SUNDOWNER LOUNGE' | 'BUSH DINING' | 'IN THE WILD';

const galleryItems = [
  { src: room1Exterior, alt: 'Tent exterior with wooden deck', category: 'THE TENTS' as const, label: 'PRIVATE DECK VIEW' },
  { src: room1Interior, alt: 'Luxury tent interior with king bed', category: 'THE TENTS' as const, label: 'LUXURY TENT INTERIOR' },
  { src: room1Pool, alt: 'Private plunge pool with jungle views', category: 'THE TENTS' as const, label: 'PRIVATE PLUNGE POOL' },
  { src: room1PoolView, alt: 'Plunge pool through the foliage', category: 'THE TENTS' as const, label: 'POOL GARDEN VIEW' },
  { src: room1Bedroom, alt: 'Spacious tent bedroom with panoramic windows', category: 'THE TENTS' as const, label: 'PANORAMIC BEDROOM' },
  
  { src: bushDining1, alt: 'Bush dining under the stars with campfire', category: 'BUSH DINING' as const, label: 'CAMPFIRE DINNER' },
  { src: bushDining2, alt: 'Gourmet meal by firelight with wine', category: 'BUSH DINING' as const, label: 'FIRESIDE CUISINE' },
  { src: bushDining3, alt: 'Lantern-lit jungle dining experience', category: 'BUSH DINING' as const, label: 'JUNGLE LANTERN DINING' },
  { src: bushDining4, alt: 'Bush dining on rock with campfire at dusk', category: 'BUSH DINING' as const, label: 'ROCK-TOP BUSH DINING' },
  { src: kirindaBeach, alt: 'Kirinda beach coastline', category: 'IN THE WILD' as const, label: 'KIRINDA COASTLINE' },
];

const categories: Category[] = ['ALL', 'THE TENTS', 'SUNDOWNER LOUNGE', 'BUSH DINING', 'IN THE WILD'];

const Gallery = () => {
  const [active, setActive] = useState<Category>('ALL');

  const filtered = active === 'ALL' ? galleryItems : galleryItems.filter(i => i.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-8 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            {/* Label */}
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-px bg-gold" />
              <span className="label-small">Visual Journey</span>
            </div>

            {/* Title */}
            <h1 className="font-display text-6xl md:text-8xl text-near-black italic mb-8">
              Gallery
            </h1>

            {/* Description */}
            <p className="font-body text-lg md:text-xl text-muted-foreground italic max-w-xl leading-relaxed">
              Experience the untamed beauty of Sri Lanka's wilderness through our curated collection of moments, from the luxury of our tents to the majestic grace of Yala's wildlife.
            </p>
          </div>

          {/* Back link */}
          <Link
            to="/"
            className="flex items-center gap-3 font-sans-brand text-[12px] uppercase tracking-[0.15em] text-near-black hover:text-gold transition-colors mt-4 md:mt-8 shrink-0"
          >
            <ArrowLeft size={16} />
            Back to Sanctuary
          </Link>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto py-8 border-b border-border">
        <div className="flex flex-wrap gap-6 md:gap-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-sans-brand text-[12px] uppercase tracking-[0.15em] pb-2 transition-all duration-300 ${
                active === cat
                  ? 'text-near-black border-b-2 border-near-black font-semibold'
                  : 'text-muted-foreground hover:text-near-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <div
              key={`${item.alt}-${i}`}
              className="relative h-[350px] md:h-[420px] overflow-hidden group cursor-pointer"
            >
              <LazyImage
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-near-black/0 group-hover:bg-near-black/40 transition-colors duration-500 flex items-center justify-center">
                <span className="font-sans-brand text-[12px] uppercase tracking-[0.2em] text-card opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <FloatingUI />
    </div>
  );
};

export default Gallery;
