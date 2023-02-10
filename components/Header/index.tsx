import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.headerText}>Data Chart App</h1>
    </div>
  );
};

export default Header;
