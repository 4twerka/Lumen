import React from "react";
import "./Collection.css";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import HomeDesc from "../../components/HomeDesc/HomeDesc";
import CollectionSwiper from "./CollectionSwiper";
import { collectionProducts } from "../../collectionProducts";

const Collection: React.FC = () => {
  return (
    <section className="collectinWrapper container decorMob">
      <div className="collectionCarusel">
        <CollectionSwiper name="sezon-collection" products={collectionProducts} />
      </div>
      <div className="collectionInfo">
        <div>
          <HomeTitle>Сезонна колекція</HomeTitle>
          <HomeDesc className="collection-desc"> Ідеальна атмосфера для тихих зимових вечорів</HomeDesc>
        </div>
        <HomeDesc>
          Нехай ваш дім наповниться магією зимових свят разом з нашою новою
          колекцією ароматів
        </HomeDesc>
      </div>
    </section>
  );
};

export default Collection;
