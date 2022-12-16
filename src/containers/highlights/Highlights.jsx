import React from 'react';
import { Card } from '../../components';
import './highlights.css';
import { FaLocationArrow } from 'react-icons/fa';

function Highlights() {
  const progressBar = () => {
    return (
      <div class="container">
      <div class="progress2 progress-moved">
        <div class="progress-bar2"></div>
      </div>
    </div>
    );
  };

  return (
    <div className="wa__highlights">
      <div className="wa__highlights-text">Today’s Hightlights</div>
      <div className="wa__highlights-container">
        <Card className="wa__highlights-card">
          <div className="wa__highlights-card-title">
            <span>Wind status</span>
          </div>
          <div className="wa__highlights-card-text">
            <span>7mph</span>
          </div>

          <div className="wa__highlights-wind">
            <FaLocationArrow />
            <span>WSW</span>
          </div>
        </Card>
        <Card className="wa__highlights-card">
          <div className="wa__highlights-card-title">
            <span>Humidity</span>
          </div>
          <div className="wa__highlights-card-text">
            <span>84%</span>
          </div>
          {progressBar()}
        </Card>
        <Card className="wa__highlights-card">
          <div className="wa__highlights-card-title">
            <span>Visibility</span>
          </div>
          <div className="wa__highlights-card-text">
            <span>6,4 miles</span>
          </div>
        </Card>
        <Card className="wa__highlights-card">
          <div className="wa__highlights-card-title">
            <span>Air Pressure</span>
          </div>
          <div className="wa__highlights-card-text">
            <span>998 mb </span>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Highlights;
