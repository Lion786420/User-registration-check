import React from "react";
import RegisterUser from "./components/RegisterUser";
import RegisteredUsers from "./components/RegisteredUsers";
import "./index.css";
import { useState } from "react";

function App() {
  const [allDetails, handleDetails] = useState([]);
  const formHandler = (userDetails) => {
    handleDetails((prevState) => [userDetails, ...prevState]);
    console.log(allDetails);
  };
  return (
    <div>
      <RegisterUser formHandler={formHandler} />
      <RegisteredUsers details={allDetails} />
    </div>
  );
}

export default App;
