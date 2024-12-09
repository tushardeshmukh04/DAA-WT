import React, { useState } from "react";

const ColorBox = ({ color }) => {
  const boxStyle = {
    width: "200px",
    height: "200px",
    backgroundColor: color,
    margin: "20px auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "18px",
    border: "1px solid #000",
  };

  return <div style={boxStyle}>Color: {color}</div>;
};

const ColorChanger = () => {
  const [selectedColor, setSelectedColor] = useState("white");

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Color Changer</h2>
      <label htmlFor="colorSelect">Select a color:</label>
      <select
        id="colorSelect"
        value={selectedColor}
        onChange={handleColorChange}
        style={{ marginLeft: "10px", padding: "5px" }}
      >
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <ColorBox color={selectedColor} />
    </div>
  );
};

export default ColorChanger;

