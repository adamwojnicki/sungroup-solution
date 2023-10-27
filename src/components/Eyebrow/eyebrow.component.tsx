import styles from "./eyebrow.module.css";

const Eyebrow = ({ children }: { children: React.ReactNode }) => {
  return <p className={styles.eyebrow}>{children}</p>;
};

export default Eyebrow;
