import React from 'react';
import { Task } from '../Task/Task';
import './TaskList.css';
import {Box, Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getTodo } from '../../services/todoServices';




export const TaskList = () => {

  const [todos, setTodos] = useState([]);

  //retrieving the todos
  useEffect(()=>{
    const fetchData = async() =>{
      try {
        const fetchedData = await getTodo();
        console.log('Fetched Data:', fetchedData);
        setTodos(fetchedData);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    }; 
    fetchData();
  }, []);
  


  return (
    <>
        <section className='task-list'>
            {                          todos.map((todo) => {
                  return (<Task key = {todo._id} {...todo}/>);
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
                        
    </>
  )
}
