import React from 'react';
import './App.css'
import { TaskList } from './components/TaskList/TaskList';
import {Box, Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Header } from './components/Header/Header';
import { TaskForm } from './components/TaskForm/TaskForm';

export const App = () => {
  return (
    <>            
      <Header/>  
      <TaskList/>       
    </>
  )
}

export default App;