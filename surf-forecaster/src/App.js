import logo from './logo.svg';
import './App.css';
import SurfChart from './components/SurfChart';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
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
