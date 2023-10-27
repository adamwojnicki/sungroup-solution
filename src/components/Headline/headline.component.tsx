import styles from "./headline.module.css";

const Headline = ({ children }: { children: React.ReactNode }) => {
  return <h2 className={styles.headline}>{children}</h2>;
};

export default Headline;
