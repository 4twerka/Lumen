import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import BackIcon from "../../../../assets/BackArrow.svg?react";
import DeletIcon from "../../../../assets/DeleteOutlined.svg?react";
import { useAppDispatch } from "../../../../hooks";
import { deleteProduct } from "../../../../store/slices/productSlice";

interface ProductModalProps {
    title: string;
    handleCloseModal: () => void;
    openModal: boolean;
    id: string
}

const ProductModal:React.FC<ProductModalProps> = ({ title, handleCloseModal, openModal, id }) => {
    const dispatch = useAppDispatch()
    const handleDeleteProduct = () => {
        dispatch(deleteProduct(id))
    }
  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": {
          alignItems: "center",
        },
      }}
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle
        sx={{
          width: "75%",
          textAlign: "center",
          padding: "24px",
          fontSize: "1rem",
          fontWeight: 500,
        }}
        id="alert-dialog-title"
      >
        {"Ви впевнені, що хочете назавжди видалити продукт ?"}
      </DialogTitle>
      <DialogContent sx={{ paddingBottom: "24px" }}>
        <DialogContentText
          sx={{
            textAlign: "center",
            fontSize: "0.875rem",
            color: "#111111",
            lineHeight: "21px",
            paddingBottom: "4px",
          }}
          id="alert-dialog-description"
        >
          {title}
        </DialogContentText>
        <DialogContentText
          sx={{
            textAlign: "center",
            fontSize: "0.875rem",
            color: "#A3A3A3",
            lineHeight: "21px",
          }}
        >
          Номер товару:{" "}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ padding: "0 1rem 1rem 1rem", width: "100%" }}>
        <Button
          onClick={handleCloseModal}
          variant="contained"
          sx={{
            width: "50%",
            height: "48px",
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 600,
            lineHeight: "20px",
            borderRadius: "8px",
            gap: "12px",
          }}
        >
          <BackIcon />
          Назад
        </Button>
        <Button
          onClick={handleDeleteProduct}  
          sx={{
            width: "50%",
            height: "48px",
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 600,
            lineHeight: "20px",
            borderRadius: "8px",
            border: "1px solid #73270D",
            gap: "12px",
          }}
        >
          <DeletIcon />
          Видалити
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductModal;
