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
import { useLocation, useNavigate } from "react-router";
import { useAppSelector } from "../../hooks";
// import { useAppDispatch, useAppSelector } from '../../hooks'
// import { fetchProducts } from '../../store/slices/productSlice'

const HomePage: React.FC = () => {
  const userRole = useAppSelector((state) => state.user?.user?.role);
  console.log("userRole", userRole);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    if (userRole === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  }, [navigate, userRole]);

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
