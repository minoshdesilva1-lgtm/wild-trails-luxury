import { Star } from 'lucide-react';
import miliSignature from '@/assets/mili-signature.png';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const WelcomeSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="welcome" className="section-padding bg-card relative overflow-hidden">
      {/* Leopard watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none">
        <svg viewBox="0 0 200 200" className="w-[500px] h-[500px]" fill="none" stroke="currentColor" strokeWidth="0.5">
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="font-display text-[40px]" fill="currentColor" stroke="none">🐆</text>
        </svg>
      </div>

      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Stars */}
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} className="text-gold fill-gold" />
          ))}
        </div>

        {/* Label with lines */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className={`h-px bg-gold/40 transition-all duration-1000 delay-300 ${isVisible ? 'w-12' : 'w-0'}`} />
          <span className="label-small">WELCOME TO WILD TRAILS YALA BY MILI</span>
          <div className={`h-px bg-gold/40 transition-all duration-1000 delay-300 ${isVisible ? 'w-12' : 'w-0'}`} />
        </div>

        {/* Heading */}
        <h2 className="font-display font-bold text-3xl md:text-5xl text-near-black uppercase tracking-[0.03em] mb-12">
          Luxury Tented Camping Yala
        </h2>

        {/* Quote */}
        <div className="max-w-[750px] mx-auto">
          <span className="font-display text-6xl text-gold/60 leading-none block mb-2">"</span>
          <p className="font-body text-lg md:text-xl leading-[1.9] text-near-black/70 mb-8">
            Founded in 2007, Wild Trails by Mili brings luxury glamping to Yala, Sri Lanka. Inspired by my photography journeys, we created an eco-luxury safari camp where comfort meets the wild. Every stay is more than a getaway – it's an authentic Yala experience in style and comfort.
          </p>
          <img src={miliSignature} alt="Mili signature" className="h-12 mx-auto mb-2 opacity-70 hover:opacity-100 transition-opacity duration-500" />
          <p className="font-sans-brand text-[13px] text-muted-foreground tracking-wide">
            Milinda De Silva – <em>Founder</em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
