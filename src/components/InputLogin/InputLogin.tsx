import { UseFormRegister, FieldErrors } from "react-hook-form";
import styles from "./InputLogin.module.css";

interface InputProps {
  label: string;
  id: string;
  type: string;
  icon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  register?: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  isErrors?:boolean;
  serverError?: string | null;
}

export const InputLogin: React.FC<InputProps> = ({
  label,
  id,
  type,
  // onChange,
  value,
  icon,
  register,
  errors,
  isErrors = true,
  serverError
}) => {
  
  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          {...(register ? register(id) : {})}
          className={`${styles.input} ${(errors && errors[id] || serverError) ? styles.inputError : ''}`}
          id={id}
          type={type}
          // onChange={onChange}
          value={value}
          placeholder="Type here"
        />
        {icon && <div className={styles.iconWrapper}>{icon}</div>}
      </div>
      {isErrors && errors && errors[id] && (
        <p className={styles.error}>{errors[id]?.message}</p>
      )}
      {serverError && (
        <p className={styles.error}>* {serverError}</p>
      )}
    </div>
  );
};
