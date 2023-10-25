import React from "react";
import styles from "./button.module.css";

const Button = ({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "primary-light";
}) => {
  return (
    <a href="#" className={`${styles.button} ${styles[variant]}`}>
      {children}
    </a>
  );
};

export default Button;
