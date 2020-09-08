import React,{useState} from 'react';
import './App.css';

function App() {

  const [todos,setTodos] = useState(['Get done with React','Get done with Springboot'])
  return (
    <div className="App">
        <h1>Hello Chiti Bhagi Suman</h1>
        <input />
        <button> Add Todo </button>
        <ul>
          {todos.map(todo => (
            <li>{todo}</li>
          ))}
        </ul>
.    </div>
  );
}

export default App;
