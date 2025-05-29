import styles from "./UpdateInput.module.css";
import {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface UpdateInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  //   field: ControllerRenderProps<T, K>;
  register: UseFormRegister<T>;
  error?: FieldError;
  textArea?: boolean;
  readonly?: boolean;
  rules?: RegisterOptions<T>;
  variant?: "sm" | "lg";
  rows?: number;
}

const UpdateInput = <T extends FieldValues>({
  label,
  textArea = false,
  readonly = false,
  //   field,
  error,
  name,
  register,
  variant = "lg",
  rules,
  rows = 4,
}: UpdateInputProps<T>) => {
  return (
    <div className={styles.inputWrapper}>
      <label
        className={`${styles.label} ${variant === "sm" ? styles.labelSm : ""}`}
        htmlFor={`${label}`}
      >
        {label}
      </label>
      {textArea ? (
        <textarea
          readOnly={readonly}
          className={styles.input}
          id={`${label}`}
          rows={rows}
          {...register(name, rules)}
        />
      ) : (
        <input
          readOnly={readonly}
          className={styles.input}
          type="text"
          id={`${label}`}
          {...register(name, rules)}
        />
      )}
      {error && <p className={`styles.error`}>{error?.message}</p>}
    </div>
  );
};

export default UpdateInput;
