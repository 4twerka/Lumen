import {
  Box,
  Button,
  Grid2,
  Pagination,
  PaginationItem,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  fetchFilteredDateProducts,
  fetchFilteredPriceProducts,
  fetchProducts,
} from "../../store/slices/productSlice";
import ProductCard from "../../components/ProductCard/ProductCard";
import CatalogFilters from "./components/CatalogFilters";
import { FiltersState, Product } from "../../types";
import { Link, useSearchParams } from "react-router";
import Loader from "../../components/Loader/Loader";
import { getFilteredProducts } from "../../utils/filteredPoducts";
import { getPaginatedProducts } from "../../utils/getPaginatedArray";
import MobFilterButtons from "./components/MobFilterButtons";
import FilterButtons from "./components/FilterButtons";

const buttonStyles = {
  fontWeight: 600,
  fontSize: "1rem",
  minWidth: "150px",
  height: "48px",
};

const CatalogPage: React.FC = () => {
  const products = useAppSelector((state) => state.products.products);
  const isLoading = useAppSelector((state) => state.products.isLoading);
  const dispatch = useAppDispatch();
  const [isMobileFilters, setIsMobileFilters] = useState(false)
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
  const [filter, setFilter] = useState<"asc" | "desc" | "rating" | "new">(
    "asc"
  );
  const [allProductPage, setAllProductPage] = useState(1);
  const [filteredProductPage, setFilteredProductPage] = useState(1);
  const [, setSearchParams] = useSearchParams();
  const [displayProducts, setDisplayProducts] = useState<Product[][]>([]);
  const filteredProducts = useMemo(
    () => getFilteredProducts(products, filtersState),
    [products, filtersState]
  );
  const pagintedProducts = useMemo(
    () =>
      getPaginatedProducts(
        typeProducts === "allProducts" ? products : filteredProducts,
        9
      ),
    [products, filteredProducts, typeProducts]
  );

  const handleChangePage = (_: unknown, newPage: number) => {
    if (typeProducts === "allProducts") {
      setAllProductPage(newPage);
    } else {
      setFilteredProductPage(newPage);
    }
  };

  const currentPage =
    typeProducts === "allProducts" ? allProductPage : filteredProductPage;

  const handleAddProducts = () => {
    if (currentPage < displayProducts.length) {
      const updatedProducts = [...displayProducts];
      updatedProducts[currentPage - 1] = [
        ...updatedProducts[currentPage - 1],
        ...updatedProducts[currentPage],
      ];
      updatedProducts.splice(currentPage, 1);
      setDisplayProducts(updatedProducts);
    }
  };

  useEffect(() => {
    if (filter) {
      setSearchParams({ sort: filter });
      if (filter === "asc" || filter === "desc") {
        dispatch(fetchFilteredPriceProducts(filter));
      }
      if (filter === "new") {
        dispatch(fetchFilteredDateProducts("desc"));
      }
    } else {
      dispatch(fetchProducts());
    }
  }, [dispatch, filter, setSearchParams]);

  useEffect(() => {
    setDisplayProducts(pagintedProducts);
  }, [pagintedProducts]);

  const handleAllProducts = () => {
    setTypeProducts("allProducts");
  };
  const handleFilterProducts = () => {
    setTypeProducts("filteredProducts");
  };

  const isFiltersEmpty = Object.values(filtersState).every((value) =>
    Array.isArray(value) ? value.length === 0 : !value
  );
  console.log(isMobileFilters);
  
  return (
    <Box
      sx={{
        display: { xs: "block", md: "flex" },
        width: "100%",
        padding: { xs: "16px 16px", md: "48px 80px" },
        gap: "1.25rem",
        backgroundColor: "#FCFCFC",
      }}
    >
      <Box sx={{ width: "25%", display: { xs: "none", md: "block" } }}>
        <CatalogFilters
          filtersState={filtersState}
          setFiltersState={setFiltersState}
        />
      </Box>
      <Box sx={{ width: { xs: "100%", md: "75%" } }}>
        <FilterButtons
          filter={filter}
          handleAllProducts={handleAllProducts}
          handleFilterProducts={handleFilterProducts}
          setFilter={setFilter}
          typeProducts={typeProducts}
        />
        <MobFilterButtons
          setFilter={setFilter}
          filter={filter}
          filteredProducts={filteredProducts}
          isFiltersEmpty={isFiltersEmpty}
          setIsMobileFilters={setIsMobileFilters}
        />
        <Typography pt={"1.25rem"} sx={{display: {xs: 'none', md: 'block'}}}>
          {typeProducts === "allProducts"
            ? products.length
            : filteredProducts.length}{" "}
          знайдено товарів
        </Typography>
        <Box pt={"1rem"} pb={"2.875rem"} position={'relative'}>
          { isMobileFilters && (
          <Box sx={{position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10, backgroundColor: '#FCFCFC'}}>
            <CatalogFilters
            filtersState={filtersState}
            setFiltersState={setFiltersState}
        />
          </Box>
          )}
        <Grid2 container spacing={"1.25rem"}>
          {isLoading ? (
            <Box
              sx={{
                width: "100%",
                paddingTop: "100px",
                paddingBottom: "100px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Loader />
            </Box>
          ) : (
            displayProducts[currentPage - 1]?.map((product) => (
              <Grid2 key={product._id} size={{ xs: 6, sm: 6, md: 4 }}>
                <Link
                  to={`/product/${product._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <ProductCard {...product} />
                </Link>
              </Grid2>
            ))
          )}
        </Grid2>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Button
            sx={buttonStyles}
            color="secondary"
            variant="outlined"
            onClick={handleAddProducts}
          >
            Показати ще
          </Button>
        </Box>
        <Pagination
          sx={{
            "& .MuiPagination-ul": { justifyContent: "center" },
            marginTop: "2.875rem",
          }}
          count={displayProducts.length}
          page={currentPage}
          onChange={handleChangePage}
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
                borderColor:
                  item.page === currentPage ? "brown" : "transparent",
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
