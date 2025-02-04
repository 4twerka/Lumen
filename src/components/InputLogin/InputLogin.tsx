import { UseFormRegister, FieldErrors, FieldValues, Path } from "react-hook-form";
import styles from "./InputLogin.module.css";

interface InputProps<T extends FieldValues> {
  label: string;
  id: Path<T>;
  type: string;
  icon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  register?: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  isErrors?:boolean;
  serverError?: string | null;
}

export const InputLogin = <T extends FieldValues>({
  label,
  id,
  type,
  value,
  icon,
  register,
  errors,
  isErrors = true,
  serverError
}: InputProps<T>) => {

  const errorMessage = errors && errors[id]?.message;
  const serverErrorMessage = serverError;
  
  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          {...(register ? register(id) : {})}
          className={`${styles.input} ${(errorMessage || serverErrorMessage) ? styles.inputError : ''}`}
          id={id}
          type={type}
          // onChange={onChange}
          value={value}
          placeholder="Type here"
        />
        {icon && <div className={styles.iconWrapper}>{icon}</div>}
      </div>
      {isErrors && errorMessage && (
        <p className={styles.error}>{typeof errorMessage === "string" ? errorMessage : String(errorMessage)}</p>
      )}
      {serverError && (
        <p className={styles.error}>* {serverErrorMessage}</p>
      )}
    </div>
  );
};
