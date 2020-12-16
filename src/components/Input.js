import React, { useState } from "react";
import "./styles/Input.css";

const Input = ({ setItems }) => {
  const [addItem, setItem] = useState("");

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleClick = (event) => {
    setItems((preValue) => [...preValue, addItem]);
    setItem("");
    event.preventDefault();
  };

  return (
    <div className="input-area">
      <form action="" className="input-item">
        <input
          onChange={handleChange}
          value={addItem}
          className="text-input"
          type="text"
        />
        <button onClick={handleClick} className="submit-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Input;
