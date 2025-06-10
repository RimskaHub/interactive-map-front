import { useEffect, useState } from 'react';
import Map from '@/components/map/Map';
import MainLayout from '@/layouts/MainLayout';

// serbia geocode
const DEFAULT_GEOCODE: [number, number] = [44.0165, 21.0059];

const Home = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [zoom, setZoom] = useState<number>(7);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
          setZoom(11);
          setIsLoading(false);
        },
        (error) => {
          console.error('error getting user location:', error);
          setUserLocation(DEFAULT_GEOCODE);
          setIsLoading(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000, // 15 sec
          maximumAge: 0, // don't use cached location
        },
      );
    } else {
      console.error('geolocation is not supported by this browser');
      // fallback to serbia coordinates
      setUserLocation(DEFAULT_GEOCODE);
      setIsLoading(false);
    }
  }, []);

  if (isLoading || !userLocation) {
    return <div>loading map...</div>;
  }

  return (
    <MainLayout>
      <Map center={userLocation} zoom={zoom} />;
    </MainLayout>
  );
};

export default Home;
