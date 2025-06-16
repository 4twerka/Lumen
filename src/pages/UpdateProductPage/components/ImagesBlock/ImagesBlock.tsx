import React, { useEffect } from "react";
import { SUPABASE_PRODUCT_URL_PART } from "../../../../constants";
import { useAppSelector } from "../../../../hooks";
import { Box, Typography } from "@mui/material";
import Badge from "../Badge";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";
import ButtonOutline from "../../../../components/Buttons/ButtonOutline";
import styles from "../../UpdateProductPage.module.css";
import PlusIcon from "../../../../assets/PlusOrder.svg?react";
import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableImage from "../ImageSmallBlocks/SortableImage";

const urlToFile = async (url: string): Promise<File> => {
  const response = await fetch(url);
  const blob = await response.blob();
  const fullName = url.split("/").pop() || "file.jpg";
  const parts = fullName.split("_");
  const filename = parts.length > 1 ? parts[parts.length - 1] : fullName;
  return new File([blob], filename, { type: blob.type });
};

const convertImagesToFiles = async (filenames: string[]): Promise<File[]> => {
  const baseUrl = SUPABASE_PRODUCT_URL_PART;
  const filePromises = filenames.map((name) => urlToFile(baseUrl + name));
  return Promise.all(filePromises);
};

interface ImagesBlockProps<T extends FieldValues> {
  control: Control<T>;
  errors: FieldErrors<T>;
  selectedFiles: File[];
  setSelectedFiles: React.Dispatch<React.SetStateAction<File[]>>;
  isEditForm: boolean;
}

const ImagesBlock = <T extends FieldValues>({
  control,
  errors,
  selectedFiles,
  setSelectedFiles,
  isEditForm,
}: ImagesBlockProps<T>) => {
  const product = useAppSelector((state) => state.products.product);

  useEffect(() => {
    if (product?._id && product?.image?.length && isEditForm) {
      convertImagesToFiles(product.image).then((files) => {
        setSelectedFiles([...files]);
      });
    }
  }, [product?._id, setSelectedFiles, product?.image, isEditForm]);

  useEffect(() => {
    return () => {
      selectedFiles.forEach((file) =>
        URL.revokeObjectURL(URL.createObjectURL(file))
      );
    };
  }, [selectedFiles]);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const current = selectedFiles.slice(1);
      const oldIndex = current.findIndex((f) => f.name === active.id);
      const newIndex = current.findIndex((f) => f.name === over?.id);
      const reordered = arrayMove(current, oldIndex, newIndex);
      setSelectedFiles([selectedFiles[0], ...reordered]);
    }
  };
  console.log("selectedFiles", selectedFiles);

  return (
    <Box sx={{ width: "calc(100% / 3)" }}>
      <h3 className={styles.title}>Фото товару</h3>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Box sx={{ position: "relative", width: "100%" }}>
          {selectedFiles[0] && (
            <Box
              sx={{ width: "100%", objectFit: "cover", borderRadius: "8px" }}
              src={URL.createObjectURL(selectedFiles[0])}
              alt={`selected-${selectedFiles[0].name}`}
              component={"img"}
            />
          )}
          {selectedFiles.length > 0 && <Badge />}
        </Box>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={selectedFiles.slice(1).map((file) => file.name)}
            strategy={verticalListSortingStrategy}
          >
            {selectedFiles?.slice(1).map((file) => (
              <SortableImage
                key={file.name}
                src={URL.createObjectURL(file)}
                name={file.name}
                setSelectedFiles={setSelectedFiles}
                selectedFiles={selectedFiles}
              />
            ))}
          </SortableContext>
        </DndContext>
        <Controller
          name={"file" as Path<T>}
          control={control}
          // rules={{ required: "Виберіть файл" }}
          render={({ field }) => (
            <>
              <label style={{ padding: "1rem 0" }} htmlFor="fileInput">
                <ButtonOutline
                  component="span"
                  sx={{
                    paddingLeft: 0,
                    paddingRight: 0,
                    display: "flex",
                    gap: "11px",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <PlusIcon />
                  Завантажити фото
                </ButtonOutline>
              </label>
              <input
                id="fileInput"
                type="file"
                hidden
                multiple
                accept="*/*"
                onChange={(e) => {
                  if (e.target.files) {
                    const files = Array.from(e.target.files);
                    field.onChange(files);
                    setSelectedFiles((prev: File[]) => [...prev, ...files]);
                  }
                }}
              />
              {errors.file && (
                <Typography color="red">
                  {String(errors.someField?.message)}
                </Typography>
              )}
            </>
          )}
        />
      </Box>
      <Box
        sx={{
          textAlign: "center",
          fontSize: "0.875rem",
          color: "#A3A3A3",
          "&>p": { fontSize: "0.875rem" },
        }}
      >
        <Typography>Дозволені формати: jpeg, png.</Typography>
        <Typography>Максимальний розмір файлу: 00 Мб.</Typography>
        <Typography>Максимальна кількість фото: 00 шт.</Typography>
      </Box>
    </Box>
  );
};

export default ImagesBlock;
