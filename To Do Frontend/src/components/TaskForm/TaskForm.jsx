import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TaskForm.css';
import {Link} from 'react-router-dom';
import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import { useState} from 'react';
import {createTodo} from '../../services/todoServices';



export const TaskForm = () => {

  // for navigation
  const navigateTo = useNavigate();
  
  const [task, setTask] = useState("");
  
  //default priority low
  const [priority, setPriority] = useState("low");  
  

  //sets the value of task on change in value of the input field
  const priorityHandler = (event)=>{
    setPriority(event.target.value);
    // console.log(priority);
  }

  //sets the value of priority on change in value of the input field
  const handleTaskChange = (event)=>{
    setTask(event.target.value);
    // console.log(task);
  }
  

  //calling the axios instance (communicating with the backend for posting)
  const handleSaveButton = ()=>{    
    try {
      const newData = createTodo(task, priority);
      // console.log(newData);
      //resetting the input fields
      setTask("");
      setPriority("");
      console.log("Todo added succesfully");
      
      //navigating back to tasklist
      navigateTo('/');

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>
    <div className='container'>        
        <h1 className='heading'>Add a new task</h1>
        <label className='input__label'>Enter the task:</label>
        <input autoFocus className='input__task' value={task} onChange={handleTaskChange} placeholder='Task'></input>        
        <label className='input__label'>Select priority:</label>  
        <select onChange = {priorityHandler} className='input__priority'>
            <option value="low" className='priority--low'>Low</option>
            <option value="medium" className='priority--medium'>Medium</option> 
            <option value="high" className='priority--high'>High</option>
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
