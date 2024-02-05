import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import monitorDietIcon from '../images/monitor-diet-icon.png';
import findActivitiesIcon from '../images/find-activities-icon.png';
import medicationAlarmIcon from '../images/medication-alarm-icon.png';
import contactDoctorIcon from '../images/contact-doctor-icon.png';
import backgroundImg from '../images/background.jpg'; // Assuming you have a background image

const Dashboard = () => {
  const [medicationReminders, setMedicationReminders] = useState([]);
  const [activitiesChosen, setActivitiesChosen] = useState([]);

  // Function to add medication reminder
  const addMedicationReminder = (reminder) => {
    setMedicationReminders([...medicationReminders, reminder]);
  };

  // Function to add chosen activity
  const addChosenActivity = (activity) => {
    setActivitiesChosen([...activitiesChosen, activity]);
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

  const dashboardStyle = {
    maxWidth: '800px',
    width: '100%', // Ensure the dashboard takes the full width of the page
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
    marginBottom: '20px'
  };

  const titleStyle = {
    fontSize: '3rem',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
    fontFamily: 'Gill Sans', // Choose a suitable font family
    textTransform: 'uppercase', // Convert title text to uppercase
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' // Add a shadow effect to the title text
  };

  const featureLinksStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gridGap: '20px'
  };

  const featureLinkStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    backgroundColor: '#fff',
    padding: '20px',
    textAlign: 'center'
  };

  const buttonImageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px 10px 0 0'
  };

  const buttonTextContainer = {
    marginTop: '10px',
    color: '#333', // Button text color
    textDecoration: 'none', // Remove underline
    cursor: 'pointer', // Show pointer cursor on hover
    fontWeight: 'bold', // Make the text bold
    transition: 'color 0.3s ease', // Smooth color transition on hover
    textAlign: 'center' // Center the text horizontally
  };

  return (
    <div style={pageStyle}>
      <div style={dashboardStyle}>
        <h1 style={titleStyle}>Healthcare Dashboard</h1>
        <div style={featureLinksStyle}>
          <Link to="/monitor-diet" style={featureLinkStyle}>
            <img src={monitorDietIcon} alt="Monitor Diet" style={buttonImageStyle} />
            <div style={buttonTextContainer}>Monitor Diet</div>
          </Link>
          <Link to="/find-activities" style={featureLinkStyle}>
            <img src={findActivitiesIcon} alt="Find Activities/Hobbies" style={buttonImageStyle} />
            <div style={buttonTextContainer}>Find Activities/Hobbies</div>
          </Link>
          <Link to="/medication-alarm" style={featureLinkStyle}>
            <img src={medicationAlarmIcon} alt="Medication Alarm" style={buttonImageStyle} />
            <div style={buttonTextContainer}>Medication Alarm</div>
          </Link>
          <Link to="/contact-doctor" style={featureLinkStyle}>
            <img src={contactDoctorIcon} alt="Contact Doctor" style={buttonImageStyle} />
            <div style={buttonTextContainer}>Contact Doctor</div>
          </Link>
        </div>
      </div>
      <div>
        <h2>Medication Reminders</h2>
        <ul>
          {medicationReminders.map((reminder, index) => (
            <li key={index}>{reminder}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Activities Chosen</h2>
        <ul>
          {activitiesChosen.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
