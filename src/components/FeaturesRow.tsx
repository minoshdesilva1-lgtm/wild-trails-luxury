import { Building, Shield, DoorOpen, RefreshCw } from 'lucide-react';

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
  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((f) => (
          <div key={f.title} className="text-center">
            <f.icon size={56} strokeWidth={1} className="mx-auto mb-5 text-near-black" />
            <h4 className="font-display text-xl text-near-black mb-2">{f.title}</h4>
            <p className="font-body text-[15px] text-muted-foreground leading-relaxed">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesRow;
