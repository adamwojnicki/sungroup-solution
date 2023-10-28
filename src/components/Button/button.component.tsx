import React from "react";
import styles from "./button.module.css";

const Button = ({
  children,
  variant,
  href,
  style,
}: {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "primary-light";
  href?: string;
  style?: object;
}) => {
  return (
    <a
      href={href}
      className={`${styles.button} ${styles[variant]}`}
      style={{ ...style }}
    >
      {children}
    </a>
  );
};

export default Button;
