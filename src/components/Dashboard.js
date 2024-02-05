import React from 'react';
import { Link } from 'react-router-dom';
import monitorDietIcon from '../images/monitor-diet-icon.png';
import findActivitiesIcon from '../images/find-activities-icon.png';
import medicationAlarmIcon from '../images/medication-alarm-icon.png';
import contactDoctorIcon from '../images/contact-doctor-icon.png';
import backgroundImg from '../images/background.jpg'; // Assuming you have a background image

const Dashboard = () => {

  const medicationReminders = [
    { name: "TusQ", time: "9:30 AM" },
    { name: "TusQ", time: "1:30 PM" },
    { name: "TusQ", time: "9:30 PM" }
  ];

  const activity = {
    walking: 5000,
    exercise: 45,
    bookRead: "Atomic Habits",
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

  const dashboardStyle = {
    maxWidth: '800px',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    padding: '20px'
  };

  const titleStyle = {
    fontSize: '3rem',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
    fontFamily: 'Gill Sans',
    textTransform: 'uppercase',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
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
    color: '#333',
    textDecoration: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
    textAlign: 'center'
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
        <div style={{ marginTop: '40px', color: '#333' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '10px', textAlign: 'center' }}>Activity Tracker</h2>
          <div style={{ textAlign: 'center' }}>
            <p><b>Walking: {activity.walking} steps</b></p>
            <p><b>Exercise: {activity.exercise} minutes</b></p>
            <p><b>Book Read: {activity.bookRead}</b></p>
          </div>
        </div>
        <div style={{ marginTop: '40px', color: '#333' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '10px', textAlign: 'center' }}>Medication Reminders</h2>
          <ul style={{ listStyleType: 'none', padding: '0', textAlign: 'center' }}>
            {medicationReminders.map((reminder, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                <strong>{reminder.name}</strong> - {reminder.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
