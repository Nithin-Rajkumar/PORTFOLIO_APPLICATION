import React from 'react';
import { Box, Typography, Button, Container, makeStyles } from '@mui/material';
import "./HomePage.css";
import Navbar from './Navbar';

// const useStyles = makeStyles({
//   background: {
//     backgroundImage: 'url("/path/to/image.jpg")',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   },
// });
const HomePage = () => {
   return (
    <div><Navbar/>
    <div className='g'>
    <Box sx={{  minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="sm">
        <Box textAlign="center" mb={4}>
          <Typography variant="h1" color="#ffebee"component="h1" sx={{ fontFamily: 'Grand Hotel, cursive', letterSpacing: '0.05em' }}>
            MakeFolio
          </Typography>
          <Typography variant="h4" color="#fafafa"sx={{ fontFamily: 'Roboto', marginTop: 2 }}>
            Build your stunning portfolio easily.
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Button variant="contained" size="large" sx={{ fontFamily: 'Roboto', fontWeight: 'bold', letterSpacing: '0.05em' }}>
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
    </div>
    </div>
  );
};

export default HomePage;
