import {
  Box,
  Button,
  Grid2,
  Pagination,
  PaginationItem,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchFilteredPriceProducts, fetchProducts } from "../../store/slices/productSlice";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Product } from "../../types";
import CatalogFilters from "./components/CatalogFilters";
import { FiltersState } from "../../types";
import { getPriceRange } from "../../utils/filter";
import FilterSelect from "./components/FilterSelect";
import { useSearchParams } from "react-router";

const buttonStyles = {
  fontWeight: 600,
  fontSize: "1rem",
  minWidth: "150px",
  height: "48px",
};

const CatalogPage: React.FC = () => {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();
  const [filtersState, setFiltersState] = useState<FiltersState>({
    types: [],
    price: [],
    size: [],
    aroma: [],
    assignment: [],
    color: [],
    material: [],
    form: [],
    features: [],
    giftWrapping: false,
  });

  const [typeProducts, setTypeProducts] = useState<
    "allProducts" | "filteredProducts"
  >("allProducts");
  const [filter, setFilter] = useState<'asc' | 'desc' | 'rating' | 'new'>('asc');
  const [serachParams, setSerachParams] = useSearchParams();
  const priceRange = getPriceRange(filtersState.price);
  console.log("products", products);

  const filteredProducts: Product[] = products.filter((product) => {
    const filteredPriceProducts =
      filtersState.price.length === 0 ||
      priceRange.some(
        (range) => product.price >= range.min && product.price <= range.max
      );
    const filterAromaProducts =
      filtersState.aroma.length === 0 ||
      filtersState.aroma.some((aromaItem) =>
        product.describe?.aroma?.includes(aromaItem.toLowerCase())
      );
    return filteredPriceProducts && filterAromaProducts;
  });
  console.log("filteredProducts", filteredProducts);

  useEffect(() => {
    if (filter) {
      setSerachParams({sort: filter});
      if (filter === 'asc' || filter === 'desc') {
        dispatch(fetchFilteredPriceProducts(filter))
      }
    } else {
      dispatch(fetchProducts());
    }
  }, [dispatch, filter, setSerachParams]);

  const handleAllProducts = () => {
    setTypeProducts("allProducts");
  };
  const handleFilterProducts = () => {
    setTypeProducts("filteredProducts");
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        padding: "48px 80px",
        gap: "1.25rem",
      }}
    >
      <Box sx={{ width: "25%" }}>
        <CatalogFilters
          filtersState={filtersState}
          setFiltersState={setFiltersState}
        />
      </Box>
      <Box sx={{ width: "75%" }}>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Box sx={{ display: "flex", gap: "0.3rem" }}>
          <Button
            onClick={handleAllProducts}
            variant={typeProducts === "allProducts" ? "contained" : "outlined"}
            color="secondary"
            sx={buttonStyles}
          >
            Всі товари
          </Button>
          <Button
            color="secondary"
            onClick={handleFilterProducts}
            variant={
              typeProducts === "filteredProducts" ? "contained" : "outlined"
            }
            sx={buttonStyles}
          >
            Фільтри
          </Button>
        </Box>
        <FilterSelect filter={filter} setFilter={setFilter} />
        </Box>
        <Typography pt={"1.25rem"}>
          {typeProducts === "allProducts"
            ? products.length
            : filteredProducts.length}{" "}
          знайдено товарів
        </Typography>
        <Grid2 pt={"1rem"} pb={"2.875rem"} container spacing={"1.25rem"}>
          {(typeProducts === "allProducts" ? products : filteredProducts)?.map(
            (product) => (
              <Grid2 key={product._id} size={{ xs: 12, sm: 6, md: 4 }}>
                <ProductCard {...product} />
              </Grid2>
            )
          )}
        </Grid2>
        <Box sx={{ textAlign: "center" }}>
          <Button sx={buttonStyles} color="secondary" variant="outlined">
            Показати ще
          </Button>
        </Box>
        <Pagination
          sx={{
            "& .MuiPagination-ul": { justifyContent: "center" },
            marginTop: "2.875rem",
          }}
          count={Math.ceil(products.length / 9)} // Загальна кількість сторінок
          page={4} // Поточна сторінка
          // onChange={onChange} // Функція для зміни сторінки
          variant="outlined"
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              {...item}
              sx={{
                "& .MuiSvgIcon-root": { width: "1.5rem", height: "1.5rem" },
                "&.Mui-selected": { backgroundColor: "transparent" },
                fontSize: "1.125rem",
                width: "2.5rem",
                height: "2.5rem",
                borderColor: item.page === 4 ? "brown" : "transparent",
                borderRadius: "8px",
              }}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default CatalogPage;
