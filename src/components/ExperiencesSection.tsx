import yalaImg from '@/assets/yala-leopard.jpg';
import kirindaImg from '@/assets/kirinda-beach.jpg';
import kataragamaImg from '@/assets/kataragama-temple.jpg';

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
  return (
    <section id="experiences" className="section-padding bg-card">
      <h2 className="font-display font-bold text-3xl md:text-[44px] text-near-black text-center uppercase tracking-[0.05em] mb-14">
        Experiences & Excursions
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((e) => (
          <div key={e.title} className="relative h-[400px] overflow-hidden group cursor-pointer">
            <img
              src={e.image}
              alt={e.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display font-bold text-2xl text-card mb-2">{e.title}</h3>
              <p className="font-body text-sm text-card/80 leading-relaxed">{e.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencesSection;
