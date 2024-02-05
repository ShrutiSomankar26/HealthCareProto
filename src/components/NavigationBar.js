import React from 'react';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
  const navStyle = {
    backgroundColor: '#333',
    padding: '10px 20px',
  };

  const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  };

  const liStyle = {
    display: 'inline',
    marginRight: '20px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
    padding: '5px 10px',
    borderRadius: '5px',
  };

  const activeLinkStyle = {
    backgroundColor: '#555',
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <NavLink to="/" style={linkStyle} activeClassName="active" activeStyle={activeLinkStyle}>Home</NavLink>
        </li>
        <li style={liStyle}>
          <NavLink to="/find-activities" style={linkStyle} activeClassName="active" activeStyle={activeLinkStyle}>Find Activities</NavLink>
        </li>
        <li style={liStyle}>
          <NavLink to="/medication-alarm" style={linkStyle} activeClassName="active" activeStyle={activeLinkStyle}>Medication Alarm</NavLink>
        </li>
        <li style={liStyle}>
          <NavLink to="/monitor-diet" style={linkStyle} activeClassName="active" activeStyle={activeLinkStyle}>Monitor Diet</NavLink>
        </li>
        <li style={liStyle}>
          <NavLink to="/contact-doctor" style={linkStyle} activeClassName="active" activeStyle={activeLinkStyle}>Contact Doctor</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
