import React from "react";
import FormButtonSubmit from "../../../../components/Forms/FormButtonSubmit";
import { Button } from "@mui/material";
import CartIcon from "../../../../assets/Shopping.svg?react";
import CartIconOutlined from "../../../../assets/ShoppingOutlined.svg?react";
import { useAppDispatch } from "../../../../hooks";
import { addCart } from "../../../../store/slices/productSlice";

interface ProductInfoButtonProps {
  isInCart: boolean;
  // onClick?: () => void;
  id: string;
  stock: number;
}

const ProductInfoButton: React.FC<ProductInfoButtonProps> = ({
  isInCart,
  id,
  stock
}) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(addCart(id))
  }
  return (
    <>
      {isInCart ? (
        <Button
          // onClick={onClick}
          variant="outlined"
          sx={{
            width: { xs: "100%", md: "200px" },
            height: "50px",
            padding: "8px 45px",
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 600,
            lineHeight: "20px",
            borderRadius: "8px",
            border: "1px solid #73270D",
          }}
        >
          <CartIcon style={{ marginRight: "0.5rem" }} />В кошику
        </Button>
      ) : (
        <FormButtonSubmit
          disabled={stock < 0}
          onClick={handleAddToCart}
          sx={{
            width: { xs: "100%", md: "200px" },
            height: "50px",
            borderRadius: "8px",
            textTransform: "none",
          }}
        >
          <CartIconOutlined style={{ marginRight: "0.5rem" }} />В кошик
        </FormButtonSubmit>
      )}
    </>
  );
};

export default ProductInfoButton;
