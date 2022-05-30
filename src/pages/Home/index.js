import React from 'react';

import Box from '@mui/material/Box';
import Header from '../../components/Header';
import ListHero from '../../components/ListHero';

export default function Home() {
  return (
    <>
      <Header />
      <Box
        sx={{
          padding: 4,
          flexGrow: 1,
          height: '100vh',
        }}
      >
        <ListHero />
      </Box>
    </>
  );
}
