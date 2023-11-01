import API from "../axios/axios";

const registerUser = async(userMail, userPass) => {
    try {
        const response = await API.post('/register', {userMail, userPass});
        return response.data;
    }
    catch (error) {
        console.log("error in registerService", error);
    }
};

export default registerUser;