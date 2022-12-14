import React from 'react';
import './nextdays.css';
import { Card } from '../../components';
import icon from '../../assets/LightRain.png';
import icon2 from '../../assets/Thunderstorm.png';
import icon3 from '../../assets/Snow.png';
import icon4 from '../../assets/Shower.png';

function Nextdays() {
  return (
    <div className="wa__nextdays">
      <Card>
        <div className="wa__nextdays-title">Tomorrow</div>
        <div className="wa__nextdays-img">
          <img src={icon} alt="" />
        </div>
        <div className="wa__nextdays-temp">
          <span>16°C</span>
          <span>11°C</span>
        </div>
      </Card>
      <Card>
        <div className="wa__nextdays-title">Sun, 7 Jun</div>
        <div className="wa__nextdays-img">
          <img src={icon2} alt="" />
        </div>
        <div className="wa__nextdays-temp">
          <span>16°C</span>
          <span>11°C</span>
        </div>
      </Card>
      <Card>
        <div className="wa__nextdays-title">Mon, 8 Jun</div>
        <div className="wa__nextdays-img">
          <img src={icon4} alt="" />
        </div>
        <div className="wa__nextdays-temp">
          <span>16°C</span>
          <span>11°C</span>
        </div>
      </Card>
      <Card>
        <div className="wa__nextdays-title">Tue, 9 Jun</div>
        <div className="wa__nextdays-img">
          <img src={icon4} alt="" />
        </div>
        <div className="wa__nextdays-temp">
          <span>16°C</span>
          <span>11°C</span>
        </div>
      </Card>
      <Card>
        <div className="wa__nextdays-title">Wed, 10 Jun</div>
        <div className="wa__nextdays-img">
          <img src={icon4} alt="" />
        </div>
        <div className="wa__nextdays-temp">
          <span>16°C</span>
          <span>11°C</span>
        </div>
      </Card>
    </div>
  );
}

export default Nextdays;
