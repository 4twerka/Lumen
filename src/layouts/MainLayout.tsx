import React, { useEffect } from 'react';
import Header from '../components/header/Header.tsx';
import { Footer } from '../components/footer/Footer';
import { Outlet } from 'react-router';
import { Box } from '@mui/material';
import { useAppDispatch } from '../hooks.ts';
import { fetchProducts } from '../store/slices/productSlice.ts';

const MainLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  },[dispatch])
  return (
    <>
      <Header />
      <Box 
        // sx={{maxWidth: '1280px', margin: '0 auto'}} 
        component={'main'}
        >
          <Outlet />
        </Box>
      <Footer />
    </>
  );
};

export default MainLayout;