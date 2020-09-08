import React,{useState,useEffect} from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo';
import { db } from './firebase';
import firebase from "firebase";

// On hitting enter button doesn't gets clicked. To implement that functionality we have to surround it with form tags

function App() {

  const [todos,setTodos] = useState([])
  const [input,setInput] = useState('')

  useEffect(() => {  // Called once when the file loads

    //This keeps track of changes in the firebase database, if anything changes it gets fired up
     // We need to have the most recent todo on the top so we will sort it by timestamp in descending order
    db.collection('todoone').orderBy('timestamp','desc').onSnapshot(snapshot => {       // Pulls the collection named 'todoone' from the database and takes the current snapshot
        // This line take each document of snapshot and for each element in the documnet gets its object and todo is the key name to access the value
       
        setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);


  const addTodo = (event) => {
      event.preventDefault()    // Prevents refreshing the page on submitting the form

      db.collection('todoone').add({
        todo:input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      // setTodos([...todos,input])
      setInput('')    // Clear up the input after adding to todos
  }
  return (
    <div className="App">
        <h1>Hello Rahul</h1>
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
