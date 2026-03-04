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
      <div className="fixed bottom-6 right-6 z-50 group">
        <button className="w-14 h-14 rounded-full bg-chat-green text-card flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <MessageCircle size={24} />
        </button>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-near-black font-sans-brand text-[12px] px-3 py-1.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Contact us
        </span>
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
