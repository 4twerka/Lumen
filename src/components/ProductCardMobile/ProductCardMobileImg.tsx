import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router";
import { SUPABASE_PRODUCT_URL_PART } from "../../constants";
import { generateSubtitle } from "../../utils/generateSubtitle";

interface ProductCardMobileImgProps {
  image: string[];
  title: string;
  _id: string;
  type: string;
  material: string;
}

const ProductCardMobileImg: React.FC<ProductCardMobileImgProps> = ({
  image,
  title,
  type,
  material,
  _id
}) => {
  const subTitle = generateSubtitle(type,material)
  return (
    <Link
      to={`/product/${_id}`}
      style={{
        background: `linear-gradient(0deg, rgba(13, 17, 32, 0.64) 8%, rgba(25, 33, 61, 0.00) 54.5%), 
        url('${SUPABASE_PRODUCT_URL_PART}${image[0]}') lightgray 50% / cover no-repeat`,
        width: "100%",
        height: "190px",
        borderRadius: "0.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0.5rem",
        textDecoration: 'none'
      }}
    >
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "1rem",
          lineHeight: "20px",
          color: "#FDF5ED",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "0.875rem",
          fontWeight: 400,
          textAlign: "center",
          lineHeight: "20px",
          minHeight: "40px",
          color: "#FDF5ED",
        }}
      >
        {/* {short_describe} */}
        {subTitle}
      </Typography>
    </Link>
  );
};

export default ProductCardMobileImg;
