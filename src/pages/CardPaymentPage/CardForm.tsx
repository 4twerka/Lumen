import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./CardForm.module.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import InputMask from "react-input-mask";
import ArrowLeft from "../../assets/Arrow Left.svg?react";
import ButtonBorderGreen from "../../components/ButtonBorderGreen";
import { IconButton } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useNavigate } from "react-router";

interface CardInfo {
  cardNumber: string;
  expiryDate: string;
  cvv: number;
}

const CardForm:React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CardInfo>();
  const onSubmit = (data: CardInfo) => {
    console.log("Form Data:", data);
  };
  const navigate = useNavigate();
  const [showCvv, setShowCvv] = useState(false);
  const toggleCvv = () => {
    setShowCvv((prev) => !prev);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="cardNumber" className={styles.label}>
        Номер картки <span style={{ color: "red" }}>*</span>
      </label>
      <InputMask
        id="cardNumber"
        {...register("cardNumber", {
          required: "Це поле обов'язкове",
        })}
        mask="9999 9999 9999 9999"
        placeholder="0000 0000 0000 0000"
        className={styles.input}
      />
      <ErrorMessage>{errors.cardNumber?.message}</ErrorMessage>
      <div
        style={{
          width: "100%",
          paddingTop: "24px",
          display: "flex",
          gap: "24px",
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <label htmlFor="expiryDate" className={styles.label}>
            Дата закінчення терміну <span style={{ color: "red" }}>*</span>
          </label>
          <InputMask
            id="expiryDate"
            {...register("expiryDate", {
              required: "Це поле обов'язкове",
            })}
            mask="99/99"
            placeholder="MM/YY"
            className={styles.input}
          />
          <ErrorMessage>{errors.expiryDate?.message}</ErrorMessage>
        </div>
        <div style={{ flexGrow: 1 }}>
          <label htmlFor="cvv" className={styles.label}>
            CVV <span style={{ color: "red" }}>*</span>
          </label>
          <div style={{ position: "relative" }}>
            <InputMask
              id="cvv"
              {...register("cvv", {
                required: "Це поле обов'язкове",
              })}
              mask="999"
              type={showCvv ? "text" : "password"}
              placeholder="***"
              className={styles.input}
            />
            <IconButton onClick={toggleCvv} className={styles.inputEye}>
              {showCvv ? (
                <VisibilityOff className={styles.inputEyeIcon} />
              ) : (
                <Visibility className={styles.inputEyeIcon} />
              )}
            </IconButton>
          </div>
          <ErrorMessage>{errors.cvv?.message}</ErrorMessage>
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <ButtonBorderGreen onClick={() => navigate(-1)}>
          <ArrowLeft /> Назад
        </ButtonBorderGreen>
        <ButtonBorderGreen sx={{ bgcolor: "#0E402D", color: "#FDF5ED" }}>
          Заплатити 1390 UAH
        </ButtonBorderGreen>
      </div>
    </form>
  );
};

export default CardForm;
