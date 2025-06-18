import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
} from '@mui/material';

import { AiFillStar } from 'react-icons/ai';

import marketingImg from '@/assets/images/marketing-image.jpg';

const MarketingSection = () => {
  return (
    <Box sx={{ paddingBlock: 4, backgroundColor: 'var(--clr-accent-offwhite)' }}>
      <Container maxWidth={'xl'}>
        <Grid container spacing={3}>
          {/* Left Card */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card variant="outlined" sx={{ height: 200, boxShadow: 1 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    hyphens: 'auto',
                    whiteSpace: 'normal',
                    width: '100%',
                    fontSize: { xs: '1rem', sm: '1.25rem' },
                  }}
                >
                  Omnimap – Prva platforma u Srbiji na kojoj možete pronaći sve što vam je potrebno
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <AiFillStar color="#fbc02d" size={24} />
                  <Typography
                    variant="h6"
                    sx={{ ml: 0.5, fontSize: { xs: '1rem', sm: '1.25rem' } }}
                  >
                    4.8
                  </Typography>
                  <Typography variant="body2" sx={{ ml: 0.5 }}>
                    /5
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                  Na osnovu 29.146 ocena pravih korisnika preko naše platforme
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Card */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              variant="outlined"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                height: 200,
                boxShadow: 1,
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: { xs: 0, sm: 160 }, height: 'auto' }}
                image={marketingImg}
                alt="Turisticki vodic sa klijentima"
              />
              <CardContent>
                <Typography
                  variant="h6"
                  component={'div'}
                  gutterBottom
                  fontWeight="bold"
                  sx={{
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    hyphens: 'auto',
                    whiteSpace: 'normal',
                    width: '100%',
                    fontSize: { xs: '1rem', sm: '1.25rem' },
                  }}
                >
                  Oglasi svoj biznis na Omnimap
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ my: 1, fontSize: { xs: '0.875rem', sm: '1rem' } }}
                >
                  Pronađi klijente i zaradi više
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: 'var(--clr-brown-500)',
                    '&:hover': { backgroundColor: 'var(--clr-brown-700)' },
                    alignSelf: 'flex-end',
                  }}
                >
                  Zašto da se oglasim
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MarketingSection;
