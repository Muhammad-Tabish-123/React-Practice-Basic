import logo from './logo.svg';
import './App.css';
import Heading from './Components/Heading';
import StatePractice1 from './Components/StatePractice1';
import InputState from './Components/InputState';

function App() {
  return (
    <div className="App">
      <StatePractice1/>
      <InputState/>
      {/* <Heading title="This is some text 2"/> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
