// import React from "react";
// import styles from "./UpdateInput.module.css";
// import { ControllerRenderProps, FieldError, FieldValues, Path } from "react-hook-form";

// interface UpdateInputProps<T extends FieldValues, K extends Path<T>> {
//   label: string;
//   field: ControllerRenderProps<T, K>;
//   error?: FieldError;
//   textArea?: boolean;
// }

// const UpdateInput: React.FC<UpdateInputProps<T, K>> = <T extends FieldValues, K extends Path<T>>({
//   label,
//   textArea = false,
//   field,
//   error,
// }) => {
//   return (
//     <div className={styles.inputWrapper}>
//       <label htmlFor={`${label}`}>{label}</label>
//       {textArea ? (
//         <textarea id={`${label}`} rows={4} value={field.value} />
//       ) : (
//         <input type="text" id={`${label}`} value={field.value} />
//       )}
//       {error && <p className={`styles.error`}>{error?.message}</p>}
//     </div>
//   );
// };

// export default UpdateInput;
