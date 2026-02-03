import './App.css';
import WeatherWidget from './components/WeatherWidget';

function App() {
  return (
    <div className="App">
      <WeatherWidget location="Malaga,ES" />
    </div>
  );
}

export default App;
