
import React from "react";
import './Task.css';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';



export const Task = (props) => {
    const {id, task, priority, isCompleted, onDelete} = props;
    
    const deleteHandler = ()=>{
        onDelete;
    }

  return (
    <>
        <article className='card'>
            <h2 className='card__task'>Task : {task}</h2>
            <h4 className='card__priority'>Priority : {priority}</h4>
            {/* <button className='card__btn'>edit</button>            
            <button className='card__btn'>delete</button>                   */}
        
            <Stack direction="row-reverse" spacing={1}>
                <IconButton onClick={deleteHandler} color="error">
                    <DeleteIcon/>
                </IconButton>
                <Button variant="outlined" size="small" endIcon={<EditIcon/>}>Edit</Button>
                
            </Stack>    
            
        </article>
    </>
  )
}