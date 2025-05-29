import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import BurgerIcon from "../../../../assets/Burger.svg?react";
import ThreeDotsHorizontalIcon from "../../../../assets/ThreeDotsHorizontal.svg?react";
import Menu from "./Menu";
import { useSortable } from "@dnd-kit/sortable";

interface ImageSmallBlocksProps {
  src: string;
  name: string;
  selectedFiles: File[];
  setSelectedFiles: React.Dispatch<React.SetStateAction<File[]>>;
  dragListeners?: ReturnType<typeof useSortable>["listeners"];
  dragAttributes?: ReturnType<typeof useSortable>["attributes"];
}

const ImageSmallBlocks: React.FC<ImageSmallBlocksProps> = ({
  src,
  name,
  selectedFiles,
  setSelectedFiles,
  dragAttributes,
  dragListeners,
}) => {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const iconButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        iconButtonRef.current &&
        !iconButtonRef.current.contains(event.target as Node)
      ) {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <Box
      sx={{
        padding: "1rem",
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#F1F1F4",
        borderRadius: "4px",
        position: "relative",
      }}
    >
      <BurgerIcon
        {...dragAttributes}
        {...dragListeners}
        style={{
          cursor: "grab",
          height: "24px",
          width: "24px",
          minWidth: "24px",
        }}
      />
      <Box
        sx={{ display: "flex", gap: "1rem", alignItems: "center", flexGrow: 1 }}
      >
        <Box
          component={"img"}
          src={src}
          sx={{ width: "64px", height: "64px", objectFit: "cover" }}
        />
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: "1.5rem",
            color: "#111111",
          }}
        >
          {name}
        </Typography>
      </Box>
      <IconButton ref={iconButtonRef} onClick={() => setMenu((prev) => !prev)}>
        <ThreeDotsHorizontalIcon style={{ width: "24px", height: "24px" }} />
      </IconButton>
      {menu && (
        <Menu
          name={name}
          ref={menuRef}
          setMenu={setMenu}
          selectedFiles={selectedFiles}
          setSelectedFiles={setSelectedFiles}
        />
      )}
    </Box>
  );
};

export default ImageSmallBlocks;
