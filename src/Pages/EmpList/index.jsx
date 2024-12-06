import React, { useState, useEffect } from 'react';
import './list.css'; // Import the CSS file

const initialEmployeeData = {
  name: 'Hukum',
  email: 'hcgupta@cstech.in',
  mobileNo: '954010044',
  designation: 'HR',
  gender: 'M',
  course: ['MCA'],
  imgUpload: null,
};

function EmployeeEdit({ employeeId }) {
  const [employeeData, setEmployeeData] = useState(initialEmployeeData);

  useEffect(() => {
    // Fetch employee data based on employeeId (if not provided, use initial data)
  }, [employeeId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  const handleImageUpload = (event) => {
    setEmployeeData({
      ...employeeData,
      imgUpload: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic (e.g., update employee data)
    console.log(employeeData);
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={employeeData.name}
        onChange={handleInputChange}
        required
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={employeeData.email}
        onChange={handleInputChange}
        required
      />

      {/* ... other fields ... */}

      <label>Img Upload</label>
      <input
        type="file"
        name="imgUpload"
        accept="image/jpeg, image/png"
        onChange={handleImageUpload}
      />

      <button type="submit">Update</button>
    </form>
  );
}

export default EmployeeEdit;