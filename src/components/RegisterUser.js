import ErrorGenerator from "./ErrorGenerator";
import styles from "./RegisterUser.module.css";
import { useState } from "react";

const RegisterUser = (props) => {
  const [name, nameChange] = useState("");
  const [age, ageChange] = useState("");
  const [errorMessage, errorUpdate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const userDetails = { name, age };
    if (name.trim().length === 0 || age.trim().length === 0) {
      nameChange("");
      ageChange("");
      errorUpdate("Name and Age field cannot be empty");
      return;
    }
    if (age < 1) {
      nameChange("");
      ageChange("");
      errorUpdate("Age cannot be a negative number");
      return;
    }
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
  const disableError = () => {
    errorUpdate("");
  };

  return (
    <div>
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
      {errorMessage.length === 0 ? null : (
        <ErrorGenerator error={errorMessage} disableError={disableError} />
      )}
    </div>
  );
};

export default RegisterUser;
