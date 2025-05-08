import { Box, Paper, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useAppSelector } from "../../../../hooks";
import { SUPABASE_PRODUCT_URL_PART } from "../../../../constants";
import { Link } from "react-router";

interface SearchMenuProps {
  search: string;
  setSearchInFocus: React.Dispatch<React.SetStateAction<boolean>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchMenu: React.FC<SearchMenuProps> = ({
  search,
  setSearchInFocus,
  setSearch,
}) => {
  const products = useAppSelector((state) => state.products.products);
  const isLoading = useAppSelector((state) => state.products.isLoading);
  const filteredProducts = products.filter((product) => {
    const lowerSearch = search.toLowerCase();
    return (
      product.title.toLowerCase().includes(lowerSearch) ||
      product.aroma.toLowerCase().includes(lowerSearch)
    );
  });
  const wrapperRef = useRef(null);
  return (
    <Paper
      ref={wrapperRef}
      sx={{
        position: "absolute",
        top: "60px",
        width: "180%",
        maxHeight: "60vh",
        zIndex: 20,
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        border: "1px solid gray",
        padding: "0.5rem",
        backgroundColor: "#ffffff",
      }}
    >
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Box key={product._id} sx={{ display: "flex", gap: "1rem" }}>
            <Link
              style={{ height: "78px", width: "70px" }}
              to={`product/${product._id}`}
            >
              <Box
                onClick={() => {
                  setSearchInFocus(false);
                  setSearch("");
                }}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
                component={"img"}
                alt={`${product.title}`}
                src={`${SUPABASE_PRODUCT_URL_PART}${product.image[0]}`}
              />
            </Link>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography sx={{ fontWeight: 500 }}>{product.title}</Typography>
              <Typography sx={{ fontWeight: 300 }}>{product.aroma}</Typography>
            </Box>
          </Box>
        ))
      ) : (
        <Typography>Нічого не знайдено!</Typography>
      )}
    </Paper>
  );
};

export default SearchMenu;
