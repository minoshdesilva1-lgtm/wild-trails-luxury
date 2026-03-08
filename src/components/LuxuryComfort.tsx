import spaImg from '@/assets/spa-lifestyle.jpg';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const LuxuryComfort = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
      <div className="h-[400px] lg:h-auto overflow-hidden">
        <img
          src={spaImg}
          alt="Woman relaxing by tropical indoor pool"
          className={`w-full h-full object-cover transition-all duration-1000 hover:scale-105 ${isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
          loading="lazy"
        />
      </div>
      <div className="flex items-center bg-card px-6 lg:px-16 py-16">
        <div className={`max-w-lg transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <h2 className="font-display font-bold text-3xl md:text-[42px] leading-[1.2] text-near-black uppercase tracking-[0.02em] mb-6">
            Luxury & Comfort Our Service Always Brings Satisfaction
          </h2>
          <p className="font-body text-[17px] leading-[1.8] text-muted-foreground">
            The details of the bathroom set will be stacked in a tray and placed on the stone table or next to the
            washbasin in the bathroom. Every amenity is carefully curated to complement your safari experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LuxuryComfort;
