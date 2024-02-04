import logo from './logo.svg';
import './App.css';
import Bag from './components/Bag';
import Apple from './components/Apple';
import Pears from './components/Pears';

function Header(props){
  return(
    <h1>{props.content}</h1>
  );
}

function App() {
  return (
    <div className="App">
      <Header content="This is content props" />
      <Header content="This is content props" />
      <Bag children={<div><Apple color="yellow" number="5"/><Pears friend="Peter"/></div>} />

      <Bag>
        <div>
          <Apple color="yellow" number="5"/>
          <Pears friend="Peter"/>
          </div>
      </Bag> 
    
    </div>
  );
}

export default App;
