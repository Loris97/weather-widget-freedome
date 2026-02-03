import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import CurrentWeather from './CurrentWeather';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';
import { useWeatherData } from '../hooks/useWeatherData';

export default function WeatherWidget({ location = 'Milan' }) {
  const [currentView, setCurrentView] = useState(0);
  const { current, forecast, loading, error } = useWeatherData(location);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentView(prev => Math.min(prev + 1, 2)),
    onSwipedRight: () => setCurrentView(prev => Math.max(prev - 1, 0)),
    trackMouse: true
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const views = [
    <CurrentWeather data={current} />,
    <HourlyForecast data={forecast} />,
    <DailyForecast data={forecast} />
  ];

  return (
    <div {...handlers} className="weather-widget">
      {views[currentView]}
      <div className="dots">
        {[0, 1, 2].map(i => (
          <span key={i} className={i === currentView ? 'active' : ''} />
        ))}
      </div>
    </div>
  );
}
