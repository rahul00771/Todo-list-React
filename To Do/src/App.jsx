import React from 'react';
import './App.css'
import { TaskList } from './components/TaskList/TaskList';
import {Box, Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const App = () => {
  return (
    <>
      <div className='app'>
        <h1 className='app-name'>My To do list</h1>
      </div>
        <TaskList/> 

      <div className="addBtn">
      <Box >
        <Fab className='fab' variant='extended' size='large'>
          <AddIcon>
            {onclick=()=>{alert("Add button clicked")}}           
          </AddIcon>
          Add Task
        </Fab>
      </Box>
      </div>

    </>
  )
}

export default App;