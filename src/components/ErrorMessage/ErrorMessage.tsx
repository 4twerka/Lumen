import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ children }: { children: string | undefined }) => {
  if (!children) return null;
  return <p className={styles.error}>*{children}</p>;
};

export default ErrorMessage;
