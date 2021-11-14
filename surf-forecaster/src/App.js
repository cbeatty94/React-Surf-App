import './App.css';
import SurfChart from './components/SurfChart';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar />
        <div id="cover">
          <img src="images/SurfBuddyCover.jpg" alt="Man Surfing Cover" className="coverImage" />
        </div>
        <SurfChart />
    </div>
  );
}

export default App;
