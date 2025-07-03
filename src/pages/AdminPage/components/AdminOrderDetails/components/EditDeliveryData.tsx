import { Box } from "@mui/material";
import React from "react";
import OrderDetailsTitle from "./OrderDetailsTitle";
import { SubmitHandler, useForm } from "react-hook-form";
import { AdminOrder } from "../../../../../types";
import { useAppDispatch, useAppSelector } from "../../../../../hooks";
import ProfileInput from "../../../../ProfilePage/components/ProfileInput";
import ButtonGreen from "../../../../../components/Buttons/ButtonGreen";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "../../../../../assets/DeleteOutlined.svg?react";
import ButtonRedOutlined from "../../../../../components/Buttons/ButtonRedOutlined";
import { updateOrderById } from "../../../../../store/slices/orderSlice";

const EditDeliveryData = ({
  setIsEditMode,
}: {
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useAppDispatch();
  const { adminOrder } = useAppSelector((state) => state.order);
  console.log('adminOrder',adminOrder);
  
  const { register, handleSubmit } = useForm<AdminOrder>();
  const onSubmit: SubmitHandler<AdminOrder> = (data) => {
    const editedData = { ...adminOrder, ...data };

    if (adminOrder) {
      dispatch(updateOrderById(editedData));
      setIsEditMode(false);
    }
  };
  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        border: "1px solid #A3A3A3",
        borderRadius: "0.5rem",
        p: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        flexGrow: 1,
      }}
    >
      <OrderDetailsTitle>Дані отримувача і доставки </OrderDetailsTitle>
      <Box
        sx={{
          display: "flex",
          gap: "1.5rem",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            gap: "1.5rem",
            flexDirection: "column",
          }}
        >
          <ProfileInput
            register={register("firstName")}
            label={"Ім'я"}
            name={"firstName"}
            userInfo={adminOrder?.firstName}
            placeholder={"Введіть ім'я"}
          />
          <ProfileInput
            register={register("email")}
            label={"Адреса електронної пошти"}
            name={"email"}
            userInfo={adminOrder?.email}
            placeholder={"Введіть пошту"}
          />
          <ProfileInput
            register={register("delivery.address.city")}
            label={"Місто"}
            name={"city"}
            userInfo={adminOrder?.delivery.address.city}
            placeholder={"Введіть пошту"}
          />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            gap: "1.5rem",
            flexDirection: "column",
          }}
        >
          <ProfileInput
            register={register("lastName")}
            label={"Прізвище"}
            name={"lastName"}
            userInfo={adminOrder?.lastName}
            placeholder={"Введіть прізвище"}
          />
          <ProfileInput
            register={register("phoneNumber")}
            label={"Номер телефону"}
            name={"phoneNumber"}
            userInfo={adminOrder?.phoneNumber}
            placeholder={"Введіть номер телефону"}
          />
          {adminOrder?.delivery.method === "self_pickup" ? (
            <ProfileInput
              register={register("delivery.address.department")}
              label={"Магазин №"}
              name={"department"}
              userInfo={adminOrder?.delivery.address.department}
              placeholder={"Введіть назву магазину"}
            />
          ) : (
            <ProfileInput
              register={register("delivery.address.department")}
              label={"№ Відділення Нової Пошти"}
              name={"department"}
              userInfo={adminOrder?.delivery.address.department}
              placeholder={"Введіть відділення пошти"}
            />
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          width: { md: "fit-content", xs: "100%" },
          alignSelf: "end",
          textAlign: "right",
        }}
      >
        <ButtonRedOutlined
          onClick={() => setIsEditMode(false)}
          variant="outlined"
          sx={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            width: { xs: "100%", md: "initial" },
          }}
        >
          <DeleteIcon style={{ fill: "#E60606" }} />
          Скасувати
        </ButtonRedOutlined>
        <ButtonGreen
          type="submit"
          sx={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            width: { xs: "100%", md: "initial" },
          }}
        >
          <CheckIcon />
          Зберегти
        </ButtonGreen>
      </Box>
    </Box>
  );
};

export default EditDeliveryData;
