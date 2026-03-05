import { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

const FloatingUI = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Contact chat bubble */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 pointer-events-none">
        <div className="bg-white text-near-black font-sans-brand text-[13px] font-medium px-5 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center gap-3 pointer-events-auto cursor-pointer hover:bg-cream/50 transition-colors group">
          <span>Contact us</span>
          <div className="w-8 h-8 rounded-full bg-chat-green text-card flex items-center justify-center group-hover:scale-110 transition-transform">
            <MessageCircle size={16} fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-50 w-10 h-10 bg-near-black/80 text-card flex items-center justify-center hover:bg-near-black transition-colors"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
};

export default FloatingUI;
