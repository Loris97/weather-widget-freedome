export default function DailyForecast({ data }) {
  if (!data) return null;

  // Raggruppa per giorno (prendi una previsione per giorno)
  const dailyData = [];
  const days = new Set();
  
  data.list.forEach(item => {
    const day = new Date(item.dt * 1000).toLocaleDateString('it-IT', { weekday: 'short' });
    if (!days.has(day) && dailyData.length < 5) {
      days.add(day);
      dailyData.push(item);
    }
  });

  return (
    <div className="weather-view daily">
      <h2>Prossimi giorni</h2>
      <div className="forecast-list">
        {dailyData.map((item, index) => {
          const day = new Date(item.dt * 1000).toLocaleDateString('it-IT', { weekday: 'short' });
          return (
            <div key={index} className="forecast-item">
              <p className="day">{day}</p>
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
