import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import { useState } from 'react';


const Hello=()=>{
  return <h1>Hello</h1>
}

const ToDo=(props)=>{
  {console.log(props)}  
  return(
    <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input key={props.key}/>
    </td>
    <td>
      <lable>{props.createdAt}</lable>
    </td>
  </tr>
  );
}


function App() {
  // console.log(useState())
  const [todos,setTodos]=useState([{
    id:'todo1',
    createdAt:'18:00',
  },{
    id:'todo2',
    createdAt:'20:30',
  }]);

  const reverseOrder=()=>{
    setTodos([...todos].reverse());
  }
  return (
    <div className="App">
      <Heading />
      <Hello/>
      <button onClick={reverseOrder}>Reverse</button>
      
      <table>
        <tbody>
          {
            todos.map((todo,index)=>(
              <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt}/>
              ))
          }
              {/* <ToDo id={todos[0].id} createdAt={todos[0].createdAt}/> */}

        </tbody>
      </table>
    </div>
  );
}

export default App;
