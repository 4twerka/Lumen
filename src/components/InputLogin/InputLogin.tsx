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
<<<<<<< HEAD
}) => {
=======
}: InputProps<T>) => {

  const errorMessage = errors && errors[id]?.message;
  const serverErrorMessage = serverError;
>>>>>>> ebc4714944d618785f564cc6cacff517a1bd377e
  
  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          {...(register ? register(id) : {})}
<<<<<<< HEAD
          className={`${styles.input} ${(errors && errors[id] || serverError) ? styles.inputError : ''}`}
=======
          className={`${styles.input} ${(errorMessage || serverErrorMessage) ? styles.inputError : ''}`}
>>>>>>> ebc4714944d618785f564cc6cacff517a1bd377e
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
      {serverError && (
        <p className={styles.error}>* {serverError}</p>
      )}
    </div>
  );
};
