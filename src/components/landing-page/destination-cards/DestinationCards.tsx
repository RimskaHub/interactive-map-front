import { Typography, Grid, Container } from '@mui/material';

import DestinationCard, {
  type DestinationCardProps,
} from '@/components/landing-page/destination-cards/destination-card/DestinationCard';

interface IDestinations {
  destinations: DestinationCardProps[];
  title: string;
}

const DestinationCards = ({ destinations, title }: IDestinations) => {
  return (
    <Container sx={{ paddingBlock: 4 }} maxWidth="xl">
      <Typography
        variant="h4"
        component="h4"
        sx={{
          textAlign: 'left',
          marginBottom: 4,
          color: 'var(--clr-green-700)',
          fontSize: { xs: 'var(--font-size-heading-sm)' },
        }}
      >
        {title}
      </Typography>

      <Grid container spacing={3}>
        {destinations.map((destination) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={destination.cityName}>
            <DestinationCard
              cityName={destination.cityName}
              backgroundImage={destination.backgroundImage}
              trailCount={destination.trailCount}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DestinationCards;
