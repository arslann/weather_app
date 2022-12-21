import { useContext } from 'react';
import WeatherContext from '../../context/WeatherContext';
import { Card } from '../../components';
import './highlights.css';
import { FaLocationArrow } from 'react-icons/fa';

function Highlights() {
  const { weather } = useContext(WeatherContext);

  const progressBar = () => {
    return (
      <div class="container">
        <div class="progress2 progress-moved">
          <div
            class="progress-bar2"
            style={{ width: weather.current && weather.current.humidity + '%' }}
          ></div>
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
            <span>{weather.current && weather.current.wind_kph} kmp</span>
          </div>

          <div className="wa__highlights-wind">
            <FaLocationArrow />
            <span>{weather.current && weather.current.wind_dir}</span>
          </div>
        </Card>
        <Card className="wa__highlights-card">
          <div className="wa__highlights-card-title">
            <span>Humidity</span>
          </div>
          <div className="wa__highlights-card-text">
            <span>{weather.current && weather.current.humidity} %</span>
          </div>
          {progressBar()}
        </Card>
        <Card className="wa__highlights-card hide">
          <div className="wa__highlights-card-title">
            <span>Visibility</span>
          </div>
          <div className="wa__highlights-card-text">
            <span>{weather.current && weather.current.vis_km} km</span>
          </div>
        </Card>
        <Card className="wa__highlights-card hide">
          <div className="wa__highlights-card-title">
            <span>Air Pressure</span>
          </div>
          <div className="wa__highlights-card-text">
            <span>{weather.current && weather.current.pressure_mb} mb </span>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Highlights;
