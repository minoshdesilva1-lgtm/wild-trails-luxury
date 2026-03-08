import yalaImg from '@/assets/yala-leopard.jpg';
import kirindaImg from '@/assets/kirinda-beach.jpg';
import kataragamaImg from '@/assets/kataragama-temple.jpg';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const experiences = [
  {
    image: yalaImg,
    title: 'Yala National Park',
    description: 'Home to the highest density of leopards in the world, Yala National Park offers unforgettable wildlife encounters.',
  },
  {
    image: kirindaImg,
    title: 'Kirinda Beach',
    description: 'Being far from the beaches of the renowned down-south coast, Kirinda offers raw, untouched beauty.',
  },
  {
    image: kataragamaImg,
    title: 'Kataragama',
    description: 'There are still remnants left of the past — ancient irrigation works and temples. Most significant and mysterious of all.',
  },
];

const ExperiencesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="experiences" className="section-padding bg-card">
      <h2 className={`font-display font-bold text-3xl md:text-[44px] text-near-black text-center uppercase tracking-[0.05em] mb-14 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        Experiences & Excursions
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((e, i) => (
          <div
            key={e.title}
            className={`relative h-[400px] overflow-hidden group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: isVisible ? `${200 + i * 150}ms` : '0ms' }}
          >
            <img
              src={e.image}
              alt={e.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 transform group-hover:translate-y-[-8px] transition-transform duration-500">
              <h3 className="font-display font-bold text-2xl text-card mb-2">{e.title}</h3>
              <p className="font-body text-sm text-card/80 leading-relaxed group-hover:text-card transition-colors duration-300">{e.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencesSection;
