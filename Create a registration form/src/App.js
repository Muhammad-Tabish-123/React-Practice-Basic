import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import { useState } from 'react';
import { useRef } from 'react';

const Form = () => { 
 const [value, setValue] = useState(""); 

 const handleChange = (e) => { 
   setValue(e.target.value) 
 } 

 return ( 
   <form> 
     <input 
       value={value} 
       onChange={handleChange} 
       type="text" 
     /> 
   </form> 
 ); 
}; 

const FileForm = () => { 
  const fileInput = useRef(null); 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    const files = fileInput.current.files;
    console.log(files) 
    // Do something with the files here 
  } 
 
  return ( 
    <form onSubmit={handleSubmit}> 
      <input 
        ref={fileInput} 
        type="file" 
      />
      <input type="submit" value="submit"/> 
    </form> 
  ); 
 }; 

function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <Form/>
      <FileForm/>

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
