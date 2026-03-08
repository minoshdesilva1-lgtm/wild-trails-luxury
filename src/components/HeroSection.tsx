import heroImg from '@/assets/room-pool-exterior.jpg';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] ease-out ${loaded ? 'scale-100' : 'scale-110'}`}
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className={`font-sans-brand uppercase tracking-[0.25em] text-[11px] md:text-[13px] text-card/90 mb-6 border-b border-card/30 pb-2 transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          WAKE TO THE RHYTHM OF THE WILD.
        </p>
        <h1 className={`font-display font-bold text-card text-4xl md:text-6xl lg:text-[80px] leading-[1.1] max-w-5xl uppercase tracking-[0.03em] transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          Sleep Beneath Starlit Skies in Effortless Luxury.
        </h1>
        <p className={`font-body text-card/90 text-lg md:text-xl mt-8 font-light transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Welcome to Wild Trails Yala by Mili, Yala.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
