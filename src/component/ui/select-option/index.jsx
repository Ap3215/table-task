import React from "react";

import classes from "./index.module.css";

const SelectOption = ({ onChange, options }) => {
  return (
    <select onChange={onChange} className={classes["select-option"]}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectOption;
