import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingUI from '@/components/FloatingUI';

const CATEGORIES = ['ALL', 'THE TENTS', 'SUNDOWNER LOUNGE', 'BUSH DINING', 'IN THE WILD'];

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  alt: string;
  className?: string; // For masonry layout
}

const Gallery = () => {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('ALL');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsLoaded(true);
    }, []);

    const allImages: GalleryImage[] = [
        { id: 1, src: '/src/assets/gallery-3.jpg', category: 'THE TENTS', alt: 'Luxury Tent Sanctuary' },
        { id: 2, src: '/src/assets/gallery-5.jpg', category: 'BUSH DINING', alt: 'Dinner Under the Stars' },
        { id: 3, src: '/src/assets/leopard-tree.jpg', category: 'IN THE WILD', alt: 'The Yala Leopard' },
        { id: 4, src: '/src/assets/gallery-4.jpg', category: 'THE TENTS', alt: 'Spacious Tent Interior' },
        { id: 5, src: '/src/assets/gallery-1.jpg', category: 'THE TENTS', alt: 'Private Plunge Pool View' },
        { id: 6, src: '/src/assets/gallery-6.jpg', category: 'SUNDOWNER LOUNGE', alt: 'Twilight Rock Dining' },
        { id: 7, src: '/src/assets/gallery-2.jpg', category: 'THE TENTS', alt: 'Eco-Luxury Exterior' },
        { id: 8, src: '/src/assets/yala-leopard.jpg', category: 'IN THE WILD', alt: 'Wildlife Encounter' },
        { id: 9, src: '/src/assets/kirinda-beach.jpg', category: 'IN THE WILD', alt: 'Untouched Coastline' },
        { id: 10, src: '/src/assets/kataragama-temple.jpg', category: 'IN THE WILD', alt: 'Cultural Heritage' },
        { id: 11, src: '/src/assets/hero-jungle.jpg', category: 'SUNDOWNER LOUNGE', alt: 'The Jungle Terrace' },
        { id: 12, src: '/src/assets/gallery-5.jpg', category: 'SUNDOWNER LOUNGE', alt: 'Magical Evening' },
        { id: 13, src: '/src/assets/gallery-6.jpg', category: 'BUSH DINING', alt: 'Rock Dining Experience' },
    ];

    const filteredImages = useMemo(() => {
        return activeFilter === 'ALL' 
            ? allImages 
            : allImages.filter(img => img.category === activeFilter);
    }, [activeFilter, allImages]);

    // Helper to determine masonry spans based on index
    const getMasonryClass = (index: number) => {
        const patternIndex = index % 6; // Pattern of 6 images
        switch (patternIndex) {
            case 0: return 'md:col-span-2 md:row-span-1 aspect-[16/9] md:aspect-auto'; // Large wide
            case 1: return 'md:col-span-1 md:row-span-2 aspect-[4/5] md:aspect-auto'; // Tall portrait
            case 2: return 'md:col-span-1 md:row-span-1 aspect-square'; // Square
            case 3: return 'md:col-span-1 md:row-span-1 aspect-square'; // Square
            case 4: return 'md:col-span-1 md:row-span-1 aspect-square'; // Square
            case 5: return 'md:col-span-2 md:row-span-1 aspect-[16/9] md:aspect-auto'; // Wide landscape
            default: return 'md:col-span-1 md:row-span-1 aspect-square';
        }
    };

    return (
        <div className="min-h-screen bg-cream selection:bg-forest selection:text-white font-body">
            <Navbar />

            <main className="pt-40 pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
                {/* Header Section */}
                <header className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-16 h-[1px] bg-gold" />
                                <span className="font-sans-brand text-[10px] uppercase tracking-[0.4em] text-gold font-semibold">Visual Journey</span>
                            </div>
                            <h1 className="font-display text-6xl md:text-8xl text-near-black leading-tight italic lowercase">Gallery.</h1>
                        </div>
                        <button
                            onClick={() => navigate('/')}
                            className="group flex items-center gap-4 font-sans-brand text-[10px] uppercase tracking-[0.3em] text-near-black/50 hover:text-near-black transition-all duration-500"
                        >
                            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-2" />
                            Back to Sanctuary
                        </button>
                    </div>

                    <p className="font-body text-xl text-near-black/60 max-w-2xl leading-relaxed italic mb-16">
                        Experience the untamed beauty of Sri Lanka's wilderness through our curated collection of moments, from the luxury of our tents to the majestic grace of Yala's wildlife.
                    </p>

                    {/* Filter Navigation */}
                    <nav className="flex flex-wrap items-center gap-x-10 gap-y-4 mb-20">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`relative font-sans-brand text-[11px] uppercase tracking-[0.25em] transition-all duration-500 pb-2 ${
                                    activeFilter === cat 
                                    ? 'text-near-black' 
                                    : 'text-near-black/30 hover:text-near-black/60'
                                }`}
                            >
                                {cat}
                                {activeFilter === cat && (
                                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#8B4A3A] animate-in fade-in slide-in-from-left duration-500 fill-mode-forwards" />
                                )}
                            </button>
                        ))}
                    </nav>
                </header>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[300px]">
                    {filteredImages.map((img, index) => (
                        <div key={`${activeFilter}-${img.id}`} className="contents">
                            {/* Mid-Gallery CTA Break */}
                            {index === 6 && activeFilter === 'ALL' && (
                                <div className="col-span-full py-32 flex flex-col items-center text-center space-y-8 animate-in fade-in duration-1000">
                                    <div className="w-16 h-[1px] bg-[#8B4A3A] mb-4" />
                                    <h2 className="font-display text-4xl md:text-5xl text-near-black italic leading-tight max-w-3xl">
                                        "Every image is a moment waiting to be yours."
                                    </h2>
                                    <a 
                                        href="#inquire" 
                                        className="font-sans-brand text-[10px] uppercase tracking-[0.4em] text-near-black hover:text-[#8B4A3A] transition-colors flex items-center gap-4 group mt-4"
                                    >
                                        → CHECK AVAILABILITY
                                    </a>
                                </div>
                            )}

                            <div
                                className={`group relative overflow-hidden bg-forest/5 cursor-pointer transition-all duration-1000 transform ${getMasonryClass(index)} animate-in fade-in slide-in-from-bottom-8 fill-mode-forwards`}
                                style={{ animationDelay: `${(index % 6) * 150}ms`, animationDuration: '1000ms' }}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                                />
                                {/* Dark Overlay & Caption */}
                                <div className="absolute inset-0 bg-near-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 backdrop-blur-[2px] flex items-center justify-center p-8">
                                    <h3 className="font-sans-brand text-[11px] uppercase tracking-[0.3em] text-card text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                        {img.alt}
                                    </h3>
                                </div>
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
