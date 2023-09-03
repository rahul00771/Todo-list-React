
import React from "react";
import './Task.css';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";



export const Task = (props) => {
    const {id, task, priority, isCompleted, onDelete} = props;
    
    //for delete handler, we accept onDelete function sent by tasklist as prop
    const deleteHandler = ()=>{
        onDelete();
    }

  return (
    <>
        <article className='card'>
            <h2 className='card__task'>Task : {task}</h2>
            <h4 className='card__priority'>Priority : {priority}</h4>
        
            <Stack direction="row-reverse" spacing={1}>
                <IconButton onClick={deleteHandler} color="error">
                    <DeleteIcon/>
                </IconButton>
                <Link to = {`/edit/${id}`}>
                    <Button variant="outlined" size="small" endIcon={<EditIcon/>}>Edit</Button>
                </Link>
                
            </Stack>    
            
        </article>
    </>
  )
}