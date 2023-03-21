import React, { useState, useEffect } from "react";

import axios from "axios";
import Input from "../../ui/select_input";

const Table = () => {
  const [employedetails, setEmployeDetails] = useState([]);

  const [dataPerPage, SetDataPerPage] = useState(5);

  const fetchData = () => {
    axios
      .get("https://hub.dummyapis.com/employee?noofRecords=50&idStarts=1001")
      .then((res) => {
        setEmployeDetails(res.data);
        console.log(employedetails);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onShowsizeChangeHandler = (e) => {
    SetDataPerPage(pageSize);
  };

  return (
    <>
      <h3> Table Data</h3>
      <Input onChange={onShowsizeChangeHandler} />
      <table>
        <thead>
          <th>Id</th>

          <th>Name</th>
          <th>Contact Number</th>
          <th>Email</th>
          <th>DOB</th>
          <th></th>
        </thead>
        <tbody>
          {employedetails.map((employees) => (
            <tr key={employees.id}>
              <td>{employees.id}</td>
              <td>{`${employees.firstName} ${employees.lastName}`}</td>
              <td>{employees.contactNumber}</td>
              <td>{employees.email}</td>
              <td>{employees.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Table;
