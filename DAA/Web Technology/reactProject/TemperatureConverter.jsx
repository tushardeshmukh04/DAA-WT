import React, { useState } from "react";

const TemperatureDisplay = ({ fahrenheit }) => {
  return <h3>Fahrenheit: {fahrenheit}°F</h3>;
};

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");

  const handleInputChange = (e) => {
    setCelsius(e.target.value);
  };

  const convertToFahrenheit = (celsius) => {
    return ((parseFloat(celsius) * 9) / 5 + 32);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "300px", margin: "auto" }}>
      <h2>Temperature Converter</h2>
      <label htmlFor="celsius">Enter Celsius:</label>
      <input
        id="celsius"
        type="number"
        value={celsius}
        onChange={handleInputChange}
        style={{ marginLeft: "10px", padding: "5px" }}
      />
      <TemperatureDisplay fahrenheit={celsius ? convertToFahrenheit(celsius) : "0"} />
    </div>
  );
};

export default TemperatureConverter;
