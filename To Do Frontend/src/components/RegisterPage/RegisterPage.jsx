import '../LoginPage/LoginPage.css';
import { useState } from 'react';
import { Stack } from '@mui/material';
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';
import registerUser from '../../services/registerService';
import { useNavigate } from 'react-router-dom';



export default function RegisterPage() {

    //for navigation
    const navigateTo = useNavigate();


    //declaring the email and password states
    const [userMail, setUserMail] = useState("");
    const [userPass, setUserPass] = useState("");

    //setting value
    const handleMailChange = (event)=>{
        setUserMail(() => event.target.value);
        // console.log(mail);
    }

    const handlePassChange = (event)=>{
        setUserPass(() => event.target.value);
        // console.log(pass);
    }  

    //save the credentials to the users collection
    const handleSignUpBtn = ()=> {
        try {            
            // console.log(userMail)
            // console.log(userPass)

            //calling the axios service to save the user to the DB collection
            const newUser = registerUser(userMail, userPass);
            console.log("New user saved", newUser);
            setUserMail("");
            setUserPass("");
            navigateTo('/');

        } 
        catch (error) {
            console.log('error in component service call: ', error);
        }
    }


    return(
        <> 
            <div className='container'>

                {/* <h1 className='heading'>Welcome to My Todo app</h1> */}
                <section className='login__card'>

                    <label>Enter your email: </label>
                    <input autoFocus onChange={handleMailChange} value ={userMail} className ='input email' placeholder='youremail@xyz'></input>

                    <label>Enter a password:</label>
                    <input onChange={handlePassChange} value={userPass} className = 'input password' placeholder='password'></input>

                    <section className='btn__container'>
                        <Stack direction={'row'} spacing={4}>
                            {/* <Button onClick={cancelHandler} variant = 'contained'>Cancel</Button> */}
                            
                            <Stack spacing={4} >
                                <Link to = '/login'>
                                    <Button >Cancel</Button>
                                </Link>
                            </Stack>


                            {/* -------------remove link to '/'----------- */}
                            
                            {/* <Link className = 'register__button' to = '/'> */}
                                <Button onClick={handleSignUpBtn} variant = 'contained'>Sign up</Button>
                            {/* </Link> */}

                            {/* <Button variant = 'contained'>Sign up</Button> */}
                        </Stack>
                    </section>  

                </section>

            </div>
        </>
    )
}
