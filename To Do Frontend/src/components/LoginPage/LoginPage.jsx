

import './LoginPage.css';
import { useState } from 'react';
import { Stack } from '@mui/material';
import {Button} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import loginUser from '../../services/loginService';



export default function LoginPage() {

    const navigateTo = useNavigate();

    //declaring the email and password states
    const [userMail, setMail] = useState("");
    const [userPass, setPass] = useState("");

    //state for already existing message conditional styling(oppostite of register)
    const [exists, setExists] = useState(false);

    //for password or user message state
    const [message, setMessage] = useState("");


    //setting value
    const handleMailChange = (event)=>{
        setMail(() => event.target.value);
        // console.log(userMail);
    }

    const handlePassChange = (event)=>{
        setPass(() => event.target.value);
        // console.log(userPass);
    }

    //reset button functionality
    const resetHandler = (event) => {
        setMail('');
        setPass('');
        setExists(false);
        console.log(userMail);
        console.log(userPass);
    }

    //login btn listener
    const handleLoginBtn = async()=> {
        console.log(userMail);
        console.log(userPass);

        const loggedUser = await loginUser(userMail, userPass);

        //if we get null from the backend(when user doesn't exists)
        if(loggedUser == null)
        {
            //opposite of register
            setExists(true);
            setMessage("No account exists")
            console.log("Doesn't exists message");
        }
        else if(loggedUser.message === "authFailed")
        {
            setExists(true);
            setMessage("Incorrect password");
            console.log("Wrong password")
        }
        else
        {
            try {


                //----------------------todo-implement state(localstorage)



                localStorage.removeItem("user");
                //store response in local storage
                localStorage.setItem("user", JSON.stringify(loggedUser));

                console.log("SetItem");

                console.log("localstorage check", JSON.parse(localStorage.getItem("user")));

                console.log("login called localstorage saved");
                navigateTo('/todos');

                console.log("Navigated");

                console.log(loggedUser);    
            } catch (error) {
                console.log("error in try catch", error)
            }            
        }

    }

    return(
        <> 
            <div className='container'>

                {/* <h1 className='heading'>Welcome to My Todo app</h1> */}
                <section className='login__card'>

                    <label>Enter registered email: </label>
                    <input autoFocus onChange={handleMailChange} value ={userMail} className ='input email' placeholder='youremail@xyz'></input>                    

                    <label>Enter the password:</label>
                    <input onChange={handlePassChange} value={userPass} className = 'input password' placeholder='password'></input>

                    <section className='btn__container'>
                        <Stack direction={'row'} spacing={4}>
                            <Button onClick={resetHandler} variant = 'contained'>Reset</Button>
                            {/* <Link className = 'register__button' to = '/'> */}
                                <Button onClick={handleLoginBtn} variant = 'contained'>Login</Button>
                            {/* </Link> */}
                        </Stack>
                    </section>  

                    <p className='register__message'>Don't have an account?</p>
                    <Stack spacing={4} >
                        <Link className = 'register__button' to = '/register'>
                            <Button >sign up</Button>
                        </Link>
                    </Stack>

                    <p className={exists? 'exists-active' : 'exists-not'}>{message}.</p>
                    {/* <p className="existsMessage">Email already registered,<br></br> use another email or login.</p> */}

                </section>

            </div>
        </>
    )
}
