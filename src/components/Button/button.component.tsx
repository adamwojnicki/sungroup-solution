import React from "react";
import styles from "./button.module.css";

const Button = ({
  children,
  variant,
  href,
}: {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "primary-light";
  href: string;
}) => {
  return (
    <a href={href} className={`${styles.button} ${styles[variant]}`}>
      {children}
    </a>
  );
};

export default Button;
