import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import SchoolIcon from '@mui/icons-material/School';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useSelector } from 'react-redux'; 
import { Grid } from '@mui/material';
import Navbar from './Navbar';

const ProfilePage = () => {
  const user =useSelector(state => state.user.value)
    console.log(user);
  return (
    <div>
      <Navbar/>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#ffffff00' }}>
      <Box sx={{ width: '500px', backgroundColor: '#fff', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <Avatar sx={{ width: 150, height: 150, mb: 2 }} />
        <Typography variant="h4" component="div" gutterBottom style={{ color: 'green' }}>
          Username :NITHIN R
        </Typography> 
        <Typography variant="subtitle1" gutterBottom style={{ color: 'green', display: 'flex', alignItems: 'center' }}>
          <EmailIcon sx={{ marginRight: 2 }} />{user.name}
         </Typography>
        <Typography variant="subtitle1" gutterBottom style={{ color: 'green', display: 'flex', alignItems: 'center' }}>
          <CakeIcon sx={{ marginRight: 2 }} />
          Date of Birth : 04/11/2003
        </Typography>
        <Typography variant="h5" component="div" mt={4} mb={2} style={{ color: 'green', display: 'flex', alignItems: 'center' }}>
          <SchoolIcon sx={{ marginRight: 2 }} />
          Educational Qualification : MTech Cse && MBA
        </Typography>
        <Typography variant="body1" gutterBottom style={{ color: 'green' }}>
          Skills : Coder
        </Typography>
        <Box sx={{ display: 'flex', mt: 4 }}>
          <LinkedInIcon sx={{ marginRight: 2 }} />
          <InstagramIcon sx={{ marginRight: 2 }} />
          <TwitterIcon sx={{ marginRight: 2 }} />
          <FacebookIcon />
        </Box>
      </Box>
    </Box>
    </div>
  );
};

export default ProfilePage;
