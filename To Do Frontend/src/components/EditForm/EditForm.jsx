
import React from 'react';
import '../TaskForm/TaskForm.css';
import {Link, useParams} from 'react-router-dom';
import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import { useState} from 'react';
import { updateTodo } from '../../services/todoServices';


//-----------------Navigate (maybe using history)------------//
//-----------------TODO-- get the original todos and set it to the input fields------//


export const EditForm = () => {
  
  const [task, setTask] = useState("");
  //-----------------TODO - apply a logic for default priority as low-------------------//
  //remove low from useState
  const [priority, setPriority] = useState("Low");  
  
  const handleTaskChange = (event)=>{
    setTask(event.target.value);
  }


  //taking the task id from the params
  const myParams = useParams();
  //extracting the id in string
  const todoId = myParams.id.toString();

  const updateListener = () => {    
    try {
    
      const newData = updateTodo(todoId, task, priority);
      console.log("Updated" , newData);
      //resetting the input fields
      setTask("");
      setPriority("");
      console.log("Todo updated succesfully");    
      //------------------TODO - after clicking save navigate to the homepage----------------//

    } catch (error) {
      console.log(error);
    }

  }
  

  return (
    <>
    <div className='container'>        
        <h1 className='heading'>Edit the task</h1>
        <label>Update the task:</label>
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
            <Button onClick={updateListener} variant='outlined'>Update</Button>
          </Stack>
        </section>        

    </div>
    
</>
  )
}
