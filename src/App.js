// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Dashboard from './components/Dashboard';
import MonitorDiet from './components/MonitorDiet';
import FindActivities from './components/FindActivities';
import MedicationAlarm from './components/MedicationAlarm';
import ContactDoctor from './components/ContactDoctor';

const App = () => {
  return (
    <Router>
      <div>
      <NavigationBar />
        <Routes>
          <Route path="/" element={<Dashboard />} /> {/* Here we use 'element' prop */}
          <Route path="/find-activities" element={<FindActivities />}/>
          <Route path="/medication-alarm" element={<MedicationAlarm />}/>
          <Route path="/monitor-diet" element={<MonitorDiet />} />
          <Route path="/contact-doctor" element={<ContactDoctor />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
