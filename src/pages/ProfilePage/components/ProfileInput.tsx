import React from "react";
import styles from "./ProfileInput.module.css";
import { UseFormRegisterReturn } from "react-hook-form";

interface ProfileInputProps {
  label: string;
  name: string;
  userInfo?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  readOnly?: boolean;
  type?: string;
  icon?: React.ReactNode;
  halfWidth?: boolean;
}

const ProfileInput: React.FC<ProfileInputProps> = ({
  label,
  name,
  userInfo,
  placeholder,
  register,
  readOnly,
  type = "text",
  icon,
  halfWidth
}) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={`${styles.inputWrapper} ${halfWidth ? styles.halfWidth : ''}`}>
        <input
          {...register}
          className={styles.input}
          id={name}
          placeholder={placeholder}
          defaultValue={userInfo}
          readOnly={readOnly}
          type={type}
        />
        {icon && <div className={styles.iconWrapper}>{icon}</div>}
      </div>
    </div>
  );
};

export default ProfileInput;
