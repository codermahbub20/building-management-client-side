import  { useEffect, useState } from 'react';
import { Card, CardContent, Container, Typography } from '@mui/material';
import Lottie from 'lottie-react';
import announce from '../../assets/announce.json';
import useAxiosRandom from '../../Components/hooks/useAxiosRandom';

const Announcements = () => {
  const [announcement, setAnnouncement] = useState([]);
  const axiosRandom = useAxiosRandom();

  useEffect(() => {
    axiosRandom.get('/announce').then((res) => {
      setAnnouncement(res.data);
    });
  }, [axiosRandom]);

  return (
    <Container>
      <Typography variant="h4" align="center" className="font-medium font-lora mt-8 mb-4">
        Important Announcements from Users and Members
      </Typography>

      <div className="flex flex-col lg:flex-row-reverse gap-4">
        <div className="flex-1">
          {announcement.map((item) => (
            <Card key={item._id} elevation={3} className="mb-4">
              <CardContent>
                <Typography variant="h5" component="div" className="text-center mb-3">
                  Announcement Here
                </Typography>
                <Typography variant="h5" component="div" className="font-medium mb-3">
                  Title: {item?.title}
                </Typography>
                <Typography variant="body1" component="div" className="font-lora">
                  <strong>Description:</strong> {item?.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <Lottie animationData={announce}></Lottie>
        </div>
      </div>
    </Container>
  );
};

export default Announcements;
