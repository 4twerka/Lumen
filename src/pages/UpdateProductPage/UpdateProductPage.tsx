import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  createProduct,
  fetchProductById,
  updateProduct,
} from "../../store/slices/productSlice";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import UpdateSelect from "./components/UpdateSelect/UpdateSelect";
import FormButtonSubmit from "../../components/Forms/FormButtonSubmit";
import { filterOptions } from "../../utils/filter";
import { CreateProduct } from "../../types";
import UpdateInput from "./components/UpdateInput/UpdateInput";
import styles from "./UpdateProductPage.module.css";
import ImagesBlock from "./components/ImagesBlock/ImagesBlock";
import Loader from "../../components/Loader/Loader";
import AddIcon from "../../assets/Plus.svg?react";
import RemoveIcon from "../../assets/Minus.svg?react";
import BreadcrumbsAdminEditProduct from "../AdminPage/components/BreadcrumbsAdminPage/BreadcrumbsAdminEditProduct";
import BreadcrumbsAdminCreateProduct from "../AdminPage/components/BreadcrumbsAdminPage/BreadcrumbsAdminCreateProduct";

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
  // gift_packaging: false,
  special_treat: false,
  top_sales: false,
  season_collection: false,
  stock: "0",
  care: "",
  composition: "",
  characteristics: {
    topNotes: "",
    heartNotes: "",
    baseNotes: "",
  },
  // _id: "",
};

