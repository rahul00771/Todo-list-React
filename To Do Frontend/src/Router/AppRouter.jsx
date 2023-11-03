import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { TaskList } from '../components/TaskList/TaskList'
import { TaskForm } from '../components/TaskForm/TaskForm';
import { Header } from '../components/Header/Header';
import { EditForm } from '../components/EditForm/EditForm';
import LoginPage from '../components/LoginPage/LoginPage';
import RegisterPage from '../components/RegisterPage/RegisterPage';

export const AppRouter = () => {
  return (
    <>
        <Header/>
        <BrowserRouter>
            <Routes>
                <Route path='/register' Component={RegisterPage}/>
                <Route path = '/login' Component = {LoginPage}/>
                <Route path = "/todos" Component={TaskList}/>
                <Route path ='/add' Component={TaskForm}/>
                <Route path='/edit/:id'Component={EditForm}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default AppRouter;