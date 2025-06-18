import HeroSection from '@/components/landing-page/hero-section/HeroSection';
import DestinationCards from '@/components/landing-page/destination-cards/DestinationCards';
import MarketingSection from '@/components/landing-page/marketing-section/MarketingSection';
import MainLayout from '@/layouts/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <DestinationCards />
      <MarketingSection />
    </MainLayout>
  );
};

export default Home;
