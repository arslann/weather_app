import { useContext } from 'react';
import './nextdays.css';
import { Card } from '../../components';
import WeatherContext from '../../context/WeatherContext';

function Nextdays() {
  const { weather } = useContext(WeatherContext);

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

  return (
    <div className="wa__nextdays">
      <Card>
        <div className="wa__nextdays-title">Tomorrow</div>
        <div className="wa__nextdays-img">
          <img
            src={
              weather.forecast &&
              `http:${weather.forecast.forecastday[1].day.condition.icon}`
            }
            alt=""
          />
        </div>
        <div className="wa__nextdays-temp">
          <span>
            {weather.forecast && weather.forecast.forecastday[1].day.maxtemp_c}
            °C
          </span>
          <span>
            {weather.forecast && weather.forecast.forecastday[1].day.mintemp_c}
            °C
          </span>
        </div>
      </Card>
      <Card>
        <div className="wa__nextdays-title">
          {dayOfWeek}, {day} {month}
        </div>
        <div className="wa__nextdays-img">
          <img
            src={
              weather.forecast &&
              `http:${weather.forecast.forecastday[2].day.condition.icon}`
            }
            alt=""
          />
        </div>
        <div className="wa__nextdays-temp">
          <span>
            {weather.forecast && weather.forecast.forecastday[2].day.maxtemp_c}
            °C
          </span>
          <span>
            {weather.forecast && weather.forecast.forecastday[2].day.mintemp_c}
            °C
          </span>
        </div>
      </Card>
      <Card className="hide">
        <div className="wa__nextdays-title">
          {dayOfWeek}, {day} {month}
        </div>
        <div className="wa__nextdays-img">
          <img
            src={
              weather.forecast &&
              `http:${weather.forecast.forecastday[2].day.condition.icon}`
            }
            alt=""
          />
        </div>
        <div className="wa__nextdays-temp">
          <span>
            {weather.forecast && weather.forecast.forecastday[2].day.maxtemp_c}
            °C
          </span>
          <span>
            {weather.forecast && weather.forecast.forecastday[2].day.mintemp_c}
            °C
          </span>
        </div>
      </Card>
      <Card className="hide">
        <div className="wa__nextdays-title">
          {dayOfWeek}, {day} {month}
        </div>
        <div className="wa__nextdays-img">
          <img
            src={
              weather.forecast &&
              `http:${weather.forecast.forecastday[2].day.condition.icon}`
            }
            alt=""
          />
        </div>
        <div className="wa__nextdays-temp">
          <span>
            {weather.forecast && weather.forecast.forecastday[2].day.maxtemp_c}
            °C
          </span>
          <span>
            {weather.forecast && weather.forecast.forecastday[2].day.mintemp_c}
            °C
          </span>
        </div>
      </Card>
      <Card className="hide">
        <div className="wa__nextdays-title">
          {dayOfWeek}, {day} {month}
        </div>
        <div className="wa__nextdays-img">
          <img
            src={
              weather.forecast &&
              `http:${weather.forecast.forecastday[2].day.condition.icon}`
            }
            alt=""
          />
        </div>
        <div className="wa__nextdays-temp">
          <span>
            {weather.forecast && weather.forecast.forecastday[2].day.maxtemp_c}
            °C
          </span>
          <span>
            {weather.forecast && weather.forecast.forecastday[2].day.mintemp_c}
            °C
          </span>
        </div>
      </Card>
    </div>
  );
}

export default Nextdays;
