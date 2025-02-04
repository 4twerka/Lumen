import React from 'react'
import { useAppSelector } from '../hooks'
import { jwtDecode } from "jwt-decode";
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';

const HomePage: React.FC = () => {
    const token = useAppSelector((state) => state.user.token);
    const decoded = jwtDecode(token);
    console.log('decoded',decoded);
    
  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}

export default HomePage
