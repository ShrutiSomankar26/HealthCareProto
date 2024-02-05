import React, { useState } from 'react';

import backgroundImg from '../images/background.jpg'; // Assuming you have a background image

const MedicationReminder = () => {
  const [medicationName, setMedicationName] = useState('');
  const [time, setTime] = useState('');
  const [medications, setMedications] = useState([]);

  const handleMedicationNameChange = (e) => {
    setMedicationName(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleAddMedication = () => {
    if (medicationName.trim() === '' || time.trim() === '') {
      alert('Please enter both medication name and time.');
      return;
    }

    const newMedication = {
      name: medicationName,
      time: time,
      taken: false,
    };

    setMedications([...medications, newMedication]);
    setMedicationName('');
    setTime('');
  };

  const handleRemoveMedication = (index) => {
    const updatedMedications = [...medications];
    updatedMedications.splice(index, 1);
    setMedications(updatedMedications);
  };

  const handleMarkAsTaken = (index) => {
    const updatedMedications = [...medications];
    updatedMedications[index].taken = true;
    setMedications(updatedMedications);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
  };

  const medicationsContainerStyle = {
    maxWidth: '600px',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    padding: '20px',
  };

  const subtitleStyle = {
    fontSize: '1.5rem',
    marginBottom: '10px',
    textAlign: 'center',
  };

  const medicationsListStyle = {
    listStyleType: 'none',
    padding: '0',
  };

  const medicationItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ccc',
    padding: '10px 0',
  };

  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Ensure the page takes at least the full viewport height
    padding: '20px',
    backgroundImage: `url(${backgroundImg})`, // Set background image
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  const removeButtonStyle = {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const takenButtonStyle = {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    marginRight: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const takenTextStyle = {
    color: '#28a745',
    fontWeight: 'bold',
  };

  return (
    <div style={pageStyle}>
    <div style={containerStyle}>
      <div style={medicationsContainerStyle}>
        <h2 style={subtitleStyle}>Medication Reminder</h2>
        <div>
          <label htmlFor="medication">Medication:</label>
          <input type="text" id="medication" value={medicationName} onChange={handleMedicationNameChange} style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" value={time} onChange={handleTimeChange} style={{ marginLeft: '10px' }} />
        </div>
        <button onClick={handleAddMedication} style={{ marginLeft: '10px', marginTop: '10px' }}>Add Medication</button>
      </div>
      <div style={medicationsContainerStyle}>
        <h2 style={subtitleStyle}>Medications:</h2>
        <ul style={medicationsListStyle}>
          {medications.map((medication, index) => (
            <li key={index} style={medicationItemStyle}>
              <div>
                {medication.name} - {medication.time}
              </div>
              <div>
                {!medication.taken ? (
                  <button onClick={() => handleMarkAsTaken(index)} style={takenButtonStyle}>Mark as Taken</button>
                ) : (
                  <span style={takenTextStyle}>Taken</span>
                )}
                <button onClick={() => handleRemoveMedication(index)} style={removeButtonStyle}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default MedicationReminder;
