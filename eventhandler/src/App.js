import logo from './logo.svg';
import './App.css';
import Btn from './Components/Btn';
import ModeChanger from './Components/ModeChanger';

const eventHandler= ()=>{
  console.log('Btn Clicked')
}

function App() {
  return (
    <div className="App">
      <h1 style={{color:"red"}}>Event Handler Btn</h1>
      <Btn onClick={eventHandler}/>
      <br/>
      <h1 style={{color:"red"}}>Mode Chnager</h1>
      <ModeChanger/>

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
