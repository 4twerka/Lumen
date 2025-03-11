import { Box, Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { filterOptions } from "../../utils/filter";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import AddProductSelect from "./AddProductSelect";
import AddProductInput from "./AddProductInput";
import FormButtonSubmit from "../../components/Forms/FormButtonSubmit";
import { useAppDispatch } from "../../hooks";
import { createProduct } from "../../store/slices/productSlice";

interface AddProductPageProps {
  title: string;
  price: number;
  file: File[];
  type_candle: string;
  size: number;
  aroma: string;
  appointment: string;
  burning_time: string;
  short_describe: string;
  color: string;
  material: string;
  shape: string;
  features: string;
  gift_packaging: boolean;
  stock: number;
}

const initialProductValues = {
  title: "",
  price: 0,
  file: [],
  type_candle: "",
  size: 0,
  aroma: "",
  appointment: "",
  burning_time: "",
  short_describe: "",
  color: "",
  material: "",
  shape: "",
  features: "",
  gift_packaging: false,
  stock: 0,
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

  const onSubmit: SubmitHandler<AddProductPageProps> = (data) => {
    console.log(data);
    const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (key === "file" && value instanceof FileList && value.length > 0) {
      console.log('Файли знайдено:', value);
      Array.from(value).forEach((file) => {
        formData.append('file', file);
      });
    } else {
      formData.append(key, value);
    }
  });
  formData.forEach(item => console.log(item))
    dispatch(createProduct(formData));
    // console.log('formdata',formData);

    // reset();
  };

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
            rules={{ required: true }}
            render={({ field }) => (
              <AddProductInput
                label={"Ціна"}
                field={field}
                error={errors.price}
              />
            )}
          />
          <Controller
            name="size"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <AddProductInput
                label={"Розмір свічки(см)"}
                field={field}
                error={errors.size}
              />
            )}
          />
          <Controller
            name="stock"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <AddProductInput
                label={"Кількість"}
                field={field}
                error={errors.stock}
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
            name="file"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                type="file"
                multiple
                accept="*/*"
                placeholder="Завантаження фото"
                onChange={(e) => {
                  if (e.target.files) {
                    // const files = Array.from(e.target.files);
                    field.onChange(e.target.files);
                  }
                }}
              />
            )}
          />
        </Box>

        <FormButtonSubmit>Створити</FormButtonSubmit>
      </form>
    </Box>
  );
};

export default AddProductPage;
