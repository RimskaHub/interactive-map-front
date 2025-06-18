import { Box, Typography, Card, CardContent, Chip } from '@mui/material';

interface DestinationCardProps {
  cityName: string;
  backgroundImage: string;
  trailCount: number;
}

const DestinationCard = ({ cityName, backgroundImage, trailCount }: DestinationCardProps) => {
  return (
    <Card
      sx={{
        height: 300,
        position: 'relative',
        backgroundImage: `linear-gradient(to top, rgba(117, 142, 86, 0.3), rgba(0, 53, 89, 0)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        cursor: 'pointer',
        boxShadow: 2,
      }}
    >
      <CardContent
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 2,
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
          }}
        >
          {cityName}
        </Typography>

        <Box sx={{ alignSelf: 'flex-start' }}>
          <Chip
            label={`${trailCount} staza`}
            sx={{
              backgroundColor: 'var(--clr-brown-500)',
              color: 'var(--clr-white)',
              fontFamily: 'var(--ff-body)',
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
