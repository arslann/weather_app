import { createContext, useState, useEffect, useCallback } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState('istanbul');
  const [weather, setWeather] = useState({});

  const fetchWeather = useCallback(async () => {
    const response =
      await fetch(`https://api.weatherapi.com/v1/forecast.json?key=13d8fa5f20674ebd9d9111535221912&q=${city}&days=5&aqi=no&alerts=no
    `);

    const data = await response.json();

    setWeather(data);
    console.log(data);
  }, [city]);

  useEffect(() => {
    fetchWeather();
  }, [city, fetchWeather]);

  // const fetchWeather = async () => {
  //   const response =
  //     await fetch(`http://api.weatherapi.com/v1/forecast.json?key=13d8fa5f20674ebd9d9111535221912&q=${city}&days=5&aqi=no&alerts=no
  //   `);

  //   const data = await response.json();

  //   setWeather(data);
  //   console.log(data);
  // };

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
