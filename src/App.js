import React from "react";
import RegisterUser from "./components/RegisterUser";
import RegisteredUsers from "./components/RegisteredUsers";
import "./index.css";
import { useState } from "react";

function App() {
  const [allDetails, handleDetails] = useState([]);
  const formHandler = (userDetails) => {
    handleDetails((prevState) => [userDetails, ...prevState]);
  };
  return (
    <div>
      <RegisterUser formHandler={formHandler} />
      {allDetails.length === 0 ? null : (
        <RegisteredUsers details={allDetails} />
      )}
    </div>
  );
}

export default App;
