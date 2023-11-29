

import { Typography, Container, Grid, Paper } from '@mui/material';

const Map = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" sx={{ mt: 4, mb: 2, fontFamily: 'sans-serif' }}>
        Our Building Location From Here
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5496.837306991841!2d90.40445103982032!3d23.794346333811177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70e90bb671d%3A0x7eab77d0896252c0!2sBanani%20Super%20Market!5e0!3m2!1sen!2sbd!4v1701061892822!5m2!1sen!2sbd"
              height="300"
              width="100%"
              style={{ border: '0', borderRadius: '8px' }}
              loading="lazy"
              title="Building Location"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'left' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              Our Residential Building Location
            </Typography>
            <hr />
            <Typography variant="body1" paragraph>
              <strong>Flat in Gulshan, Dhaka</strong>
              <br />
              Address: Gulshan-2, D-Block, Dhaka
              <br />
              City: Dhaka
              <br />
              Area: Gulshan
              <br />
              Country: Bangladesh
            </Typography>

            <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 2, mb: 2 }}>
              Our Most Rented Building Location
            </Typography>
            <hr />
            <Typography variant="body1" paragraph>
              <strong>Flat in Banani, Dhaka</strong>
              <br />
              Address: Road-2, Block-A, Banani, Dhaka
              <br />
              City: Dhaka
              <br />
              Area: Banani
              <br />
              Country: Bangladesh
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Map;
