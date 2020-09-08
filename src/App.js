import React,{useState} from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo';

// On hitting enter button doesn't gets clicked. To implement that functionality we have to surround it with form tags

function App() {

  const [todos,setTodos] = useState(['Get done with React','Get done with Springboot'])
  const [input,setInput] = useState('')
  const addTodo = (event) => {
      event.preventDefault()    // Prevents refreshing the page on submitting the form
      setTodos([...todos,input])
      setInput('')    // Clear up the input after adding to todos
  }
  return (
    <div className="App">
        <h1>Hello Rahul Wonderful bloody fellow</h1>
        <form>
        {/* Material UI Form  */}
        <FormControl> 
          <InputLabel>Add your Todo 😎</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          <Button disabled={!input} type='submit' onClick = {addTodo} variant="contained" color="primary">
              Add Todo  
          </Button>
        </FormControl>
        </form>
        <ul>
          {todos.map(todo => (
            <Todo todo={todo}/>
          ))}
        </ul>
.    </div>
  );
}

export default App;

{/* <input value={input} onChange={event => setInput(event.target.value)}/> */}
{/* Here disabled attribute makes sure that if input string is empty button is disabled */}

{/* <button type='submit' onClick = {addTodo}> Add Todo </button> */}
