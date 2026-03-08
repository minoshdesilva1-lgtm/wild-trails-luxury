import { useState } from 'react';
import room1Interior from '@/assets/room1-interior.jpg';
import room1Bedroom from '@/assets/room1-bedroom.jpg';

const rooms = [
  {
    image: room1Interior,
    type: 'STANDARD ROOM',
    price: '$50',
    description: 'Recently refurbished in an individual and elegant style, enjoy the comfort of a luxurious Corrib Room. Upgrade to an immaculate Corrib Lake View.',
    capacity: '4 Persons',
    size: '30 m²',
    bed: 'King Bed',
    service: 'Free Breakfast, Free Wifi, Free Water',
  },
  {
    image: room1Bedroom,
    type: 'PREMIUM TENT',
    price: '$95',
    description: 'Experience the ultimate safari luxury with a private plunge pool, expansive wooden deck, and panoramic views of the surrounding wilderness.',
    capacity: '2 Persons',
    size: '50 m²',
    bed: 'King Bed',
    service: 'Full Board, Private Pool, Butler Service',
  },
];

const RoomCarousel = () => {
  const [current, setCurrent] = useState(0);
  const room = rooms[current];

  return (
    <section id="rooms" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[500px]">
          {/* Image */}
          <div className="h-[350px] lg:h-auto overflow-hidden">
            <img
              src={room.image}
              alt={room.type}
              className="w-full h-full object-cover transition-all duration-500"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center px-6 lg:px-16 py-10">
            <h3 className="font-display font-bold text-3xl md:text-[40px] text-near-black uppercase tracking-[0.02em] mb-4">
              {room.type}
            </h3>

            <div className="mb-6">
              <span className="font-sans-brand text-[12px] text-muted-foreground uppercase tracking-wider">FROM </span>
              <span className="font-display font-bold text-3xl text-warm-tan">{room.price}</span>
              <span className="font-sans-brand text-[12px] text-muted-foreground uppercase tracking-wider"> / NIGHT</span>
            </div>

            <p className="font-body text-[17px] leading-[1.8] text-muted-foreground mb-8">
              {room.description}
            </p>

            <div className="space-y-3 mb-8">
              {[
                ['Capacity', room.capacity],
                ['Size', room.size],
                ['Bed', room.bed],
                ['Service', room.service],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-4">
                  <span className="font-sans-brand text-[12px] uppercase tracking-wider text-muted-foreground w-20">{label}:</span>
                  <span className="font-body text-[16px] text-near-black">{value}</span>
                </div>
              ))}
            </div>

            <a href="#" className="font-sans-brand text-[12px] uppercase tracking-[0.15em] text-near-black underline underline-offset-4 hover:text-gold transition-colors inline-block mb-10">
              MORE DETAILS ROOM
            </a>

            {/* Pagination */}
            <div className="flex items-center gap-4 font-sans-brand text-[14px] text-near-black">
              <button
                onClick={() => setCurrent(0)}
                className={`transition-colors ${current === 0 ? 'text-near-black font-semibold' : 'text-muted-foreground'}`}
              >
                01
              </button>
              <div className="w-12 h-px bg-near-black/30" />
              <button
                onClick={() => setCurrent(1)}
                className={`transition-colors ${current === 1 ? 'text-near-black font-semibold' : 'text-muted-foreground'}`}
              >
                02
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomCarousel;
