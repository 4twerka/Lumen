import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addCart, deleteProduct } from "../../store/slices/productSlice";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router";

interface ProductCardMobileInfoProps {
  price: number;
  id: string;
  stock: number;
  title: string;
}

const ProductCardMobileInfo: React.FC<ProductCardMobileInfoProps> = ({
  price,
  id,
  stock,
  title,
}) => {
  // const discount = 30;
  // const discountPrice = price - price * (discount / 100);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const carts = useAppSelector((state) => state.products.carts);
  const isInCart = carts.some((item) => item.productId === id);
  const user = useAppSelector((state) => state.user.user);
  const userRole = user?.role;

  const addToCart = () => {
    if (stock > 0) {
      dispatch(addCart(id));
    }
  };
  const handleDeleteProduct = () => {
    dispatch(deleteProduct(id));
  };
  const handleEditProduct = () => {
    navigate(`/update-product/${id}`);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <Typography
          sx={{
            color: "#A3A3A3",
            textDecoration: "line-through",
            fontSize: "0.625rem",
            fontWeight: 400,
          }}
        >
          {price.toFixed(2)}₴
        </Typography> */}
        <Typography
          sx={{ color: "#111111", fontSize: "1rem", fontWeight: 500 }}
        >
          {price}₴
        </Typography>
      </Box>
      <Box>
        {userRole === "admin" && (
          <>
            <IconButton onClick={handleEditProduct}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleOpenDialog}>
              <DeleteIcon />
            </IconButton>
            <Dialog
              open={openDialog}
              onClose={handleCloseDialog}
              aria-labelledby="alert-dialog-title"
            >
              <DialogTitle sx={{ fontWeight: 400 }} id="alert-dialog-title">
                Ви точно хочете видалити товар{" "}
                <Box
                  component={"span"}
                  sx={{ fontWeight: 500, fontSize: "1.5rem" }}
                >
                  {title}
                </Box>
                ?
              </DialogTitle>
              <DialogActions>
                <Button
                  onClick={() => {
                    handleCloseDialog();
                    handleDeleteProduct();
                  }}
                >
                  Так
                </Button>
                <Button onClick={handleCloseDialog} autoFocus>
                  Ні
                </Button>
              </DialogActions>
            </Dialog>
          </>
        )}

        <IconButton
          onClick={addToCart}
          sx={{
            backgroundColor: isInCart ? "#73270D" : "inherit",
            color: isInCart ? "#FDF5ED" : "#73270D",
            "&:hover": {
              backgroundColor: isInCart ? "#5a1f0a" : "#f5f5f5",
            },
          }}
        >
          <ShoppingCartOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductCardMobileInfo;
