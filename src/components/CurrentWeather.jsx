export default function CurrentWeather({ data }) {
  if (!data) return null;

  return (
    <div className="weather-view current">
      <h1 className="temperature">{Math.round(data.main.temp)}°</h1>
      <p className="location">{data.name}, {data.sys.country}</p>
      <div className="icon">
        <img 
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
        />
      </div>
      <p className="description">{data.weather[0].description}</p>
    </div>
  );
}
