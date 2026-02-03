export default function HourlyForecast({ data }) {
  if (!data || !data.list || data.list.length === 0) return (
    <div className="weather-view hourly">
      <p>⚠️ Previsioni non disponibili</p>
    </div>
  );


  // Salva le prossime 5 ore (API fornisce ogni 3 ore)
  const hourly = data.list.slice(0, 5);

  return (
    <div className="weather-view hourly">
      <h2>Prossime ore</h2>
      <div className="forecast-list">
        {hourly.map((item, index) => {
          const time = new Date(item.dt * 1000).getHours() + ':00';
          return (
            <div key={index} className="forecast-item">
              <p className="time">{time}</p>
              <img 
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                alt={item.weather[0].description}
              />
              <p className="temp">{Math.round(item.main.temp)}°</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
