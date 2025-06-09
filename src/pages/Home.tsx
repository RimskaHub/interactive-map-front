import { useEffect, useState } from 'react';
import Map from '@/components/map/Map';

// belgrade geocode
const DEFAULT_GEOCODE: [number, number] = [44.8125, 20.4612];

const Home = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
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
      // fallback to belgrade coordinates
      setUserLocation(DEFAULT_GEOCODE);
      setIsLoading(false);
    }
  }, []);

  if (isLoading || !userLocation) {
    return <div>loading map...</div>;
  }

  return <Map center={userLocation} />;
};

export default Home;
