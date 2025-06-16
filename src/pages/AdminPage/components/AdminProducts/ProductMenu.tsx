import { Menu, MenuItem } from "@mui/material";
import React from "react";
import ProductModal from "./ProductModal";
import { useNavigate } from "react-router";

interface ProductMenuProps {
    open: boolean;
    anchorEl: HTMLElement | null;
    handleClose: () => void;
    title: string;
    id: string;
}

const ProductMenu:React.FC<ProductMenuProps> = ({ open, anchorEl, handleClose, title, id }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const navigate = useNavigate();

  const handleEditProduct = () => {
    navigate(`/admin/edit-product/${id}`);
    setOpenModal(false)
  }

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Menu
        id="product-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleEditProduct}>Редагувати</MenuItem>
        {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
        <MenuItem
          onClick={() => {
            handleClose();
            handleOpenModal();
          }}
        >
          Видалити
        </MenuItem>
      </Menu>
      <ProductModal
        handleCloseModal={handleCloseModal}
        openModal={openModal}
        title={title}
        id={id}
      />
    </>
  );
};

export default ProductMenu;
