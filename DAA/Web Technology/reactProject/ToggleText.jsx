import React, { useState } from "react";

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Toggle Text</h1>
      <button
        onClick={handleToggle}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          cursor: "pointer",
          backgroundColor: isVisible ? "red" : "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {isVisible ? "Hide" : "Show"} Text
      </button>
      {isVisible && <p style={{ fontSize: "18px" }}>Hello, World!</p>}
    </div>
  );
};

export default ToggleText;
