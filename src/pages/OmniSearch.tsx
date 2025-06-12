import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Container,
  Paper,
} from '@mui/material';

import { MdLocationOn, MdBusiness, MdPerson, MdEvent, MdStar, MdPlace } from 'react-icons/md';

import MainLayout from '@/layouts/MainLayout';

// Mock data for search
const mockResults = [
  {
    id: 1,
    title: 'Kalemegdan Park',
    type: 'location',
    description: 'Istorijska tvrđava i park u centru Beograda',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    category: 'Park',
    rating: 4.5,
    distance: '2.3 km',
  },
  {
    id: 2,
    title: 'Tesla Muzej',
    type: 'business',
    description: 'Muzej posvećen pronalazaču Nikoli Tesli',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop',
    category: 'Muzej',
    rating: 4.7,
    distance: '1.8 km',
  },
  {
    id: 3,
    title: 'Skadarlija',
    type: 'location',
    description: 'Tradicionalni bogemski kvart sa restoranima',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop',
    category: 'Četvrt',
    rating: 4.4,
    distance: '3.1 km',
  },
  {
    id: 4,
    title: 'Dr Milan Petrović',
    type: 'person',
    description: 'Kardiolog u Kliničkom centru',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop',
    category: 'Doktor',
    rating: 4.8,
    distance: '5.2 km',
  },
  {
    id: 5,
    title: 'EXIT Festival 2025',
    type: 'event',
    description: 'Muzički festival u Novom Sadu',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    category: 'Festival',
    rating: 4.9,
    distance: '95 km',
  },
  {
    id: 6,
    title: 'Gardoš Kula',
    type: 'location',
    description: 'Istorijska kula sa panoramskim pogledom',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    category: 'Znamenitost',
    rating: 4.3,
    distance: '12 km',
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'location':
      return <MdLocationOn />;
    case 'business':
      return <MdBusiness />;
    case 'person':
      return <MdPerson />;
    case 'event':
      return <MdEvent />;
    default:
      return <MdLocationOn />;
  }
};

const getTypeDisplayName = (type: string) => {
  switch (type) {
    case 'location':
      return 'lokacija';
    case 'business':
      return 'poslovanje';
    case 'person':
      return 'osoba';
    case 'event':
      return 'događaj';
    default:
      return 'ostalo';
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'location':
      return 'var(--clr-brand-500)';
    case 'business':
      return 'var(--clr-slate-600)';
    case 'person':
      return '#4caf50';
    case 'event':
      return '#ff9800';
    default:
      return 'var(--clr-slate-600)';
  }
};

const OmniSearch = () => {
  return (
    <MainLayout>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ color: 'var(--clr-brand-500)' }}
          >
            Rezultati pretrage
          </Typography>
          <Typography variant="body1" color="var(--clr-slate-600)" sx={{ mb: 2 }}>
            Pronađeno je {mockResults.length} rezultata na osnovu vaših nedavnih pretaga
          </Typography>
        </Paper>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 3,
          }}
        >
          {mockResults.map((item) => (
            <Box
              key={item.id}
              sx={{
                maxWidth: { xs: '100%', md: 400 },
              }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  },
                  cursor: 'pointer',
                  border: `1px solid var(--clr-slate-600)`,
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, p: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
                    <Chip
                      icon={getTypeIcon(item.type)}
                      label={getTypeDisplayName(item.type)}
                      size="small"
                      sx={{
                        backgroundColor: getTypeColor(item.type),
                        color: 'white',
                        '& .MuiChip-icon': {
                          color: 'white',
                        },
                      }}
                    />
                    <Chip
                      label={item.category}
                      variant="outlined"
                      size="small"
                      sx={{
                        borderColor: 'var(--clr-slate-600)',
                        color: 'var(--clr-slate-600)',
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h6"
                    component="h2"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      color: 'var(--clr-brand-500)',
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      color: 'var(--clr-slate-600)',
                    }}
                  >
                    {item.description}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'var(--clr-brand-500)',
                        gap: 0.5,
                      }}
                    >
                      <MdStar style={{ fontSize: '16px' }} />
                      <Typography variant="body2">{item.rating}</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'var(--clr-slate-600)',
                        gap: 0.5,
                      }}
                    >
                      <MdPlace style={{ fontSize: '16px' }} />
                      <Typography variant="body2">{item.distance}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </MainLayout>
  );
};

export default OmniSearch;
