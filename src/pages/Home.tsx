import HeroSection from '@/components/landing-page/hero-section/HeroSection';
import DestinationCards from '@/components/landing-page/destination-cards/DestinationCards';
import MarketingSection from '@/components/landing-page/marketing-section/MarketingSection';
import MainLayout from '@/layouts/MainLayout';

const mockDestinations = [
  {
    cityName: 'Beograd',
    backgroundImage:
      'https://images.unsplash.com/photo-1632343295629-cdf8521215ad?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    trailCount: 12,
  },
  {
    cityName: 'Fruska gora',
    backgroundImage:
      'https://images.unsplash.com/photo-1630340430304-11e5c5b9f8bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    trailCount: 8,
  },
  {
    cityName: 'Niš',
    backgroundImage:
      'https://images.unsplash.com/photo-1652126252878-aee17e288e1b?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    trailCount: 6,
  },
  {
    cityName: 'Rtanj',
    backgroundImage:
      'https://images.unsplash.com/photo-1619124591285-15d3b26bcca8?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    trailCount: 5,
  },
  {
    cityName: 'Stara planina',
    backgroundImage:
      'https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?q=80&w=1144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    trailCount: 4,
  },
  {
    cityName: 'Zlatibor',
    backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500',
    trailCount: 15,
  },
];

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <DestinationCards destinations={mockDestinations} />
      <MarketingSection />
    </MainLayout>
  );
};

export default Home;