const UpdateProductPage: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const isEditForm = Boolean(id);

  const { product, isLoading } = useAppSelector((state) => state.products);
  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
    reset,
    getValues,
    setValue,
  } = useForm<CreateProduct>({
    defaultValues: initialProductValues,
  });
  const onSubmit = (data: CreateProduct) => {
    const formData = new FormData();

    Object.entries(initialProductValues).forEach(([key]) => {
      const value = data[key as keyof CreateProduct];

      if (key === "file") {
        (selectedFiles as File[]).forEach((file) => {
          formData.append("file", file);
        });
      } else if (key === "characteristics") {
        formData.append("characteristics", JSON.stringify(value));
      } else {
        formData.append(key, value as string | Blob);
      }
    });

    if (id && data) {
      dispatch(updateProduct({ id: id, product: formData }));
    } else {
      dispatch(createProduct(formData));
    }
  };
  useEffect(() => {
    if (product && id) {
      reset({
        ...initialProductValues,
        ...product,
      });
    }
  }, [product, reset, id]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const incrementStock = () => {
    const currentStock = getValues("stock");
    setValue("stock", +currentStock + 1);
  };

  const decrementStock = () => {
    const currentStock = getValues("stock");
    setValue("stock", Math.max(+currentStock - 1, 0));
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          height: "calc( 100vh - 148px )",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        gap: "1.25rem",
        backgroundColor: "#FCFCFC",
      }}
    >
      {isEditForm ? (
        <BreadcrumbsAdminEditProduct />
      ) : (
        <BreadcrumbsAdminCreateProduct />
      )}
      <Box
        component={"form"}
        sx={{
          width: "100%",
          display: "flex",
          gap: "1.5rem",
          flexDirection: { xs: "column", md: "row" },
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            width: { xs: "100%", md: "calc((100% / 3) * 2)" },
          }}
        >
          {isEditForm && (
            <Box>
              <h3 className={styles.title}>Номер товару</h3>
              <Typography
                sx={{
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  color: "#111111",
                }}
              >
                {product?._id}
              </Typography>
            </Box>
          )}
          <UpdateInput
            label={"Назва товару"}
            name="title"
            rules={{ required: "Назва свічки обовязкова!!!" }}
            register={register}
            error={errors.title}
          />
          <UpdateInput
            label="Опис"
            register={register}
            name="short_describe"
            rules={{ required: `Опис обовязковий!!!` }}
            error={errors.short_describe}
            textArea={true}
          />
          <Box sx={{ display: "flex", gap: "1.5rem" }}>
            <UpdateInput
              style={{ width: "50%" }}
              label="Ціна"
              register={register}
              name="price"
              rules={{
                required: `Ціна обовязкова!!!`,
                pattern: {
                  value: /^\d+(\.\d+)?$/,
                  message: "Введіть тільки додатне число",
                },
              }}
              error={errors.price}
            />
            <Box
              sx={{
                display: "flex",
                gap: "0.5rem",
                flexDirection: "column",
                width: "50%",
              }}
            >
              <label htmlFor="stock" className={styles.title}>
                Залишок в шт.
              </label>
              <Box sx={{ display: "flex", gap: "0.5rem" }}>
                <span onClick={decrementStock} className={styles.icon}>
                  <RemoveIcon />
                </span>
                <input
                  id="stock"
                  className={styles.stockInput}
                  type="text"
                  {...register("stock", {
                    pattern: {
                      value: /^(0|[1-9]\d*)$/,
                      message: "Введіть тільки додатне ціле число",
                    },
                  })}
                />
                <span
                  onClick={incrementStock}
                  className={`${styles.add} ${styles.icon}`}
                >
                  <AddIcon />
                </span>
              </Box>
              {errors.stock && (
                <Typography sx={{ color: "red", fontSize: "0.75rem" }}>
                  {errors.stock.message}
                </Typography>
              )}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "1.5rem",
              flexWrap: "wrap",
              paddingTop: "20px",
            }}
          >
            <Controller
              name="type_candle"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <UpdateSelect
                  sx={{ width: { xs: "100%", md: "calc(100% / 2 - 0.75rem)" } }}
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
                <UpdateSelect
                  sx={{ width: { xs: "100%", md: "calc(100% / 2 - 0.75rem)" } }}
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
                <UpdateSelect
                  sx={{ width: { xs: "100%", md: "calc(100% / 2 - 0.75rem)" } }}
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
                <UpdateSelect
                  sx={{ width: { xs: "100%", md: "calc(100% / 2 - 0.75rem)" } }}
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
                <UpdateSelect
                  sx={{ width: { xs: "100%", md: "calc(100% / 2 - 0.75rem)" } }}
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
                <UpdateSelect
                  sx={{ width: { xs: "100%", md: "calc(100% / 2 - 0.75rem)" } }}
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
                <UpdateSelect
                  sx={{ width: { xs: "100%", md: "calc(100% / 2 - 0.75rem)" } }}
                  label={"Особливості"}
                  options={filterOptions.features}
                  field={field}
                  error={errors.features}
                />
              )}
            />
          </Box>
          <Box>
            <h3 className={styles.title}>Тег</h3>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: "0.5rem",
                justifyContent: "space-evenly",
                alignItems: { xs: "normal", md: "center" },
              }}
            >
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
                name="special_treat"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                      />
                    }
                    label="Особливий подарунок"
                  />
                )}
              />
              <Controller
                name="top_sales"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                      />
                    }
                    label="Топ продажів"
                  />
                )}
              />
            </Box>
          </Box>
          <Box>
            <h3 className={styles.title}>Характеристики</h3>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "1.5rem", md: "36px" },
              }}
            >
              <UpdateInput
                label="Розмір в см"
                register={register}
                rules={{
                  pattern: {
                    value: /^\d+(\.\d+)?$/,
                    message: "Введіть тільки додатне число",
                  },
                }}
                name="size"
                error={errors.size}
                variant="sm"
              />
              <UpdateInput
                label="Верхні ноти"
                register={register}
                name="characteristics.topNotes"
                error={errors.characteristics?.topNotes}
                variant="sm"
              />
              <UpdateInput
                label="Серцеві ноти"
                register={register}
                rules={{ required: `Заповніть будь-ласка!` }}
                name="characteristics.heartNotes"
                error={errors.characteristics?.heartNotes}
                variant="sm"
              />
              <UpdateInput
                label="Базові ноти"
                register={register}
                rules={{ required: `Заповніть будь-ласка!` }}
                name="characteristics.baseNotes"
                error={errors.characteristics?.baseNotes}
                variant="sm"
              />
              <UpdateInput
                label="Час горіння"
                register={register}
                name="burning_time"
                error={errors.burning_time}
                variant="sm"
              />
              <UpdateInput
                label="Склад"
                register={register}
                name="composition"
                error={errors.composition}
                variant="sm"
                textArea={true}
                rows={5}
              />
              <UpdateInput
                label="Догляд"
                register={register}
                name="care"
                error={errors.care}
                variant="sm"
                textArea={true}
                rows={10}
              />
            </Box>
          </Box>
          <FormButtonSubmit sx={{ display: { xs: "none", md: "inline-flex" } }}>
            {isEditForm ? "Оновити" : "Зберегти"}
          </FormButtonSubmit>
        </Box>
        <ImagesBlock
          selectedFiles={selectedFiles}
          setSelectedFiles={setSelectedFiles}
          control={control}
          errors={errors}
          isEditForm={isEditForm}
        />
        <FormButtonSubmit sx={{ display: { xs: "inline-flex", md: "none" } }}>
          {isEditForm ? "Оновити" : "Зберегти"}
        </FormButtonSubmit>
      </Box>
    </Box>
  );
};

export default UpdateProductPage;
