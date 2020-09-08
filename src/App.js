import React,{useState} from 'react';
import './App.css';

function App() {

  const [todos,setTodos] = useState(['Get done with React','Get done with Springboot'])
  const [input,setInput] = useState('')
  const addTodo = (event) => {
      setTodos([...todos,input])
  }
  return (
    <div className="App">
        <h1>Hello Rahul </h1>
        <input value={input} onChange={event => setInput(event.target.value)}/>
        <button onClick = {addTodo}> Add Todo </button>
        <ul>
          {todos.map(todo => (
            <li>{todo}</li>
          ))}
        </ul>
.    </div>
  );
}

export default App;
