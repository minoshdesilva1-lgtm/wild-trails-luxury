import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useCallback } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import useEmblaCarousel from 'embla-carousel-react';
import { useIsMobile } from '@/hooks/use-mobile';

const reviews = [
  {
    name: 'Amy E',
    date: '16 May 2025',
    rating: 5,
    title: 'Immersion into safari life',
    text: 'A great spot to base our safari adventure. Mili was a wonderful and interesting host who made us feel very welcome. The tents are comfortable and the food was excellent. A truly unique and memorable experience.',
  },
  {
    name: 'DLF12',
    date: '8 January 2025',
    rating: 4,
    title: 'Simple and comfortable accommodation',
    text: 'We stayed here as part of our trip via Rickshaw. The accommodation was clean and comfortable, and the staff were incredibly friendly and helpful. Would highly recommend for anyone visiting Yala.',
  },
  {
    name: 'Αλεξάνδρα Μ',
    date: '24 December 2024',
    rating: 5,
    title: 'Safari in Sri Lanka!!!',
    text: 'A truly beautiful and welcoming experience. The location is perfect for early morning safaris. The staff went above and beyond to make our stay memorable. We will definitely return.',
  },
  {
    name: 'James R',
    date: '10 November 2024',
    rating: 5,
    title: 'An unforgettable wilderness retreat',
    text: 'From the moment we arrived, we felt immersed in nature. The sounds of the jungle at night, the incredible food, and the warmth of the staff made this a trip of a lifetime.',
  },
  {
    name: 'Sophie L',
    date: '3 October 2024',
    rating: 5,
    title: 'Pure magic in the wild',
    text: 'Wild Trails exceeded every expectation. The tented accommodation was luxurious yet authentic, and we spotted leopards on our very first safari. An experience we will cherish forever.',
  },
];

const ReviewsSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const isMobile = useIsMobile();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-12 lg:px-20" style={{ background: 'hsl(var(--cream))' }}>
      <div className="max-w-7xl mx-auto">
        {/* Top row: Rating block left + Header center + Arrows right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
          {/* Rating Block - Left */}
          <div className={`lg:col-span-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wider mb-3" style={{ color: 'hsl(var(--forest))' }}>
              Excellent
            </h3>
            <div className="flex gap-1.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 h-4 rounded-full bg-tripadvisor" />
              ))}
            </div>
            <p className="font-sans-brand uppercase tracking-[0.15em] text-[11px] text-muted-foreground mb-5">
              Based on <strong className="text-near-black">172 reviews</strong>
            </p>
            <div className="text-4xl">🦉</div>
          </div>

          {/* Header - Center */}
          <div className={`lg:col-span-6 text-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="label-small mb-4">— What Our Guests Say —</p>
            <h2 className="font-display text-3xl md:text-5xl italic mb-4" style={{ color: 'hsl(var(--forest))' }}>
              Stories From The Wild
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground font-light">
              Authentic experiences, straight from our guests
            </p>
          </div>

          {/* Arrows - Right */}
          <div className={`lg:col-span-3 flex items-center justify-center lg:justify-end gap-3 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-full flex items-center justify-center border-2 transition-all duration-300 hover:scale-110"
              style={{
                borderColor: 'hsl(var(--forest))',
                color: 'hsl(var(--forest))',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'hsl(var(--forest))';
                e.currentTarget.style.color = 'hsl(var(--cream))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'hsl(var(--forest))';
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-full flex items-center justify-center border-2 transition-all duration-300 hover:scale-110"
              style={{
                borderColor: 'hsl(var(--forest))',
                color: 'hsl(var(--forest))',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'hsl(var(--forest))';
                e.currentTarget.style.color = 'hsl(var(--cream))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'hsl(var(--forest))';
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex -ml-5">
              {reviews.map((r, i) => (
                <div
                  key={r.name}
                  className={`min-w-0 shrink-0 grow-0 pl-5 ${isMobile ? 'basis-full' : 'basis-1/3'}`}
                >
                  <div
                    className="bg-card rounded-lg p-7 md:p-8 relative overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 h-full flex flex-col"
                  >
                    {/* Decorative quote mark */}
                    <span
                      className="absolute top-4 right-6 font-display text-[120px] leading-none select-none pointer-events-none opacity-[0.07]"
                      style={{ color: 'hsl(var(--forest))' }}
                    >
                      "
                    </span>

                    {/* Avatar + Name + Date */}
                    <div className="flex items-center gap-4 mb-5 relative z-10">
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center font-sans-brand text-sm font-semibold shrink-0"
                        style={{
                          background: 'hsl(var(--forest))',
                          color: 'hsl(var(--cream))',
                        }}
                      >
                        {r.name[0]}
                      </div>
                      <div>
                        <p className="font-display font-bold text-[15px]" style={{ color: 'hsl(var(--near-black))' }}>
                          {r.name}
                        </p>
                        <p className="font-sans-brand uppercase tracking-[0.12em] text-[10px] text-muted-foreground">
                          {r.date}
                        </p>
                      </div>
                    </div>

                    {/* Rating dots */}
                    <div className="flex gap-1 mb-4 relative z-10">
                      {[...Array(r.rating)].map((_, j) => (
                        <div key={j} className="w-3 h-3 rounded-full" style={{ background: 'hsl(var(--forest))' }} />
                      ))}
                      {[...Array(5 - r.rating)].map((_, j) => (
                        <div key={j} className="w-3 h-3 rounded-full" style={{ background: 'hsl(var(--forest) / 0.15)' }} />
                      ))}
                    </div>

                    {/* Title */}
                    <h4
                      className="font-display font-semibold text-[17px] md:text-[18px] mb-3 relative z-10"
                      style={{ color: 'hsl(var(--near-black))' }}
                    >
                      {r.title}
                    </h4>

                    {/* Body */}
                    <p className="font-body text-[15px] text-muted-foreground leading-[1.8] mb-5 relative z-10 flex-1">
                      {r.text}
                    </p>

                    {/* Read more */}
                    <a
                      href="#"
                      className="font-sans-brand text-[11px] uppercase tracking-[0.15em] underline underline-offset-4 transition-colors duration-300 relative z-10 hover:opacity-70"
                      style={{ color: 'hsl(var(--forest))' }}
                    >
                      Read more
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
