import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormButtonSubmit from "../../../../../components/Forms/FormButtonSubmit";
import PostForm from "../PostForm";
import { CreateOrder } from "../../../../../types";
import ContactInfoForm from "../ContactInfoForm";
import DeliveryMethodForm from "../DeliveryMethodForm";
import styles from "./Form.module.css";
import PaymentMethodForm from "../PaymentMethodForm";
import { Box } from "@mui/material";
import CommentForm from "../CommentForm";
import { useAppDispatch, useAppSelector } from "../../../../../hooks";
import { clearCart } from "../../../../../store/slices/productSlice";
import { useNavigate } from "react-router";
import { createOrder } from "../../../../../store/slices/orderSlice";
import { getUserInfo } from "../../../../../store/slices/userSlice";

const initialValues: CreateOrder = {
  firstName: "",
  lastname: "",
  telephone: "",
  email: "",
  userEmail: "",
  deliveryMethod: "self_pickup",
  deliveryCity: "",
  deliveryDepartment: "",
  payment: "cash",
  isCallRestricted: false,
  comment: "",
};

const Form: React.FC = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    reset,
  } = useForm<CreateOrder>({
    defaultValues: initialValues,
  });
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector((state) => state.products.carts);
  const token = useAppSelector((state) => state.user.token);
  const userInfo = useAppSelector((state) => state.user.user);
  const navigate = useNavigate();
  const onSubmit = async (data: CreateOrder) => {
    const fetchOrder = {
      firstName: data.firstName,
      lastName: data.lastname,
      phoneNumber: data.telephone,
      email: data.email,
      paymentMethod: data.payment,
      products: cartProducts,
      delivery: {
        method: data.deliveryMethod,
        address: {
          city: data.deliveryCity,
          department: data.deliveryDepartment
        }
      },
      notes: data.comment,
      isCallRestricted: data.isCallRestricted
    };
    if (cartProducts.length < 1) {
      alert("Ваш кошик порожній. Додайте товари перед оформленням замовлення.");
      return;
    }

    try {
      await dispatch(createOrder(fetchOrder));
      dispatch(clearCart());

      navigate(data.payment === "cash" ? "/thanks-order" : "/card-payment");
      reset();
    } catch (error) {
      console.error("Помилка при створенні замовлення:", error);
    }
  };

  const [isNovaPost, setIsNovaPost] = useState<"self_pickup" | "nova_post">("self_pickup");
  
  useEffect(() => {
    if (token) {
      dispatch(getUserInfo());
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (userInfo) {
      reset({
        ...initialValues,
        firstName: userInfo.firstName || "",
        lastname: userInfo.lastName || "",
        telephone: userInfo.phoneNumber || "",
        email: userInfo.email || "",
        userEmail: userInfo.email || "",
      });
    }
  }, [userInfo, reset]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <ContactInfoForm control={control} errors={errors} />
      <DeliveryMethodForm control={control} setIsNovaPost={setIsNovaPost} />
      {isNovaPost === "nova_post" && (
        <PostForm control={control} errors={errors} setValue={setValue} />
      )}
      <PaymentMethodForm control={control} />
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <CommentForm control={control} />
        <FormButtonSubmit sx={{ marginTop: "1.5rem", textTransform: "none" }}>
          Перейти до оплати
        </FormButtonSubmit>
      </Box>
    </form>
  );
};

export default Form;
