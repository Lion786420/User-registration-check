import styles from "./ErrorGenerator.module.css";

const ErrorGenerator = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.errorBox}>
        <header className={styles.title}>Error Occured!!</header>
        <p className={styles.error}>{props.error}</p>
        <footer>
          <button className={styles.okay} onClick={props.disableError}>
            Okay
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorGenerator;
