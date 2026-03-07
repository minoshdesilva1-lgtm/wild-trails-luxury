import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingUI from '@/components/FloatingUI';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

const Gallery = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const images = [
        { src: '/src/assets/gallery-3.jpg', alt: 'Luxury Tent Sanctuary' },
        { src: '/src/assets/gallery-1.jpg', alt: 'Private Plunge Pool View' },
        { src: '/src/assets/gallery-4.jpg', alt: 'Spacious Tent Interior' },
        { src: '/src/assets/gallery-2.jpg', alt: 'Eco-Luxury Exterior' },
        { src: '/src/assets/gallery-5.jpg', alt: 'Dinner Under the Stars' },
        { src: '/src/assets/gallery-6.jpg', alt: 'Twilight Rock Dining' },
    ];

    return (
        <div className="min-h-screen bg-cream selection:bg-forest selection:text-white">
            <Navbar />

            <main className="pt-32 pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto overflow-hidden">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 animate-fade-in-up">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-[1px] bg-gold" />
                            <span className="font-sans-brand text-xs uppercase tracking-[0.3em] text-gold font-medium">Visual Journey</span>
                        </div>
                        <h1 className="font-display text-5xl md:text-6xl text-near-black leading-tight italic">Gallery</h1>
                        <p className="font-body text-xl text-near-black/70 max-w-2xl leading-relaxed italic">
                            Experience the untamed beauty of Sri Lanka's wilderness through our curated collection of moments, from the luxury of our tents to the majestic grace of Yala's wildlife.
                        </p>
                    </div>
                    <button
                        onClick={() => navigate('/')}
                        className="group flex items-center gap-3 font-sans-brand text-xs uppercase tracking-[0.2em] text-near-black/60 hover:text-near-black transition-all duration-300"
                    >
                        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-2" />
                        Back to Sanctuary
                    </button>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="group relative aspect-[4/5] overflow-hidden bg-forest/5 shadow-sm hover:shadow-2xl transition-all duration-700 animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-forest/40 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center p-8 text-center backdrop-blur-[2px]">
                                <span className="font-sans-brand text-card text-[10px] uppercase tracking-[0.3em] mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    Exploration
                                </span>
                                <div className="w-12 h-[1px] bg-card/60 mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                <h3 className="font-display text-xl text-card italic translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                                    {img.alt}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
            <FloatingUI />
        </div>
    );
};

export default Gallery;
