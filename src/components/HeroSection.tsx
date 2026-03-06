import heroImg from '@/assets/gallery-3.jpg';
import { Image as ImageIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-full overflow-hidden selection:bg-forest selection:text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      {/* Gallery Side Button (Desktop) */}
      <div className="absolute top-1/2 left-8 md:left-12 -translate-y-1/2 hidden md:flex flex-col items-center gap-8 z-20">
        <div className="h-24 w-[1px] bg-card/20" />
        <button
          onClick={() => navigate('/gallery')}
          className="group relative flex flex-col items-center gap-4 transition-all duration-500"
        >
          <div className="w-14 h-14 rounded-full border border-card/30 flex items-center justify-center bg-black/20 backdrop-blur-sm group-hover:bg-card group-hover:text-near-black transition-all duration-700 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <ImageIcon size={22} className="group-hover:scale-110 transition-transform duration-500" />
          </div>
          <span className="font-sans-brand text-[10px] uppercase tracking-[0.4em] text-card/60 vertical-text group-hover:text-card group-hover:tracking-[0.5em] transition-all duration-700 whitespace-nowrap">
            View Gallery
          </span>
        </button>
        <div className="h-24 w-[1px] bg-card/20" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <div className="animate-fade-in-up">
          <p className="font-sans-brand uppercase tracking-[0.3em] text-[10px] md:text-[12px] text-gold mb-8 flex items-center gap-4 justify-center">
            <span className="w-8 h-[1px] bg-gold/50" />
            WAKE TO THE RHYTHM OF THE WILD
            <span className="w-8 h-[1px] bg-gold/50" />
          </p>
          <h1 className="font-display font-medium text-card text-5xl md:text-7xl lg:text-[90px] leading-[1] max-w-6xl uppercase tracking-tight italic">
            Sleep Beneath <br />
            <span className="text-card/80">Starlit Skies</span>
          </h1>
          <p className="font-body text-card/80 text-xl md:text-2xl mt-10 font-light italic max-w-2xl mx-auto leading-relaxed">
            Welcome to Wild Trails Yala by Mili, where untamed nature meets effortless luxury.
          </p>

          {/* Mobile Gallery Link */}
          <button
            onClick={() => navigate('/gallery')}
            className="md:hidden mt-12 inline-flex items-center gap-4 font-sans-brand text-[11px] uppercase tracking-[0.25em] text-card border border-card/20 px-8 py-4 bg-white/5 backdrop-blur-sm hover:bg-card hover:text-near-black transition-all duration-500"
          >
            <ImageIcon size={16} /> Open Gallery
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
        <span className="font-sans-brand text-[9px] uppercase tracking-[0.3em] text-card/40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-card/40 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
