import styles from "./RegisteredUsers.module.css";

const RegisteredUsers = (props) => {
  return (
    <div className={styles.details}>
      {props.details.map((detail) => {
        <div>Hello</div>;
      })}
    </div>
  );
};

export default RegisteredUsers;
