import React, { useState } from "react";

const GreetingMessage = ({ name }) => {
  return <h2>Hello, {name}!</h2>;
};

const GreetingApp = () => {
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Personalized Greeting</h1>
      <label htmlFor="nameInput">Enter your name:</label>
      <input
        id="nameInput"
        type="text"
        value={name}
        onChange={handleInputChange}
        style={{ marginLeft: "10px", padding: "5px" }}
        placeholder="Enter your name"
      />
      {name && <GreetingMessage name={name} />}
    </div>
  );
};

export default GreetingApp;
