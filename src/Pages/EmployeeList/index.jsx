import React, { useState, useEffect } from 'react';
import './employee.css'; // Import the CSS file

const employeesData = [
  {
    id: 1,
    name: 'Hukum',
    email: 'htgupta@cstech.in',
    mobileNo: '954010044',
    designation: 'HR',
    gender: 'Male',
    course: 'MCA',
    createDate: '13-Feb-21',
  },
  {
    id: 1,
    name: 'Manish',
    email: 'manish@cstech.in',
    mobileNo: '954010044',
    designation: 'HR',
    gender: 'Male',
    course: 'MCA',
    createDate: '13-Feb-21',
  },
  {
    id: 1,
    name: 'Yash',
    email: 'yash@cstech.in',
    mobileNo: '954010044',
    designation: 'HR',
    gender: 'Male',
    course: 'MCA',
    createDate: '13-Feb-21',
  },
  {
    id: 1,
    name: 'Abhisek',
    email: 'abhisek@cstech.in',
    mobileNo: '954010044',
    designation: 'HR',
    gender: 'Male',
    course: 'MCA',
    createDate: '13-Feb-21',
  },
  // ... other employees
];

function EmployeeList() {
  const [employees, setEmployees] = useState(employeesData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Employee List</h1>
      <div className="search-bar">
        <input type="text" placeholder="Enter Search Keyword" value={searchTerm} onChange={handleSearch} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Unique Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Create Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{/* Add image component here */}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.mobileNo}</td>
              <td>{employee.designation}</td>
              <td>{employee.gender}</td>
              <td>{employee.course}</td>
              <td>{employee.createDate}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;