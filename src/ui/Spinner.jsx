import styles from "./LoadingScreen.module.css";
const Spinner = () => {
  return (
    <div className={styles["loading-screen"]}>
      <div className={styles["loading-spinner"]}></div>
    </div>
  );
};

export default Spinner;
