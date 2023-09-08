
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../TaskForm/TaskForm.css';
import {Link, useParams} from 'react-router-dom';
import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import { useState} from 'react';
import { getTodoWithId, updateTodo } from '../../services/todoServices';


//-----------------Navigate (maybe using history)------------//


export const EditForm = () => {

  //for navigation
  const navigateTo = useNavigate();

  //taking the task id from the params
  const myParams = useParams();
    //extracting the id in string
  const todoId = myParams.id.toString();
  
  const [task, setTask] = useState("");
  
  const [priority, setPriority] = useState("");  
  

  //get request of todo with id = todoId
  //default loading of todos value
  const getPreviousData = async(todoId) => {

    try {
      const fetchedData = await getTodoWithId(todoId);
      // console.log(fetchedData);
      setTask(fetchedData.task);
      setPriority(fetchedData.priority);      
      
    } catch (error) {
      console.log(Error);
    }      
  };
  
  useEffect(()=>{    
    getPreviousData(todoId);
  }, [])


  //setting the new priority
  const priorityHandler = (event)=>{
      setPriority(event.target.value);
  }

    //setting the new task
  const handleTaskChange = (event)=>{
    setTask(event.target.value);
  }

  //comms with the bcakend for PUT request using axios instance
  const updateListener = () => {    
    try {
    
      const newData = updateTodo(todoId, task, priority);
      console.log("Updated" , newData);
      //resetting the input fields
      setTask("");
      setPriority("");
      console.log("Todo updated succesfully");  
      
      //navigate back to tasklist
      navigateTo('/');

    } catch (error) {
      console.log(error);
    }

  }
  

  return (
    <>
    <div className='container'>        
        <h1 className='heading'>Edit the task</h1>
        <label>Update the task:</label>
        <input autoFocus className='input__task' value={task} onChange={handleTaskChange} placeholder='Task'></input>        
        <label>Select priority:</label>  
        <select onChange={priorityHandler} className='input__priority'>
            <option value = "low" className='priority--low'>Low</option>
            <option value = 'medium' className='priority--medium'>Medium</option> 
            <option value = "high" className='priority--high'>High</option>
        </select>        

        <section className='btn-container'>
          <Stack direction='row' spacing={4}>
          <Link to='/'>
            <Button variant='contained'>Cancel</Button>
          </Link>
            <Button onClick={updateListener} variant='outlined'>Update</Button>
          </Stack>
        </section>        

    </div>
    
</>
  )
}
