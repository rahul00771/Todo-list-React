import API from "../axios/axios";


//service which returns the token after successful login
const loginUser = async(userMail, userPass)=>{
    const response = await API.post('/login', {userMail, userPass});    
    return response.data;
}

export default loginUser;