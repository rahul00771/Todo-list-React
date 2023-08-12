import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { TaskList } from '../components/TaskList/TaskList';
import { TaskForm } from '../components/TaskForm/TaskForm';
import { Header } from '../components/Header/Header';

export const AppRouter = () => {
  return (
    <>
        <Header/>
        <BrowserRouter>
            <Routes>
                <Route exact path = "/" Component={TaskList}/>
                <Route path='/add' Component={TaskForm}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default AppRouter;