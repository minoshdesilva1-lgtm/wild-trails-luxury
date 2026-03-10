import { Link } from 'react-router-dom';
import room1Exterior from '@/assets/room1-exterior.jpg';
import room1Pool from '@/assets/room1-pool.jpg';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const PropertyImages = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="relative grid grid-cols-1 md:grid-cols-2 w-full">
      <div className={`h-[400px] md:h-[600px] overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <img
          src={room1Exterior}
          alt="Safari tent exterior with wooden deck and plunge pool"
          width={900}
          height={600}
          decoding="async"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      <div className={`h-[400px] md:h-[600px] overflow-hidden transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <img
          src={room1Pool}
          alt="Private plunge pool surrounded by lush greenery"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Link to="/gallery" className="btn-outline-light text-[12px] px-8 py-4 hover:bg-card/20 hover:scale-105 transition-all duration-300">
          View Gallery
        </Link>
      </div>
    </section>
  );
};

export default PropertyImages;
