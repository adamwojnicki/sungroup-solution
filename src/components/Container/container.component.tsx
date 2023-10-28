import React from "react";
import styles from "./container.module.css";

const Container = ({
  children,
  narrow,
}: {
  children: React.ReactNode;
  narrow?: boolean;
}) => {
  return (
    <div className={`${styles.container} ${narrow && styles.containerNarrow}`}>
      {children}
    </div>
  );
};

export default Container;
