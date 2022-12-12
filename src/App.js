import { Sidebar } from './components';
import './App.css';
import { Highlights, Nextdays } from './containers';

function App() {
  return (
    <>
      <div className="app">
        <Sidebar></Sidebar>
        <div className="background">
          <Nextdays></Nextdays>
          <Highlights></Highlights>
        </div>
      </div>
    </>
  );
}

export default App;
