import styles from "./RegisteredUsers.module.css";

const RegisteredUsers = (props) => {
  return (
    <ul className={styles.details}>
      {props.details.map((detail) => (
        <li key={Math.random()}>
          {detail.name} ({detail.age} years old)
        </li>
      ))}
    </ul>
  );
};

export default RegisteredUsers;
