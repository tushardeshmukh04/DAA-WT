import React, { useState } from "react";

const ControlButtons = ({ step, onIncrement, onDecrement }) => {
  return (
    <div>
      <button
        onClick={onIncrement}
        style={{
          margin: "5px",
          padding: "10px",
          cursor: "pointer",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Increment by {step}
      </button>
      <button
        onClick={onDecrement}
        style={{
          margin: "5px",
          padding: "10px",
          cursor: "pointer",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Decrement by {step}
      </button>
    </div>
  );
};

const CounterWithStep = () => {
  const [count, setCount] = useState(0);
  const step = 5; // Step value can be changed as needed

  const increment = () => {
    setCount((prevCount) => prevCount + step);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - step);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Counter with Step</h1>
      <h2>Current Count: {count}</h2>
      <ControlButtons step={step} onIncrement={increment} onDecrement={decrement} />
    </div>
  );
};

export default CounterWithStep;
