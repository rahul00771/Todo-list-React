

import './LoginPage.css';
import { useState } from 'react';
import { Stack } from '@mui/material';
import {Button} from '@mui/material';



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

                    <label>Enter your email: </label>
                    <input autoFocus onChange={handleMailChange} value ={mail} className ='input email' placeholder='youremail@xyz'></input>

                    <label>Enter the password:</label>
                    <input onChange={handlePassChange} value={pass} className = 'input password' placeholder='password'></input>

                    <section className='btn__container'>
                        <Stack direction={'row'} spacing={4}>
                            <Button onClick={resetHandler} variant = 'contained'>Reset</Button>
                            <Button variant = 'contained'>Login</Button>
                        </Stack>
                    </section>  

                </section>

            </div>
        </>
    )
}
