import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WelcomeSection from '@/components/WelcomeSection';
import PropertyImages from '@/components/PropertyImages';
import BrandStory from '@/components/BrandStory';
import FacilitiesSection from '@/components/FacilitiesSection';
import RoomCarousel from '@/components/RoomCarousel';
import FeaturesRow from '@/components/FeaturesRow';
import LuxuryComfort from '@/components/LuxuryComfort';
import SpaSection from '@/components/SpaSection';

import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';
import FloatingUI from '@/components/FloatingUI';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <PropertyImages />
      <BrandStory />
      <FacilitiesSection />
      <RoomCarousel />
      <FeaturesRow />
      <LuxuryComfort />
      <SpaSection />
      
      <ReviewsSection />
      <Footer />
      <FloatingUI />
    </div>
  );
};

export default Index;
