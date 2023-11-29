import  { useEffect, useState } from "react";
import { Avatar, Box, Container, Grid, Paper, Typography } from "@mui/material";
import {  Group, LocalHotel } from "@mui/icons-material";
import useAuth from "../../../Components/hooks/useAuth";
import useAxiosRandom from "../../../Components/hooks/useAxiosRandom";
import useAgreement from "../../../Components/hooks/useAgreement";
import useUser from "../../../Components/hooks/useUser";

const AdminProfile = () => {
  const { user } = useAuth();
  const axiosRandom = useAxiosRandom();
  const [agreement] = useAgreement();
  const { User } = useUser();
  const [roomData, setRoomData] = useState();
// get apartment data in api
  useEffect(() => {
    axiosRandom.get('/apartment')
      .then(res => {
        setRoomData(res.data.length);
      });
  }, [axiosRandom]);

  const result = agreement.filter((item) => item?.request === 'booked');
  const bookedRooms = result.length;
  const totalRooms = roomData;
  const availableRooms = totalRooms - bookedRooms;
  const availablePercentage = ((availableRooms / totalRooms) * 100).toFixed(2);
  const bookedPercentage = (bookedRooms / totalRooms) * 100;

// load user guest data
  const userData = User?.filter((item) => item?.role === 'guest');

//   load member data and show data in admin profile
  const memberData = User?.filter((item) => item?.role === 'member');

  return (
    <Container>
      <Box sx={{ mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center' }}>
          <Avatar sx={{ width: { xs: '100px', md: '150px' }, height: { xs: '100px', md: '150px' }, mr: { xs: 0, md: 4 } }} alt="Admin Avatar" src={user?.photoURL} />
          <div>
            <Typography variant="h5" mb={2} fontWeight="bold">{user?.displayName}</Typography>
            <Typography variant="h6" color="textSecondary">{user?.email}</Typography>
          </div>
        </Paper>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" mb={2} color="success" fontWeight="bold">
              <LocalHotel fontSize="inherit" /> Total Rooms
            </Typography>
            <Typography variant="body1">{roomData}</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" mb={2} color="success" fontWeight="bold">
              <Group fontSize="inherit" /> Total Users
            </Typography>
            <Typography variant="body1">{userData.length}</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" mb={2} color="success" fontWeight="bold">
              <Group fontSize="inherit" /> Total Members
            </Typography>
            <Typography variant="body1">{memberData?.length}</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" mb={2} color="success" fontWeight="bold">
              <LocalHotel fontSize="inherit" /> Available Rooms
            </Typography>
            <div className="radial-progress" style={{ "--value": availablePercentage }} role="progressbar">{availablePercentage} %</div>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" mb={2} color="success" fontWeight="bold">
              <LocalHotel fontSize="inherit" /> Booked Rooms
            </Typography>
            <div className="radial-progress" style={{ "--value": bookedPercentage }} role="progressbar">{bookedPercentage} %</div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminProfile;
