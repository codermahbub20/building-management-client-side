
import { Container, Grid, Paper, Typography, Avatar } from '@mui/material';
import useAgreement from '../../../Components/hooks/useAgreement';
import useAuth from '../../../Components/hooks/useAuth';

const UserHome = () => {
  const { user } = useAuth();
  const [agreement] = useAgreement();

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center" spacing={4} className="mb-8">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="p-4 rounded-xl bg-red-200">
            <Avatar src={user?.photoURL} alt="User Avatar" sx={{ width: '100px', height: '100px', mb: 2 }} />
            <Typography variant="h5" component="div" className="font-medium font-lora">
              User Name: {user?.displayName}
            </Typography>
            <Typography variant="h5" component="div" className="font-medium font-lora">
              User Email: {user?.email}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Typography variant="h2" align="center" className="text-5xl font-rancho mt-5 mb-4">
        My All Rented Apartment Info
      </Typography>

      <Grid container spacing={4} className="mb-8">
        {agreement
          .filter((item) => item.status === 'pending' && user?.email === item?.userEmail)
          .map((agreeCard) => (
            <Grid item key={agreeCard._id} xs={12} md={6}>
              <Paper elevation={3} className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <Typography variant="h5" className="mb-2 text-success font-bold tracking-tight">
                  Rented Apartment info
                </Typography>
                <Typography variant="body1" className="text-xl text-gray-700">
                  Block Name: {agreeCard?.block_name}
                </Typography>
                <Typography variant="body1" className="text-xl text-gray-700">
                  Floor No: {agreeCard?.floor_no}
                </Typography>
                <Typography variant="body1" className="text-xl text-gray-700">
                  Room No: {agreeCard?.room_no}
                </Typography>
                <Typography variant="body1" className="text-xl text-gray-700">
                  Apartment No: {agreeCard?.apartment_no}
                </Typography>
                <Typography variant="body1" className="text-xl text-gray-700">
                  Agreement Date: {agreeCard?.agreement_date}
                </Typography>
                <Typography variant="body1" className="text-xl text-gray-700">
                  Agreement Status: {agreeCard?.status}
                </Typography>
                <Typography variant="body1" className="text-xl text-gray-700">
                  Rent Per Month: {agreeCard?.rent}
                </Typography>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default UserHome;
