

import './LoginPage.css';
import { useState } from 'react';
import { Stack } from '@mui/material';
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';



export default function LoginPage() {


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
    const resetHandler = (event) => {
        setMail('');
        setPass('');
        console.log(mail);
        console.log(pass);
    }

    return(
        <> 
            <div className='container'>

                {/* <h1 className='heading'>Welcome to My Todo app</h1> */}
                <section className='login__card'>

                    <label>Enter registered email: </label>
                    <input autoFocus onChange={handleMailChange} value ={mail} className ='input email' placeholder='youremail@xyz'></input>                    

                    <label>Enter the password:</label>
                    <input onChange={handlePassChange} value={pass} className = 'input password' placeholder='password'></input>

                    <section className='btn__container'>
                        <Stack direction={'row'} spacing={4}>
                            <Button onClick={resetHandler} variant = 'contained'>Reset</Button>
                            <Link className = 'register__button' to = '/'>
                                <Button variant = 'contained'>Login</Button>
                            </Link>
                        </Stack>
                    </section>  

                    <p className='register__message'>Don't have an account?</p>
                    <Stack spacing={4} >
                        <Link className = 'register__button' to = '/register'>
                            <Button >sign up</Button>
                        </Link>
                    </Stack>

                    {/* <p className="existsMessage">Email already registered,<br></br> use another email or login.</p> */}

                </section>

            </div>
        </>
    )
}
