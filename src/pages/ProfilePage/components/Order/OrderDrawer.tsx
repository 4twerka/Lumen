import { Box, Button, Drawer, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router";
import { SUPABASE_PRODUCT_URL_PART } from "../../../../constants";
import CloseIcon from "../../../../assets/Cancel.svg?react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteOrderById } from "../../../../store/slices/orderSlice";

interface OrderDrawerProps {
  showDrawer: boolean;
  handleCloseDrawer: () => void;
  productsInfo: {
    productId: string;
    image: string;
    price: number;
    title: string;
    quantity: number;
  }[];
  amountOrder: number;
  id: string;
}

const OrderDrawer: React.FC<OrderDrawerProps> = ({
  showDrawer,
  handleCloseDrawer,
  productsInfo,
  amountOrder,
  id,
}) => {
  const userRole = useAppSelector((state) => state.user.user?.role);

  const dispatch = useAppDispatch();
  const handleDeleteOrder = () => {
    dispatch(deleteOrderById(id));
  };
  return (
    <Drawer
      sx={{
        "& .MuiPaper-root": {
          width: { xs: "100%", md: "30%" },
        },
      }}
      anchor="right"
      open={showDrawer}
      onClose={handleCloseDrawer}
    >
      <Box sx={{ padding: "32px 16px 48px 16px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #A3A3A3",
            paddingBottom: "1rem",
          }}
        >
          <Typography
            sx={{
              color: "#111111",
              fontSize: "1.5rem",
              fontWeight: 600,
              textTransform: "uppercase",
              lineHeight: "2.25rem",
            }}
          >
            ваше замовлення
          </Typography>
          <CloseIcon
            style={{ cursor: "pointer" }}
            onClick={handleCloseDrawer}
          />
        </Box>
        <Box
          sx={{
            paddingTop: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {productsInfo.map((product) => (
            <Box
              key={product.productId}
              sx={{
                paddingBottom: "24px",
                display: "flex",
                gap: "1rem",
                borderBottom: "1px solid #A3A3A3",
              }}
            >
              <Link
                style={{
                  height: "78px",
                  width: "70px",
                  display: "inline-block",
                }}
                to={`/product/${product.productId}`}
              >
                <img
                  alt={`${product.title}`}
                  src={`${SUPABASE_PRODUCT_URL_PART}${product.image}`}
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "4px",
                    objectFit: "cover",
                  }}
                />
              </Link>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "1rem",
                  flexGrow: 1,
                }}
              >
                <Typography
                  sx={{ color: "#111111", fontSize: "1rem", fontWeight: 500 }}
                >
                  {product.title}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      fontWeight: 400,
                      color: "#A3A3A3",
                      alignSelf: "end",
                    }}
                  >
                    {product.quantity} шт
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "1rem",
                      color: "#111111",
                    }}
                  >
                    {(product.quantity * product.price).toFixed(2)} UAH
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "1rem",
          }}
        >
          <Typography
            sx={{ fontWeight: 500, fontSize: "1rem", color: "#2E2E2E" }}
          >
            Загальна сума
          </Typography>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: 600,
              lineHeight: "2.25rem",
              color: "#2E2E2E",
            }}
          >
            {amountOrder} UAH
          </Typography>
        </Box>
        {userRole === "admin" && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pt: "1rem",
              gap: "1rem",
            }}
          >
            <Button
              onClick={handleDeleteOrder}
              variant="outlined"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default OrderDrawer;
