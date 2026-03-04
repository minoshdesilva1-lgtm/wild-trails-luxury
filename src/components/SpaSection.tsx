import { Check } from 'lucide-react';
import leopardImg from '@/assets/leopard-tree.jpg';

const spaServices = [
  'Massage Therapies',
  'After Sun Rescue & Body Frap Wrap',
  'Manicures & Pedicures',
  'Renewing Exfoliating Ritual',
  'Comprehensive skin care',
  'Treasures of the Sea Treatment',
];

const SpaSection = () => {
  return (
    <section id="spa" className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
      <div className="h-[400px] lg:h-auto overflow-hidden">
        <img
          src={leopardImg}
          alt="Sri Lankan leopard resting on a tree"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="bg-dark-teal flex items-center px-6 lg:px-16 py-16">
        <div className="max-w-lg">
          <span className="label-small mb-4 block">SPA MASSAGE</span>
          <h2 className="font-display font-bold text-3xl md:text-[42px] leading-[1.2] text-card uppercase tracking-[0.02em] mb-6">
            Dispel Your Stress And Fatigue With The Spa And Massage
          </h2>
          <p className="font-body text-[17px] leading-[1.8] text-card/70 mb-8">
            When coming to this Spa, we will feel all 5 senses, with peaceful space, melodious sound, faint scent and
            enjoy attentive and effective care.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {spaServices.map((s) => (
              <div key={s} className="flex items-center gap-2">
                <Check size={16} className="text-gold flex-shrink-0" />
                <span className="font-body text-[15px] text-card/80">{s}</span>
              </div>
            ))}
          </div>

          <a href="#" className="btn-outline-light">
            READ MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpaSection;
