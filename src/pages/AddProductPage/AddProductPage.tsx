import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React from "react";
import { filterOptions } from "../../utils/filter";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import AddProductSelect from "./AddProductSelect";
import AddProductInput from "./AddProductInput";
import FormButtonSubmit from "../../components/Forms/FormButtonSubmit";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { createProduct } from "../../store/slices/productSlice";

interface AddProductPageProps {
  title: string;
  price: number | string;
  file: File[];
  type_candle: string;
  size: number | string;
  aroma: string;
  appointment: string;
  burning_time: string;
  short_describe: string;
  color: string;
  material: string;
  shape: string;
  features: string;
  gift_packaging: boolean;
  season_collection: boolean;
  stock: number | string;
  care: string;
  composition: string;
  characteristics: {
    topNotes: string;
    heartNotes: string;
    baseNotes: string;
  };
}

const initialProductValues = {
  title: "",
  price: "",
  file: [],
  type_candle: "",
  size: "",
  aroma: "",
  appointment: "",
  burning_time: "",
  short_describe: "",
  color: "",
  material: "",
  shape: "",
  features: "",
  gift_packaging: false,
  season_collection: false,
  stock: "",
  care: "",
  composition: "",
  characteristics: {
    topNotes: "",
    heartNotes: "",
    baseNotes: "",
  },
};

const AddProductPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<AddProductPageProps>({
    defaultValues: initialProductValues,
  });

  const user = useAppSelector((state) => state.user.user);
  console.log("user", user);

  const onSubmit: SubmitHandler<AddProductPageProps> = (data) => {
    console.log(data);
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === "file") {
        (value as File[]).forEach((file) => {
          formData.append("file", file);
        });
      } else if (key === "characteristics") {
        formData.append("characteristics", JSON.stringify(value));
      } else {
        formData.append(key, value as string);
      }
    });

    formData.forEach((item) => console.log(item));
    console.log("formData", formData);

    dispatch(createProduct(formData));
    reset();
  };

  return (
    <Box
      className={"container"}
      sx={{
        display: { xs: "block", md: "flex" },
        width: "100%",
        padding: { xs: "16px 16px", md: "48px 80px" },
        gap: "1.25rem",
        backgroundColor: "#FCFCFC",
      }}
    >
      <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "50%",
          }}
        >
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <AddProductInput
                label={"Назва свічки"}
                field={field}
                error={errors.title}
              />
            )}
          />
          <Controller
            name="short_describe"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <AddProductInput
                label={"Опис свічки"}
                field={field}
                error={errors.short_describe}
              />
            )}
          />
          <Controller
            name="burning_time"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <AddProductInput
                label={"Час горіння"}
                field={field}
                error={errors.burning_time}
              />
            )}
          />
          <Controller
            name="price"
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /^\d+(\.\d+)?$/,
                message: "Введіть тільки додатне число",
              },
            }}
            render={({ field }) => (
              <AddProductInput
                label={"Ціна"}
                type="number"
                field={field}
                error={errors.price}
              />
            )}
          />
          <Controller
            name="size"
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /^\d+(\.\d+)?$/,
                message: "Введіть тільки додатне число",
              },
            }}
            render={({ field }) => (
              <AddProductInput
                label={"Розмір свічки(см)"}
                field={field}
                type="number"
                error={errors.size}
              />
            )}
          />
          <Controller
            name="stock"
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /^[1-9]\d*$/,
                message: "Введіть тільки додатне ціле число",
              },
            }}
            render={({ field }) => (
              <AddProductInput
                label={"Кількість"}
                field={field}
                type="number"
                error={errors.stock}
              />
            )}
          />
          <Controller
            name="characteristics.baseNotes"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <AddProductInput
                label={"Базові ноти"}
                field={field}
                error={errors.characteristics?.baseNotes}
              />
            )}
          />
          <Controller
            name="characteristics.heartNotes"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <AddProductInput
                label={"Серцеві ноти"}
                field={field}
                error={errors.characteristics?.heartNotes}
              />
            )}
          />
          <Controller
            name="characteristics.topNotes"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <AddProductInput
                label={"Верхні ноти"}
                field={field}
                error={errors.characteristics?.topNotes}
              />
            )}
          />
          <Controller
            name="care"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <AddProductInput
                label={"Догляд"}
                field={field}
                error={errors.care}
              />
            )}
          />
          <Controller
            name="composition"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <AddProductInput
                label={"Склад"}
                field={field}
                error={errors.composition}
              />
            )}
          />
          <Controller
            name="type_candle"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <AddProductSelect
                label={"Тип свічки"}
                options={filterOptions.types}
                field={field}
                error={errors.type_candle}
              />
            )}
          />
          <Controller
            name="aroma"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <AddProductSelect
                label={"Аромат свічки"}
                options={filterOptions.aroma}
                field={field}
                error={errors.aroma}
              />
            )}
          />
          <Controller
            name="appointment"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <AddProductSelect
                label={"Призначення"}
                options={filterOptions.assignment}
                field={field}
                error={errors.appointment}
              />
            )}
          />
          <Controller
            name="color"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <AddProductSelect
                label={"Колір"}
                options={filterOptions.color}
                field={field}
                error={errors.color}
              />
            )}
          />
          <Controller
            name="material"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <AddProductSelect
                label={"Матеріал"}
                options={filterOptions.material}
                field={field}
                error={errors.material}
              />
            )}
          />
          <Controller
            name="shape"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <AddProductSelect
                label={"Форма"}
                options={filterOptions.form}
                field={field}
                error={errors.shape}
              />
            )}
          />
          <Controller
            name="features"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <AddProductSelect
                label={"Особливості"}
                options={filterOptions.features}
                field={field}
                error={errors.features}
              />
            )}
          />
          <Controller
            name="gift_packaging"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                }
                label="Подарункова упаковка"
              />
            )}
          />
          <Controller
            name="season_collection"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                }
                label="Сезонна колекція"
              />
            )}
          />
          <Controller
            name="file"
            control={control}
            rules={{ required: "Виберіть файл" }}
            render={({ field }) => (
              <>
                <label htmlFor="fileInput">Завантаження фото</label>
                <input
                  id="fileInput"
                  type="file"
                  multiple
                  accept="*/*"
                  // placeholder="Завантаження фото"
                  onChange={(e) => {
                    if (e.target.files) {
                      const files = Array.from(e.target.files);
                      field.onChange(files);
                    }
                  }}
                />
                {errors.file && (
                  <Typography color="red">{errors.file.message}</Typography>
                )}
              </>
            )}
          />
        </Box>

        <FormButtonSubmit>Створити</FormButtonSubmit>
      </form>
    </Box>
  );
};

export default AddProductPage;
