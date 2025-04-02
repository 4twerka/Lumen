import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormButtonSubmit from "../../../../../components/Forms/FormButtonSubmit";
import PostForm from "../PostForm";
import { order } from "../../../../../types";
import ContactInfoForm from "../ContactInfoForm";
import DeliveryMethodForm from "../DeliveryMethodForm";
import styles from "./Form.module.css";
import PaymentMethodForm from "../PaymentMethodForm";
import { Box } from "@mui/material";
import CommentForm from "../CommentForm";
import { useAppDispatch, useAppSelector } from "../../../../../hooks";
import {
  clearCart,
  createOrder,
} from "../../../../../store/slices/productSlice";
import { useNavigate } from "react-router";

const initialValues = {
  firstName: "",
  lastname: "",
  telephone: "",
  email: "",
  deliveryEmail: "",
  deliveryMethod: "pickup",
  deliveryCity: "",
  deliveryDepartment: "",
  payment: "cash",
  callMe: false,
  comment: "",
};

const Form: React.FC = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    reset,
  } = useForm<order>({
    defaultValues: initialValues,
  });
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector((state) => state.products.carts);
  const navigate = useNavigate();
  //
  const onSubmit = async (data: order) => {
    const fetchOrder = {
      deliveryCompanyId: data.deliveryCity
        ? `${data.deliveryCity}, ${data.deliveryDepartment}`
        : null,
      firstName: data.firstName,
      lastName: data.lastname,
      telephone: data.telephone,
      email: data.email,
    };

    console.log({ ...fetchOrder, products: cartProducts });

    try {
      await dispatch(createOrder(fetchOrder));
      dispatch(clearCart());

      navigate(data.payment === "cash" ? "/thanks-order" : "/card-payment");
      reset();
    } catch (error) {
      console.error("Помилка при створенні замовлення:", error);
    }
  };

  const [isNovaPost, setIsNovaPost] = useState<"pickup" | "novaPost">("pickup");

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <ContactInfoForm control={control} errors={errors} />
      <DeliveryMethodForm control={control} setIsNovaPost={setIsNovaPost} />
      {isNovaPost === "novaPost" && (
        <PostForm control={control} errors={errors} setValue={setValue} />
      )}
      <PaymentMethodForm control={control} />
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <CommentForm control={control} />
        <FormButtonSubmit sx={{ marginTop: "1.5rem" }}>
          Перейти до оплати
        </FormButtonSubmit>
      </Box>
    </form>
  );
};

export default Form;
