import React from 'react';
import './TaskForm.css';
import { Header } from '../Header/Header';


export const TaskForm = () => {
  return (
    <>
    <div className='container'>        
        <h1 className='heading'>Add a new task</h1>
        <label>Enter the task:</label>
        <input className='input__task' placeholder='Task'></input>
        <label>Select priority:</label>  
        <select className='input__priority'>
            <option className='priority--high'>High</option>
            <option className='priority--medium'>Medium</option> 
            <option className='priority--low'>Low</option>
        </select>
    </div>
    
</>
  )
}
