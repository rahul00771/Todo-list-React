import React from 'react';
import './Task.css'

export const Task = (props) => {
    const {id, task, priority, isCompleted} = props;
  return (
    <>
        <article className='card'>
            <h2 className='card__task'>Task : {task}</h2>
            <h4 className='card__priority'>Priority : {priority}</h4>
            <button className='card__btn'>edit</button>            
            <button className='card__btn'>delete</button>            
        </article>
    </>
  )
}
