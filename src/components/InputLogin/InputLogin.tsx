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
}

export const InputLogin: React.FC<InputProps> = ({
  label,
  id,
  type,
  onChange,
  value,
  icon,
  register,
  errors,
}) => {
  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          {...(register ? register(id) : {})}
          className={styles.input}
          id={id}
          type={type}
          onChange={onChange}
          value={value}
        />
        {icon && <div className={styles.iconWrapper}>{icon}</div>}
      </div>
      {errors && errors[id] && (
        <p className={styles.error}>{errors[id]?.message}</p>
      )}
    </div>
  );
};
