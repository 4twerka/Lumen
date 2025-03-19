import React from 'react';
import Header from '../components/header/Header.tsx';
import { Footer } from '../components/footer/Footer';
import { Outlet } from 'react-router';
import { Box } from '@mui/material';

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Box sx={{maxWidth: '1280px', margin: '0 auto'}} component={'main'}><Outlet /></Box>
      <Footer />
    </>
  );
};

export default MainLayout;