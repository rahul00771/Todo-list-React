import React from 'react';
import './TaskForm.css';
import {Link} from 'react-router-dom';
import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import { useState} from 'react';
import {createTodo} from '../../services/todoServices';



export const TaskForm = () => {
  
  const [task, setTask] = useState("");
  //-----------------TODO - apply a logic for default priority as low-------------------//
  //remove low from useState
  const [priority, setPriority] = useState("Low");  
  
  const handleTaskChange = (event)=>{
    setTask(event.target.value);
  }
  

  const handleSaveButton = ()=>{    
    try {
      const newData = createTodo(task, priority);
      console.log(newData);
      //resetting the input fields
      setTask("");
      setPriority("");
      console.log("Todo added succesfully");
      //------------------TODO - after clicking save navigate to the homepage----------------//

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>
    <div className='container'>        
        <h1 className='heading'>Add a new task</h1>
        <label>Enter the task:</label>
        <input className='input__task' value={task} onChange={handleTaskChange} placeholder='Task'></input>        
        <label>Select priority:</label>  
        <select className='input__priority'>
            <option className='priority--high'>High</option>
            <option className='priority--medium'>Medium</option> 
            <option className='priority--low'>Low</option>
        </select>        

        <section className='btn-container'>
          <Stack direction='row' spacing={4}>
          <Link to='/'>
            <Button variant='contained'>Cancel</Button>
          </Link>
            <Button onClick={handleSaveButton} variant='outlined'>Save</Button>
          </Stack>
        </section>        

    </div>
    
</>
  )
}
