import { useState, useEffect } from 'react';
import { fetchCurrentWeather, fetchForecast } from '../utils/api';

export const useWeatherData = (location) => {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [currentData, forecastData] = await Promise.all([
          fetchCurrentWeather(location),
          fetchForecast(location)
        ]);
        setCurrent(currentData);
        setForecast(forecastData);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, [location]);

  return { current, forecast, loading, error };
};
