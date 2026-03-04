import heroImg from '@/assets/hero-jungle.jpg';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="font-sans-brand uppercase tracking-[0.25em] text-[11px] md:text-[13px] text-card/90 mb-6 border-b border-card/30 pb-2">
          WAKE TO THE RHYTHM OF THE WILD.
        </p>
        <h1 className="font-display font-bold text-card text-4xl md:text-6xl lg:text-[80px] leading-[1.1] max-w-5xl uppercase tracking-[0.03em]">
          Sleep Beneath Starlit Skies in Effortless Luxury.
        </h1>
        <p className="font-body text-card/90 text-lg md:text-xl mt-8 font-light">
          Welcome to Wild Trails Yala by Mili, Yala.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
