
import { Typography, Container, Grid, Paper } from '@mui/material';

const About = () => {


  return (
    <Container>
      <Typography variant="h4" align="center" sx={{ mt: 4, mb: 2, fontFamily: 'sans-serif' }}>
        About the Building
      </Typography>
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'left' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              More About Our Building
            </Typography>

            <Typography variant="body1" paragraph>
              Welcome to Harmony Residences, a beacon of modern living in the city center. Constructed with precision in 2015,
              our 20-story architectural masterpiece combines functionality with contemporary elegance. Each meticulously designed
              apartment within the tower reflects a commitment to luxurious urban living.
            </Typography>

            <Typography variant="body1" paragraph>
              At Harmony Residences, we prioritize your well-being, offering opulent amenities that redefine your lifestyle.
              From state-of-the-art fitness centers to rooftop gardens, every detail is crafted for your comfort and enjoyment.
              Our community is a sanctuary, with dedicated staff ensuring a secure and welcoming environment.
            </Typography>
            
            <Typography variant="body1" paragraph>
              Harmony Residences invites you to experience a harmonious blend of modernity and sophistication, where every day
              is an expression of urban luxury. Welcome to a life of comfort and style at Harmony Residences, your haven in the heart of the city.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://lion-coders.com/demo/html/sarchholm-real-estate-template/images/single-listing/property_view_8.jpg"
            alt=""
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
