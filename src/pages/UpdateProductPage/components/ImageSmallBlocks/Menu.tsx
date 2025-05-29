import { Box, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import StarOutlinedIcon from "../../../../assets/StarOutlined.svg?react";
import DeleteOutlinedIcon from "../../../../assets/DeleteOutlined.svg?react";

interface MenuProps {
  setMenu: (open: boolean) => void;
  name: string;
  selectedFiles: File[];
  setSelectedFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ setMenu, name, selectedFiles, setSelectedFiles }, ref) => {
    // const product = useAppSelector((state) => state.products.product);
    // const dispatch = useAppDispatch();

    const handleMainImage = () => {
      // dispatch(makeMainImg(name));
      const curIndex = selectedFiles.findIndex(
        (file: File) => file.name === name
      );
      const newFiles = [...selectedFiles];
      const targetFile = newFiles[curIndex];
      const firstFile = newFiles[0];
      newFiles[curIndex] = firstFile;
      newFiles[0] = targetFile;
      console.log("newFiles", newFiles);
      setSelectedFiles(newFiles);
      setMenu(false);
    };

    const handleDeleteImage = () => {
      const updatedFiles = selectedFiles.filter(
        (file: File) => file.name !== name
      );
      setSelectedFiles(updatedFiles);
      setMenu(false);
    };

    return (
      <Box
        ref={ref}
        sx={{
          position: "absolute",
          top: "calc(50% + 20px)",
          right: "2px",
          backgroundColor: "#FCFCFC",
          borderRadius: "8px",
          padding: "0.5rem",
          zIndex: 20,
        }}
      >
        <Box
          onClick={handleMainImage}
          sx={{
            padding: "9.5px 16px",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            cursor: "pointer",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#EDEDED",
            },
          }}
        >
          <StarOutlinedIcon />
          <Typography
            noWrap
            sx={{
              fontSize: "0.875rem",
              fontWeight: 400,
              lineHeight: "1.25rem",
            }}
          >
            Зробити головним
          </Typography>
        </Box>
        <Box
          onClick={() => {
            handleDeleteImage();
          }}
          sx={{
            padding: "9.5px 16px",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            cursor: "pointer",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#EDEDED",
            },
          }}
        >
          <DeleteOutlinedIcon />
          <Typography
            sx={{
              fontSize: "0.875rem",
              fontWeight: 400,
              lineHeight: "1.25rem",
            }}
          >
            Видалити
          </Typography>
        </Box>
      </Box>
    );
  }
);

export default Menu;
