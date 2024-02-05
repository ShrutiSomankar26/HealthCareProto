import React, { useState } from 'react';
import backgroundImg from '../images/background.jpg';

const ContactDoctor = () => {
  const departments = [
    'Anaesthetics',
    'Cardiology',
    'Emergency Medicine',
    'General Medicine',
    'General Surgery',
    'Obstetrics and Gynaecology',
    'Paediatrics',
    'Pathology',
    'Psychiatry',
    'Radiology',
    'Trauma and Orthopaedics'
  ];

  const [selectedDepartment, setSelectedDepartment] = useState('');

  const generateContactNumber = () => {
    const prefix = '+919';
    const randomNumber = Math.floor(Math.random() * 900000000) + 100000000;
    return prefix + randomNumber.toString();
  };

  const generateHospitalDetails = () => {
    const hospitals = [
      { name: 'Apollo Hospital', location: 'Chennai' },
      { name: 'Fortis Hospital', location: 'Mumbai' },
      { name: 'AIIMS Hospital', location: 'Delhi' },
      { name: 'Manipal Hospital', location: 'Bangalore' },
      { name: 'Ruby Hall Clinic', location: 'Pune' }
    ];
    const randomHospital = hospitals[Math.floor(Math.random() * hospitals.length)];
    return randomHospital;
  };

  const generateDoctorName = () => {
    const firstNames = ['Dr. Rajesh', 'Dr. Priya', 'Dr. Ashok', 'Dr. Nisha', 'Dr. Sanjay'];
    const lastNames = ['Sharma', 'Patel', 'Kumar', 'Singh', 'Gupta'];
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${randomFirstName} ${randomLastName}`;
  };

  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div style={pageStyle}>
      <div>
        <h2>Contact Hospital Departments</h2>
        <ul>
          {departments.map((department, index) => (
            <li key={index}>
              <input
                type="radio"
                id={department}
                name="department"
                value={department}
                checked={selectedDepartment === department}
                onChange={() => setSelectedDepartment(department)}
              />
              <label htmlFor={department}>{department}</label>
            </li>
          ))}
        </ul>
        {selectedDepartment && (
          <div>
            <h3>{selectedDepartment}</h3>
            <p>Doctor: {generateDoctorName()}</p>
            <p>Hospital: {generateHospitalDetails().name}, {generateHospitalDetails().location}</p>
            <p>Contact: {generateContactNumber()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactDoctor;
