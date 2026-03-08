import { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
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
import kirindaBeach from '@/assets/kirinda-beach.jpg';
import bushDining1 from '@/assets/bush-dining-1.jpg';
import bushDining2 from '@/assets/bush-dining-2.jpg';
import bushDining3 from '@/assets/bush-dining-3.jpg';
import bushDining4 from '@/assets/bush-dining-4.jpg';
import tentPoolFoliage from '@/assets/tent-pool-foliage.jpg';
import tentPoolDeck from '@/assets/tent-pool-deck.jpg';
import tentPoolWide from '@/assets/tent-pool-wide.jpg';
import tentInteriorWide from '@/assets/tent-interior-wide.jpg';
import tentExteriorFront from '@/assets/tent-exterior-front.jpg';
import tentBedroom from '@/assets/tent-bedroom.jpg';
import tentNightPool from '@/assets/tent-night-pool.jpg';
import tentBedroomWide from '@/assets/tent-bedroom-wide.jpg';

type Category = 'THE TENTS' | 'SUNDOWNER LOUNGE' | 'BUSH DINING' | 'IN THE WILD';

const galleryItems = [
  { src: tentPoolDeck, alt: 'Tent deck with plunge pool surrounded by foliage', category: 'THE TENTS' as const, label: 'PRIVATE POOL & DECK' },
  { src: tentPoolWide, alt: 'Tent deck and pool with jungle canopy view', category: 'THE TENTS' as const, label: 'JUNGLE CANOPY VIEW' },
  { src: tentInteriorWide, alt: 'Spacious luxury tent interior with panoramic jungle views', category: 'THE TENTS' as const, label: 'LUXURY TENT INTERIOR' },
  { src: tentExteriorFront, alt: 'Tent front exterior with deck pool and steps', category: 'THE TENTS' as const, label: 'TENT FRONT VIEW' },
  { src: tentBedroom, alt: 'Luxury tent bedroom with wooden interiors and ambient lighting', category: 'THE TENTS' as const, label: 'TENT BEDROOM' },
  { src: tentNightPool, alt: 'Luxury tent at night with plunge pool and ambient lighting', category: 'THE TENTS' as const, label: 'TENT NIGHT VIEW', objectPosition: 'center 40%' },
  { src: tentBedroomWide, alt: 'Spacious tent bedroom interior with elephant artwork and ambient lighting', category: 'THE TENTS' as const, label: 'TENT SUITE INTERIOR' },
  { src: bushDining1, alt: 'Bush dining under the stars with campfire', category: 'BUSH DINING' as const, label: 'CAMPFIRE DINNER' },
  { src: bushDining2, alt: 'Gourmet meal by firelight with wine', category: 'BUSH DINING' as const, label: 'FIRESIDE CUISINE' },
  { src: bushDining3, alt: 'Lantern-lit jungle dining experience', category: 'BUSH DINING' as const, label: 'JUNGLE LANTERN DINING' },
  { src: bushDining4, alt: 'Bush dining on rock with campfire at dusk', category: 'BUSH DINING' as const, label: 'ROCK-TOP BUSH DINING' },
  { src: kirindaBeach, alt: 'Kirinda beach coastline', category: 'IN THE WILD' as const, label: 'KIRINDA COASTLINE' },
];

const categories: Category[] = ['THE TENTS', 'SUNDOWNER LOUNGE', 'BUSH DINING', 'IN THE WILD'];

const Gallery = () => {
  const [active, setActive] = useState<Category>('THE TENTS');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = galleryItems.filter(i => i.category === active);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxIndex, goNext, goPrev]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-8 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-px bg-gold" />
              <span className="label-small">Visual Journey</span>
            </div>
            <h1 className="font-display text-6xl md:text-8xl text-near-black italic mb-8">
              Gallery
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground italic max-w-xl leading-relaxed">
              Experience the untamed beauty of Sri Lanka's wilderness through our curated collection of moments, from the luxury of our tents to the majestic grace of Yala's wildlife.
            </p>
          </div>
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
              onClick={() => openLightbox(i)}
            >
              <LazyImage
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
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

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-near-black/95 flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-card/80 hover:text-card transition-colors z-10"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-card/60 hover:text-card transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <div
            className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-card/60 hover:text-card transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-sans-brand text-[12px] uppercase tracking-[0.2em] text-card/60">
            {lightboxIndex + 1} / {filtered.length}
          </div>
        </div>
      )}

      <Footer />
      <FloatingUI />
    </div>
  );
};

export default Gallery;
