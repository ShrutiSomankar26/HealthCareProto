import React, { useState } from 'react';
import walkingImage from '../images/walking.jpg';
import chairExerciseImage from '../images/chair-exercise.jpg';
import fictionBookImage from '../images/fiction-book.jpg';
import nonFictionBookImage from '../images/nonfiction-book.jpg';
import classicBookImage from '../images/classic-book.jpg';
import backgroundImg from '../images/background.jpg'; // Assuming you have a background image

const FindActivities = () => {
  const [activityType, setActivityType] = useState('walking');
  const [activityDuration, setActivityDuration] = useState(15);
  const [dailyStepsGoal, setDailyStepsGoal] = useState(5000);
  const [activityCompleted, setactivityCompleted] = useState(false);

  const handleActivityTypeChange = (type) => {
    setActivityType(type);
  };

  const handleActivityDurationChange = (e) => {
    setActivityDuration(e.target.value);
  };

  const handleDailyStepsGoalChange = (e) => {
    setDailyStepsGoal(e.target.value);
  };

  const handleSave = () => {
    console.log(`Saved ${activityDuration} ${activityType} and daily goal: ${dailyStepsGoal} steps.`);
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

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
  };

  const contentStyle = {
    maxWidth: '800px',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    padding: '20px',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '20px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const checkboxStyle = {
    marginBottom: '20px',
  };

  const titleStyle = {
    fontSize: '3rem',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '20px',
  };

  const bookStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    backgroundColor: '#fff',
    marginBottom: '10px',
    cursor: 'pointer',
  };

  const bookImageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '10px',
  };

  const buttonText = {
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '5px',
  };

  return (
    <div style={pageStyle}>
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>{activityType === 'walking' ? 'Walking' : activityType === 'exercise' ? 'Exercise and Yoga' : 'Reading Books'}</h1>
        {activityType === 'walking' && <img src={walkingImage} alt="Walking" style={imageStyle} />}
        {activityType === 'exercise' && <img src={chairExerciseImage} alt="Chair Exercise" style={imageStyle} />}
        <div>
          <label htmlFor="activityType">Select Activity Type:</label>
          <select id="activityType" value={activityType} onChange={(e) => handleActivityTypeChange(e.target.value)} style={inputStyle}>
            <option value="walking">Walking</option>
            <option value="exercise">Exercise and Yoga</option>
            <option value="reading">Reading Books</option>
          </select>
        </div>
        {activityType === 'exercise' && (
          <div>
            <label htmlFor="activityDuration">Enter duration (minutes)</label>
            <input type="number" id="activityDuration" value={activityDuration} onChange={handleActivityDurationChange} style={inputStyle} />
            <div style={{ marginTop: '30px' }}>
              <h2>Recommended Exercises</h2>
              <p><strong>Abdominal contractions</strong></p>
              <p>To increase strength in the abdominal muscles</p>
              <p>Hold for 3 breaths and then release the contraction. Repeat 10 times.</p>

              <p><strong>Wall pushups</strong></p>
              <p>To increase strength in the chest and shoulders</p>
              <p>Repeat 10 times.</p>

              <p><strong>Pelvic tilts</strong></p>
              <p>To strengthen and stretch muscles in the lower back</p>
              <p>Repeat 8 to 12 times.</p>

              <p><strong>Shoulder blade squeeze</strong></p>
              <p>To strengthen postural muscles and stretch the chest</p>
              <p>Repeat 8 to 12 times.</p>

              <p><strong>To get more exercises and their descriptions, visit the original source.</strong></p>
            </div>
          </div>
        )}
        {activityType === 'walking' && (
          <div>
            <label htmlFor="dailyStepsGoal">Set Daily Steps Goal:</label>
            <input type="number" id="dailyStepsGoal" value={dailyStepsGoal} onChange={handleDailyStepsGoalChange} style={inputStyle} />
          </div>
        )}
         {activityType === 'reading' && (
          <div style={buttonContainerStyle}>
            <a href="https://www.readanybook.online/genre/fiction-17" style={bookStyle}>
              <img src={fictionBookImage} alt="Fiction Books" style={bookImageStyle} />
              <div style={buttonText}>Fiction Books</div>
            </a>
            <a href="https://www.readanybook.online/genre/nonfiction-16" style={bookStyle}>
              <img src={nonFictionBookImage} alt="Non-Fiction Books" style={bookImageStyle} />
              <div style={buttonText}>Non-Fiction Books</div>
            </a>
            <a href="https://www.readanybook.online/genre/classic-14" style={bookStyle}>
              <img src={classicBookImage} alt="Classic Books" style={bookImageStyle} />
              <div style={buttonText}>Classic Books</div>
            </a>
          </div>
        )}

        <button onClick={handleSave} style={buttonStyle}>Save</button>
        <div style={checkboxStyle}>
          <label>
            <input type="checkbox" checked={activityCompleted} onChange={() => setactivityCompleted(!activityCompleted)} /> Mark Activity as completed
          </label>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FindActivities;
