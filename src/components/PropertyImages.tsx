import tentInterior from '@/assets/tent-interior.jpg';
import tentExterior from '@/assets/tent-exterior.jpg';

const PropertyImages = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 w-full">
      <div className="h-[400px] md:h-[600px] overflow-hidden">
        <img
          src={tentInterior}
          alt="Luxury tent interior with king bed and warm lighting"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      <div className="h-[400px] md:h-[600px] overflow-hidden">
        <img
          src={tentExterior}
          alt="Exterior tent deck with private plunge pool"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default PropertyImages;
