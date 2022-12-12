import React from 'react';
import './sidebar.css';

import icon from '../../assets/Shower.png';
import { GoLocation } from 'react-icons/go';

function Sidebar() {
  return (
    <div className="wa__sidebar">
      <div className="wa__sidebar-filter">
        <div className="wa__sidebar-input">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for places"
          />
        </div>
        <div className="wa__sidebar-icon">
          <img src={icon} alt="" />
        </div>

        <div className="wa__sidebar-container">
          <div className="wa__sidebar-container-weather">
            <p>15℃</p>
            <p>Shower</p>
          </div>
          <div className="wa__sidebar-container-date">
            <p>Today - Fri, 5 Jun</p>
          </div>
          <div className="wa__sidebar-container-location">
            <GoLocation />
            <p> Helsinki</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
