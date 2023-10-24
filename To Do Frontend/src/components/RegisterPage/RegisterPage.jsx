

import '../LoginPage/LoginPage.css';
import { useState } from 'react';
import { Stack } from '@mui/material';
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';



export default function RegisterPage() {


    //declaring the email and password states
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");

    //setting value
    const handleMailChange = (event)=>{
        setMail(() => event.target.value);
        console.log(mail);
    }

    const handlePassChange = (event)=>{
        setPass(() => event.target.value);
        console.log(pass);
    }

    //reset button functionality
    const cancelHandler = (event) => {
        
    }

    return(
        <> 
            <div className='container'>

                {/* <h1 className='heading'>Welcome to My Todo app</h1> */}
                <section className='login__card'>

                    <label>Enter your email: </label>
                    <input autoFocus onChange={handleMailChange} value ={mail} className ='input email' placeholder='youremail@xyz'></input>

                    <label>Enter a password:</label>
                    <input onChange={handlePassChange} value={pass} className = 'input password' placeholder='password'></input>

                    <section className='btn__container'>
                        <Stack direction={'row'} spacing={4}>
                            {/* <Button onClick={cancelHandler} variant = 'contained'>Cancel</Button> */}
                            
                            <Stack spacing={4} >
                                <Link to = '/login'>
                                    <Button >Cancel</Button>
                                </Link>
                            </Stack>


                            {/* -------------remove link to '/'----------- */}
                            
                            <Link className = 'register__button' to = '/'>
                                <Button variant = 'contained'>Sign up</Button>
                            </Link>

                            {/* <Button variant = 'contained'>Sign up</Button> */}
                        </Stack>
                    </section>  

                </section>

            </div>
        </>
    )
}
