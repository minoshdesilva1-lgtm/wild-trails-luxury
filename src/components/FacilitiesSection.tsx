import { useScrollReveal } from '@/hooks/useScrollReveal';

const FacilitiesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-cream grain-texture">
      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Left */}
        <div>
          <div className={`h-px bg-near-black mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'w-12' : 'w-0'}`} />
          <h2 className="font-display font-bold text-3xl md:text-[44px] leading-[1.2] text-near-black uppercase tracking-[0.02em]">
            Real Camping With All The Facilities.
          </h2>
        </div>

        {/* Center */}
        <div>
          <p className="font-body text-[17px] leading-[1.8] text-muted-foreground">
            The size of the tent is 15 feet wide and 36 feet in length. Bed room is 15 feet X 22 feet in
            length/bathroom 15 feet width X 7 feet in length/Deck 15 feet width X 7 feet in length. There are two
            bunker beds on the deck at the entrance two snooze off during the afternoon with the cool breeze blowing
            across.
          </p>
        </div>

        {/* Right */}
        <div className="flex md:justify-end items-start">
          <a href="#rooms" className="btn-dark group relative overflow-hidden">
            <span className="relative z-10">VIEW ALL TENTS</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
