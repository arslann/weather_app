import { Sidebar } from './components';
import './App.css';
import { Highlights, Nextdays } from './containers';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <div className="app">
        <Sidebar></Sidebar>
        <div className="background">
          <Nextdays></Nextdays>
          <Highlights></Highlights>
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;
