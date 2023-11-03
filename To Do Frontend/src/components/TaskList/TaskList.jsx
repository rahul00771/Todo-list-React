import React from 'react';
import { Task } from '../Task/Task';
import './TaskList.css';
import {Box, Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteTodo, getTodo, getTodoWithUser } from '../../services/todoServices';




export const TaskList = () => {

  const navigateTo = useNavigate();

  const [todos, setTodos] = useState([]);

  //retrieving the todos
  // useEffect(()=>{
  //   const fetchData = async() =>{
  //     try {
  //       const fetchedData = await getTodo();
  //       // console.log('Fetched Data:', fetchedData);
  //       setTodos(fetchedData);
  //     } catch (error) {
  //       console.error('Error fetching todos:', error);
  //     }
  //   }; 
  //   fetchData();
  // }, []);
  


  //fetching todos wit user
  useEffect(()=>{
    const fetchData = async() =>{
      try {
        const fetchedData = await getTodoWithUser();
        // console.log('Fetched Data:', fetchedData);
        setTodos(fetchedData);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    }; 
    fetchData();
  }, []);



  //for deleting a todo(pass this function to the task component onclick)
  const deleteData = async(id) => {
    try {
      const deletedData = await deleteTodo(id);
      console.log("Deleted: ", deletedData); 
      setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
    } 
    catch (error) {
      console.log('error: ', error);
    }
  }

  //defining updateData function
  const updateData = (id) => {
    try {
      const updatedTask = new updateTodo(id);
      console.log("updated task: ", updatedTask);      
    } catch (error) {
      console.log('error: ', error);
    }
  }


  //logout
  const handleLogOutBtn = ()=> {
    console.log("Log out clicked");
    localStorage.clear("user");
    navigateTo('/login');

    
  }

  return (
    <>
        <section className='task-list'>
            {   
                todos.map((todo) => {
                  return (<Task key = {todo._id} id = {todo._id} {...todo} onDelete = {()=> deleteData(todo._id)} onUpdate = {()=>{updateData(todo._id)}}/>);
                })
            }
        </section>

      <div className="addBtn">
      <Box> 
        <Link to="/add">
        <Fab className='fab' variant='extended' size='large'>        
          <AddIcon>                                             
          </AddIcon>
          Add Task
        </Fab>
        </Link>
      </Box>              
      </div>

      <div className="LogOutBtn">
      <Box> 
        <Fab onClick={handleLogOutBtn} className='fabLogOut' variant='extended' size='large'>        
          Log out
        </Fab>
      </Box>              
      </div>
                        
    </>
  )
}
