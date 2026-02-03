import './App.css';
import WeatherWidget from './components/WeatherWidget';

function App() {
  return (
    <div className="App">
      <WeatherWidget location="Coimbra,PT" />
    </div>
  );
}

export default App;
