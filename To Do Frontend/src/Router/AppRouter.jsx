import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { TaskList } from '../components/TaskList/TaskList'
import { TaskForm } from '../components/TaskForm/TaskForm';
import { Header } from '../components/Header/Header';
import { EditForm } from '../components/EditForm/EditForm';

export const AppRouter = () => {
  return (
    <>
        <Header/>
        <BrowserRouter>
            <Routes>
                <Route exact path = "/" Component={TaskList}/>
                <Route path ='/add' Component={TaskForm}/>
                <Route path='/edit/:id'Component={EditForm}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default AppRouter;