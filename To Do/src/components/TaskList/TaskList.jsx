import React from 'react';
import { Task } from '../Task/Task';
import tasks from '../../../data/tasks';
import './TaskList.css';

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

        

    </>
  )
}
