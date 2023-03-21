import React from "react";

// import Classes from "./index.module.css";

const Input = ({ onChange }) => {
  return (
    <select className="form-select">
      <option onChange={onChange}>Select Number</option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
    </select>
  );
};

export default Input;
