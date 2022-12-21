import { createContext, useState, useEffect } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState('istanbul');
  const [weather, setWeather] = useState({});

  //Fetch weather
  const fetchWeather = async () => {
    const response =
      await fetch(`http://api.weatherapi.com/v1/forecast.json?key=13d8fa5f20674ebd9d9111535221912&q=${city}&days=5&aqi=no&alerts=no
    `);

    const data = await response.json();

    setWeather(data);
    console.log(data);
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <WeatherContext.Provider
      value={{
        weather,
        setCity,
        city,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
