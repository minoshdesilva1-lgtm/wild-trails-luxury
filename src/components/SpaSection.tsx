import { Check } from 'lucide-react';
import leopardImg from '@/assets/leopard-tree.jpg';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const spaServices = [
  'Massage Therapies',
  'After Sun Rescue & Body Frap Wrap',
  'Manicures & Pedicures',
  'Renewing Exfoliating Ritual',
  'Comprehensive skin care',
  'Treasures of the Sea Treatment',
];

const SpaSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="spa" className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
      <div className="h-[400px] lg:h-auto overflow-hidden">
        <img
          src={leopardImg}
          alt="Sri Lankan leopard resting on a tree"
          className={`w-full h-full object-cover transition-all duration-1000 hover:scale-105 ${isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
          loading="lazy"
        />
      </div>
      <div className="bg-dark-teal flex items-center px-6 lg:px-16 py-16">
        <div className={`max-w-lg transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <span className="label-small mb-4 block">SPA MASSAGE</span>
          <h2 className="font-display font-bold text-3xl md:text-[42px] leading-[1.2] text-card uppercase tracking-[0.02em] mb-6">
            Dispel Your Stress And Fatigue With The Spa And Massage
          </h2>
          <p className="font-body text-[17px] leading-[1.8] text-card/70 mb-8">
            When coming to this Spa, we will feel all 5 senses, with peaceful space, melodious sound, faint scent and
            enjoy attentive and effective care.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {spaServices.map((s, i) => (
              <div
                key={s}
                className={`flex items-center gap-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                style={{ transitionDelay: isVisible ? `${400 + i * 80}ms` : '0ms' }}
              >
                <Check size={16} className="text-gold flex-shrink-0" />
                <span className="font-body text-[15px] text-card/80 hover:text-card transition-colors duration-300">{s}</span>
              </div>
            ))}
          </div>

          <a href="#" className="btn-outline-light hover:bg-card/10 transition-all duration-300">
            READ MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpaSection;
