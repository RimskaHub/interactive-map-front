import HeroSection from '@/components/landing-page/hero-section/HeroSection';
import DestinationCards from '@/components/landing-page/destination-cards/DestinationCards';
import MainLayout from '@/layouts/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <DestinationCards />
    </MainLayout>
  );
};

export default Home;
