import React, { useState } from 'react';
import './EmployeeForm.css'; 

const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome to the Employee Form</h1>
      <p>Please fill out the form below to add a new employee.</p>
      <EmployeeForm />
    </div>
  );
}

function EmployeeForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [designation, setDesignation] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState([]);
  const [imgUpload, setImgUpload] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'mobileNo':
        setMobileNo(value);
        break;
      case 'designation':
        setDesignation(value);
        break;
      case 'gender':
        setGender(value);
        break;
      case 'course':
        setCourse([...course, value]);
        break;
      case 'imgUpload':
        setImgUpload(event.target.files[0]);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log({ name, email, mobileNo, designation, gender, course, imgUpload });
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" value={name} onChange={handleInputChange} required />

      <label>Email</label>
      <input type="email" name="email" value={email} onChange={handleInputChange} required />

      <label>Mobile No</label>
      <input type="tel" name="mobileNo" value={mobileNo} onChange={handleInputChange} required />

      <label>Designation</label>
      <select name="designation" value={designation} onChange={handleInputChange} required>
        <option value="">Select Designation</option>
        <option value="HR">HR</option>
        <option value="Manager">Manager</option>
        <option value="Sales">Sales</option>
      </select>

      <label>Gender</label>
      <div>
        <input type="radio" name="gender" value="M" checked={gender === 'M'} onChange={handleInputChange} /> Male
        <input type="radio" name="gender" value="F" checked={gender === 'F'} onChange={handleInputChange} /> Female
      </div>

      <label>Course</label>
      <div>
        <input type="checkbox" name="course" value="MCA" checked={course.includes('MCA')} onChange={handleInputChange} /> MCA
        <input type="checkbox" name="course" value="BCA" checked={course.includes('BCA')} onChange={handleInputChange} /> BCA
        <input type="checkbox" name="course" value="BSC" checked={course.includes('BSC')} onChange={handleInputChange} /> BSC
      </div>

      <label>Img Upload</label>
      <input type="file" name="imgUpload" accept="image/jpeg, image/png" onChange={handleInputChange} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default WelcomePage;