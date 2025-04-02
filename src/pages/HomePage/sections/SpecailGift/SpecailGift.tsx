import React from "react";
import "../Collection/Collection.css";
import "./SpecialGift.css";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import HomeDesc from "../../components/HomeDesc/HomeDesc";
import CollectionSwiper from "../Collection/CollectionSwiper";
import { collectionProducts } from "../../collectionProducts";

const SpecialGift: React.FC = () => {
  return (
    <section className="collectinWrapper collectionSpecialGift container decor">
      <div className="collectionCarusel">
        <CollectionSwiper name="special-gift" position="right" products={collectionProducts} />
      </div>
      <div className="collectionInfo">
        <div>
          <HomeTitle>Шукаєте особливий подарунок?</HomeTitle>
          <HomeDesc className="collection-desc">Пропонуємо свічки з гарними подарунковими упаковками, які по-справжньому здивують і залишать дуже гарне враження</HomeDesc>
        </div>
        <HomeDesc className="collection-desc">
          Нехай ваш дім наповниться магією зимових свят разом з нашою новою
          колекцією ароматів
        </HomeDesc>
      </div>
    </section>
  );
};

export default SpecialGift;
