import HeroSection from '@/components/landing-page/hero-section/HeroSection';
import DestinationCards from '@/components/landing-page/destination-cards/DestinationCards';
import MarketingSection from '@/components/landing-page/marketing-section/MarketingSection';
import MainLayout from '@/layouts/MainLayout';

const mockNearDestinations = [
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
const mockTopRatedDestinations = [
  {
    cityName: 'Tara',
    backgroundImage:
      'https://images.unsplash.com/photo-1635414730014-817f1a89b01a?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    trailCount: 22,
  },
  {
    cityName: 'Kopaonik',
    backgroundImage:
      'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    trailCount: 18,
  },
  {
    cityName: 'Đerdap',
    backgroundImage:
      'https://images.unsplash.com/photo-1592857202167-38be503da512?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    trailCount: 14,
  },
  {
    cityName: 'Divčibare',
    backgroundImage:
      'https://images.unsplash.com/photo-1607234591335-3ebee22bd2b4?q=80&w=1265&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    trailCount: 11,
  },
  {
    cityName: 'Golija',
    backgroundImage:
      'https://www.gdeputovati.rs/img/upload/mid/2402/vidikovac-srna-izubrafoto-janko-1.jpg',
    trailCount: 9,
  },
  {
    cityName: 'Šar planina',
    backgroundImage:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    trailCount: 13,
  },
];

// Ovo moze biti prikaz landing page-a i prikaza destinacija za usera koji spada u kategoriju planinarenja
const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <DestinationCards
        destinations={mockNearDestinations}
        title="Istražite mesta u Vašoj okolini"
      />
      <MarketingSection />
      <DestinationCards
        destinations={mockTopRatedDestinations}
        title="Najbolje ocenjena mesta za planinarenje"
      />
    </MainLayout>
  );
};

export default Home;
