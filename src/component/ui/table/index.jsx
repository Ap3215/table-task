import React from "react";

import classes from "./index.module.css";

const Table = ({ headings, title, children }) => {
  return (
    <div className={classes["table"]}>
      <h3 className={classes["table-title"]}>{title}</h3>
      <table>
        <thead>
          <tr>
            {headings.map((heading) => (
              <th key={heading}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};
export default Table;
