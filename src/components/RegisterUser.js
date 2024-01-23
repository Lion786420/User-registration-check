import styles from "./RegisterUser.module.css";
import { useState } from "react";

const RegisterUser = (props) => {
  const [name, nameChange] = useState("");
  const [age, ageChange] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const userDetails = { name, age };

    props.formHandler(userDetails);
    nameChange("");
    ageChange("");
  };

  const nameChangeHandler = (e) => {
    nameChange(e.target.value);
  };
  const ageChangeHandler = (e) => {
    ageChange(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="username">Username</label>
      <p>
        <input
          type="text"
          id={styles.username}
          onChange={nameChangeHandler}
          value={name}
        />
      </p>
      <label htmlFor="age">Age (Years)</label>
      <p>
        <input
          type="number"
          name="age"
          id={styles.age}
          onChange={ageChangeHandler}
          value={age}
        />
      </p>
      <button type="submit">Add User</button>
    </form>
  );
};

export default RegisterUser;
