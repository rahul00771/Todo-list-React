import React from 'react';
import { Task } from '../Task/Task';
import tasks from '../../../data/tasks';
import './TaskList.css';
import {Box, Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

export const TaskList = () => {
  return (
    <>
        <section className='task-list'>
            {
                tasks.map((task)=>{
                    return(<Task key = {task.id} {...task}/>)
                })
            }
        </section>

      <div className="addBtn">
      <Box>        
        <Fab className='fab' variant='extended' size='large'>        
          <AddIcon>                                             
          </AddIcon>
          Add Task
        </Fab>
      </Box>              
      </div>
                        
    </>
  )
}
