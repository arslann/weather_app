import './sidebar.css';
import { useState, useContext } from 'react';
import WeatherContext from '../../context/WeatherContext';

import { GoLocation } from 'react-icons/go';

function Sidebar() {
  const weekday = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

  const date = new Date();
  let day = date.getDay();
  let dayOfWeek = weekday[day];
  var months = [
    'Jan',
    'Feb',
    'March',
    'Apr',
    'May',
    'Jun',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  var month = months[date.getMonth()];

  const { weather, setCity, city } = useContext(WeatherContext);

  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(message);
  };

  return (
    <div className="wa__sidebar">
      <div className="wa__sidebar-filter">
        <div className="wa__sidebar-input">
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input
                placeholder="Search for places"
                type="text"
                name="search"
                id="search"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="wa__sidebar-icon">
          <img
            src={weather.current && `http:${weather.current.condition.icon}`}
            alt=""
          />
        </div>

        <div className="wa__sidebar-container">
          <div className="wa__sidebar-container-weather">
            <p>{weather.current && weather.current.temp_c}℃</p>
            <p>{weather.current && weather.current.condition.text}</p>
          </div>
          <div className="wa__sidebar-container-date">
            <p>
              Today - {dayOfWeek}, {day} {month}
            </p>
          </div>
          <div className="wa__sidebar-container-location">
            <GoLocation />
            <p>{city}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
