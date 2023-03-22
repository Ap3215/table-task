import React, { useState, useEffect } from "react";

import axios from "axios";

import Table from "../../ui/table";
import SelectOption from "../../ui/select-option";

import classes from "./index.module.css";

const options = ["Select Number", "5", "10", "15", "20"];
const headings = ["Id", "Image", "Name", "ContactNumber", "Email", "DOB"];

const TableData = () => {
  const [employedetails, setEmployeDetails] = useState([]);
  const [dataPerPage, setDataPerPage] = useState(5);

  const fetchData = () => {
    axios
      .get(
        `https://hub.dummyapis.com/employee?noofRecords=${dataPerPage}&idStarts=1001`
      )
      .then((res) => {
        setEmployeDetails(res.data);
        console.log(employedetails);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const onSizeChangeHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value !== "Select Number") {
      setDataPerPage(e.target.value);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(dataPerPage);
  }, [dataPerPage]);

  return (
    <>
      <SelectOption onChange={onSizeChangeHandler} options={options} />

      <Table headings={headings} title="Employee Data">
        {employedetails.map((employees) => (
          <tr key={employees.id}>
            <td>{employees.id}</td>
            <td>
              <img
                className={classes["table--image"]}
                src={employees.imageUrl}
                alt="data"
              />
            </td>
            <td>{`${employees.firstName} ${employees.lastName}`}</td>
            <td>{employees.contactNumber}</td>
            <td>{employees.email}</td>
            <td>{employees.dob}</td>
          </tr>
        ))}
      </Table>
    </>
  );
};
export default TableData;
