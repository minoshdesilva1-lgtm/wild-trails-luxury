import { Building, Shield, DoorOpen, RefreshCw } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  {
    icon: Building,
    title: 'Five Star Hotel',
    text: 'Our luxury and best hotel for you.',
  },
  {
    icon: Shield,
    title: 'Keeping You Safe',
    text: 'We maintain the highest safety standards for all guests.',
  },
  {
    icon: DoorOpen,
    title: 'Room Services 24/24',
    text: 'We always keep the room clean and tidy, at your service.',
  },
  {
    icon: RefreshCw,
    title: 'Change Room',
    text: 'You will have the right to change the room within 24 hours from the time of booking.',
  },
];

const FeaturesRow = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`text-center group cursor-default transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: isVisible ? `${i * 150}ms` : '0ms' }}
          >
            <f.icon
              size={56}
              strokeWidth={1}
              className="mx-auto mb-5 text-near-black group-hover:text-gold group-hover:scale-110 transition-all duration-500"
            />
            <h4 className="font-display text-xl text-near-black mb-2 group-hover:text-gold transition-colors duration-300">{f.title}</h4>
            <p className="font-body text-[15px] text-muted-foreground leading-relaxed">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesRow;
