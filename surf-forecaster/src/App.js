import './App.css';
import SurfChart from './components/SurfChart';
import NavBar from './components/NavBar';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
        <NavBar />
        <div id="cover">
          <img src="images/SurfBuddyCover.jpg" alt="Man Surfing Cover" className="coverImage" />
        </div>
        <SurfChart />
        <Weather />
    </div>
  );
}

export default App;
