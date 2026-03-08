import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const reviews = [
  {
    name: 'Amy E',
    date: '16 May 2025',
    rating: 5,
    title: 'Immersion into safari life',
    text: 'A great spot to base our safari adventure. Mili was a wonderful and interesting host who made us feel very welcome. The tents are comfortable and the food was excellent…',
  },
  {
    name: 'DLF12',
    date: '8 January 2025',
    rating: 4,
    title: 'Simple and comfortable accommodation',
    text: 'We stayed here as part of our trip via Rickshaw. The accommodation was clean and comfortable, and the staff were incredibly friendly and helpful…',
  },
  {
    name: 'Αλεξάνδρα Μ',
    date: '24 December 2024',
    rating: 5,
    title: 'Safari in Sri Lanka!!!',
    text: 'A truly beautiful and welcoming experience. The location is perfect for early morning safaris. The staff went above and beyond to make our stay memorable…',
  },
];

const ReviewsSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Left - Rating */}
          <div className={`lg:col-span-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-display font-bold text-3xl text-near-black mb-3">EXCELLENT</h3>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 h-4 rounded-full bg-tripadvisor" />
              ))}
            </div>
            <p className="font-sans-brand text-[13px] text-muted-foreground mb-4">
              Based on <strong className="text-near-black">172 reviews</strong>
            </p>
            <div className="text-2xl">🦉</div>
          </div>

          {/* Right - Reviews */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-end gap-2 mb-6">
              <button
                onClick={() => setStartIndex(Math.max(0, startIndex - 1))}
                className="w-8 h-8 flex items-center justify-center border border-near-black/20 hover:bg-near-black hover:text-card hover:scale-110 transition-all duration-300"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setStartIndex(Math.min(reviews.length - 1, startIndex + 1))}
                className="w-8 h-8 flex items-center justify-center border border-near-black/20 hover:bg-near-black hover:text-card hover:scale-110 transition-all duration-300"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {reviews.map((r, i) => (
                <div
                  key={r.name}
                  className={`border border-border p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: isVisible ? `${200 + i * 150}ms` : '0ms' }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gold/30 flex items-center justify-center font-sans-brand text-[13px] font-semibold text-near-black">
                        {r.name[0]}
                      </div>
                      <div>
                        <p className="font-sans-brand text-[13px] font-semibold text-near-black">{r.name}</p>
                        <p className="font-sans-brand text-[11px] text-muted-foreground">{r.date}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(r.rating)].map((_, i) => (
                      <div key={i} className="w-3 h-3 rounded-full bg-tripadvisor" />
                    ))}
                    {[...Array(5 - r.rating)].map((_, i) => (
                      <div key={i} className="w-3 h-3 rounded-full bg-tripadvisor/20" />
                    ))}
                  </div>
                  <h4 className="font-display font-bold text-[16px] text-near-black mb-2">{r.title}</h4>
                  <p className="font-body text-[14px] text-muted-foreground leading-relaxed mb-3">{r.text}</p>
                  <a href="#" className="font-sans-brand text-[11px] text-muted-foreground hover:text-near-black transition-colors story-link">
                    Read more
                  </a>
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
