import MainLayout from '@/layouts/MainLayout';

import useUserGeolocation from '@/hooks/useUserGeolocation';

import { Box } from '@mui/material';

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
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        LANDING PAGE
      </Box>
    </MainLayout>
  );
};

export default Home;
