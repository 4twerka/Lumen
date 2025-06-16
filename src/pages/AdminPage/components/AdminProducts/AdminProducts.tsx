import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useMemo, useState } from "react";
import BreadcrumbsAdminPage from "../BreadcrumbsAdminPage/BreadcrumbsAdminPage";
import FormButtonSubmit from "../../../../components/Forms/FormButtonSubmit";
import { useAppSelector } from "../../../../hooks";
import AdminProduct from "./AdminProduct";
import { useNavigate } from "react-router";
import Search from "../../../../components/Search";

const AdminProducts: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const products = useAppSelector((state) => state.products.products);
  const searchProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [products, searchValue]);

  const handleCreateProduct = () => {
    navigate("/admin/create-product");
  };

  return (
    <Box>
      <BreadcrumbsAdminPage />
      <Box sx={{ display: "flex", gap: "1.5rem" }}>
        <Search
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onClear={() => setSearchValue("")}
          id={"product-search"}
          sx={{ width: "70%" }}
        />
        <FormButtonSubmit
          onClick={handleCreateProduct}
          sx={{ width: "30%", textTransform: "none" }}
        >
          <AddIcon />
          Додати новий продукт
        </FormButtonSubmit>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          gap: "1.5rem",
          pt: "1.5rem",
        }}
      >
        {searchProducts.map((product) => (
          <AdminProduct key={product._id} {...product} />
        ))}
      </Box>
    </Box>
  );
};

export default AdminProducts;
