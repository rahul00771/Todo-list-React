import axios from "axios";


//creating the axios instance, with the base url
const API = axios.create({
    baseURL : "http://localhost:3000/"
});

export default API;
