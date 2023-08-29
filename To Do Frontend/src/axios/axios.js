import axios from "axios";


//creating the axios instance, with the base url
const API = axios.create({
    baseURL : "url"
});

export default API;
