import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import ThreeDots from "../../../../assets/ThreeDotsHorizontal.svg?react";
import { SUPABASE_PRODUCT_URL_PART } from "../../../../constants";
import ProductMenu from "./ProductMenu";
import { Product } from "../../../../types";

type AdminProductProps = Pick<Product, "_id" | "title" | "price" | "stock" | "image">;

const AdminProduct:React.FC<AdminProductProps> = ({ image, title, stock, price, _id }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        backgroundColor: "#F1F1F4",
        borderRadius: "1rem",
        padding: "1rem",
      }}
    >
      <Box
        sx={{ display: "flex", gap: "1rem", justifyContent: "space-between" }}
      >
        <Box
          sx={{ width: "100px", height: "100px" }}
          component={"img"}
          src={`${SUPABASE_PRODUCT_URL_PART}${image[0]}`}
          alt={title}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.875rem",
                fontWeight: 400,
                lineHeight: "1.5rem",
              }}
            >
              {title}
            </Typography>
            <IconButton
              id="product-menu"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <ThreeDots />
            </IconButton>
            <ProductMenu
              anchorEl={anchorEl}
              handleClose={handleClose}
              open={open}
              title={title}
              id={_id}
            />
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
          >
            <Typography
              sx={{
                fontSize: "0.625rem",
                fontWeight: 400,
                lineHeight: "14px",
                color: "#A3A3A3",
              }}
            >
              Код товару:
            </Typography>
            <Typography
              sx={{
                color: stock > 0 ? "#0E402D" : "red",
                fontSize: "0.625rem",
                lineHeight: "0.825rem",
              }}
            >
              {stock > 0 ? "В наявності" : "Немає в наявності"}
            </Typography>
            <Typography
              sx={{
                color: "#111111",
                fontSize: "1rem",
                lineHeight: "1.5rem",
                fontWeight: "400",
              }}
            >
              {price} ₴
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "0.825rem",
            fontWeight: 400,
            lineHeight: "21px",
            color: "#A3A3A3",
          }}
        >
          За останні 30 днів:
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.875rem",
              fontWeight: 400,
              lineHeight: "21px",
              color: "#111111",
            }}
          >
            Продано
          </Typography>
          <Typography
            sx={{
              fontSize: "0.875rem",
              fontWeight: 400,
              lineHeight: "21px",
              color: "#111111",
            }}
          >
            000
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.875rem",
              fontWeight: 400,
              lineHeight: "21px",
              color: "#111111",
            }}
          >
            Залишок
          </Typography>
          <Box
            sx={{
              width: "100px",
              height: "3px",
              borderRadius: "4px",
              backgroundColor: "#2E2E2E",
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: "60px",
                height: "3px",
                borderRadius: "4px",
                backgroundColor: "#4CAF50",
                zIndex: 2,
                position: "absolute",
                left: 0,
                top: 0,
              }}
            ></Box>
          </Box>
          <Typography
            sx={{
              fontSize: "0.875rem",
              fontWeight: 400,
              lineHeight: "21px",
              color: "#111111",
            }}
          >
            000
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminProduct;
