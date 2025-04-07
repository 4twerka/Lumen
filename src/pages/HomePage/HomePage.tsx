import React, { useEffect } from "react";
import Hero from "./sections/Hero/Hero";
import OurAdvantages from "./sections/OurAdvantages/OurAdvantages";
import Art from "./sections/Art/Art";
import Collection from "./sections/Collection/Collection";
import Reviews from "./sections/Reviews/Reviews";
import SpecialGift from "./sections/SpecailGift/SpecailGift";
import AboutUs from "./sections/AboutUs/AboutUs";
import TopSales from "./sections/TopSales/TopSales";
import Questions from "./sections/Questions/Questions";
import Inspiration from "./sections/Inspiration/Inspiration";
import Join from "./sections/Join/Join";
import { useLocation } from "react-router";
// import { useAppDispatch, useAppSelector } from '../../hooks'
// import { fetchProducts } from '../../store/slices/productSlice'

const HomePage: React.FC = () => {
  // const products = useAppSelector((state) => state.products.products);
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(fetchProducts())
  // },[dispatch])
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
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
  );
};

export default HomePage;
