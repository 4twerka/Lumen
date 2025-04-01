import React, { useEffect } from 'react'
import Hero from './sections/Hero/Hero'
import OurAdvantages from './sections/OurAdvantages/OurAdvantages'
import Art from './sections/Art/Art'
import Collection from './sections/Collection/Collection'
import Reviews from './sections/Reviews/Reviews'
import SpecialGift from './sections/SpecailGift/SpecailGift'
import AboutUs from './sections/AboutUs/AboutUs'
import TopSales from './sections/TopSales/TopSales'
import Questions from './sections/Questions/Questions'
import Inspiration from './sections/Inspiration/Inspiration'
import Join from './sections/Join/Join'
import styles from './HomePage.module.css';
// import { useAppDispatch, useAppSelector } from '../../hooks'
// import { fetchProducts } from '../../store/slices/productSlice'

const HomePage = () => {
  // const products = useAppSelector((state) => state.products.products);
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(fetchProducts())
  // },[dispatch])
  return (
    <>
      <Hero />
      <OurAdvantages />
      <Art />
      <Collection />
      <Reviews />
      <SpecialGift />
      <AboutUs />
      <TopSales />
      <Questions />
      <Inspiration />
      <Join />
    </>
  )
}

export default HomePage
