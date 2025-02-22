import React from "react";
import ProductCardTitle from "./ProductCardTitle";
import ProductCardDesc from "./ProductCardDesc";
import ProductCardPrice from "./ProductCardPrice";
import ProductCardSale from "./ProductCardSale";
import ProductCardWrapper from "./ProductCardWrapper";
import { Product } from "../../types";

// interface ProductCardProps {
//     image: string;
//     describe: {
//         aroma: string,
//         burning_time: string,
//         short_describe: string
//     };
//     title: string;
//     price: string;
// }


const ProductCard: React.FC<Product> = ({title, short_describe, price, image}) => {
  return (
    <ProductCardWrapper image={image}>
      <ProductCardSale>30</ProductCardSale>
      <ProductCardTitle>{title}</ProductCardTitle>
      <ProductCardDesc>
        {short_describe}
      </ProductCardDesc>
      <ProductCardPrice>{price}</ProductCardPrice>
    </ProductCardWrapper>
  );
};

export default ProductCard;
