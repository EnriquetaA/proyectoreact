import { useState } from "react";
import "./Count.css";

export const Count = ({ btnText, onConfirm }) => {
  const [Count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const confirm = () => {
    if (Count > 0) {
      onConfirm(Count);
    }
  };

  return (
    <div className="Count-container">
      <div className="Count-buttons">
        <button className="btn" onClick={decrement} disabled={Count === 0}>
          -
        </button>
        <span>{Count}</span>
        <button className="btn" onClick={increment}>
          +
        </button>
      </div>

      <button className="btn btn-add" onClick={confirm} disabled={Count === 0}>
        {btnText}
      </button>
    </div>
  );
};