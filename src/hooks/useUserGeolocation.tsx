import { useEffect, useState } from 'react';

const DEFAULT_GEOCODE: [number, number] = [44.0165, 21.0059];

interface IUseUserGeolocation {
  userLocation: [number, number] | null;
  isLoading: boolean;
  error: string | null;
}

const useUserGeolocation = (): IUseUserGeolocation => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
          setIsLoading(false);
        },
        (error) => {
          console.error('error getting user location:', error);
          setError(error.message);
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
      const errorMsg = 'geolocation is not supported by this browser';
      console.error(errorMsg);
      setError(errorMsg);
      setUserLocation(DEFAULT_GEOCODE);
      setIsLoading(false);
    }
  }, []);

  return { userLocation, isLoading, error };
};

export default useUserGeolocation;
