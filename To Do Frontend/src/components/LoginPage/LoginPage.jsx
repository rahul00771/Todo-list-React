

import './LoginPage.css';
import { Stack } from '@mui/material';
import {Button} from '@mui/material';


export default function LoginPage() {
    return(
        <>        

            <div className='container'>

                <h1 className='heading'>Welcome to My Todo app</h1>
                <section className='login__card'>
                    <label>Enter your email: </label>
                    <input className='input email' placeholder='youremail@xyz'></input>
                    <label>Enter the password:</label>
                    <input className = 'input password' placeholder='password'></input>

                    <section className='btn__container'>
                        <Stack direction={'row'} spacing={4}>
                            <Button variant = 'contained'>Cancel</Button>
                            <Button variant = 'contained'>Login</Button>
                        </Stack>
                    </section>                
                </section>

            </div>
        </>
    )
}
