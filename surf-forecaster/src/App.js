import './App.css';
import SurfChart from './components/SurfChart';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar />
        <img src="images/SurfBuddyCover.jpg" alt="Man Surfing Cover" className="coverImage" />
        <p>
          Surf Forecaster bitches!
        </p>
        <p>
          Let's get this shit :D
        </p>
        <SurfChart />
    </div>
  );
}

export default App;
