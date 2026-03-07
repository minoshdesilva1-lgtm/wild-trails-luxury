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

          <div className="mt-12 flex flex-col items-center gap-6">
            <button
              onClick={() => navigate('/gallery')}
              className="group relative flex items-center gap-4 bg-white/10 backdrop-blur-md border border-card/20 px-10 py-4 hover:bg-card hover:text-near-black transition-all duration-700 font-sans-brand text-xs uppercase tracking-[0.3em] text-card overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-4">
                <ImageIcon size={18} className="group-hover:scale-110 transition-transform duration-500" />
                EXPLORE VISUAL GALLERY
              </span>
              <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out opacity-20" />
            </button>
          </div>
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
