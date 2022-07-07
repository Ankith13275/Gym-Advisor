import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';


const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    <Typography color="#245474" sx = {{fontFamily: 'Acme',}}fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} color="#245474" sx={{ fontFamily: 'Acme', fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Stack>
      <a href="#exercises" style={{ fontFamily: 'Acme', marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#245474', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#245474" sx={{ fontFamily: 'Acme', opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    
  </Box>
);

export default HeroBanner;
