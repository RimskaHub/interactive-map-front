import Map from '@/components/map/Map';
import MainLayout from '@/layouts/MainLayout';
import useUserGeolocation from '@/hooks/useUserGeolocation';

const Home = () => {
  const { userLocation, isLoading, error } = useUserGeolocation();

  if (isLoading || !userLocation) {
    return <div>mapa se ucitava...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <MainLayout>
      <Map center={userLocation} />;
    </MainLayout>
  );
};

export default Home;
