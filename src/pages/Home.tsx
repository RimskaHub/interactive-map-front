import MainLayout from '@/layouts/MainLayout';

import useUserGeolocation from '@/hooks/useUserGeolocation';

import { Box, Button, Container, Typography } from '@mui/material';

import heroImg from '@/assets/images/hero-img.jpg';

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
        {/* Hero Section */}
        <Box
          sx={{
            minHeight: '100vh',
            backgroundImage: `url(${heroImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
            },
          }}
        >
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
            <Box
              sx={{
                textAlign: 'center',
                color: 'white',
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 'bold',
                  mb: 2,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                }}
              >
                Dobrodošli na Omnimap
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  mb: 4,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                Istražite lokacije, pronađite zanimljiva mesta i otkrijte nove destinacije
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  backgroundColor: 'var(--clr-brown-500)',
                  '&:hover': {
                    backgroundColor: 'var(--clr-brown-700)',
                  },
                }}
              >
                Počni Istraživanje
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Home;
