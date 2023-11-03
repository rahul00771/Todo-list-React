
//importing the axios instance
import API from "../axios/axios";

const user = JSON.parse(localStorage.getItem("user"));


//to fetch todos of a specific user
export const getTodoWithUser = async() =>{
    try {
        console.log("user",user);
    
        const response = await API.get(`/todos/${user.userMail}`);
        return response.data;
    } catch (error) {
        console.log("error: ", error);
    }
}


//creating the services(CRUD)

//posting new data
export const createTodo = async (task, priority)=> {
    try {
            let userMail = user.userMail;
            const response = await API.post('/todos', {task, priority, userMail});
            return response.data;
    }
    catch (error) {
        console.log(error);
    }
};

//retreiving the data
export const getTodo = async () => {
    try {
        const response = await API.get('/todos');
        // console.log(response.data);
        return response.data;        
    } catch (error) {
        console.log(error);
    }
};

export const getTodoWithId = async(id) =>{
    try {
        const response = await API.get(`/todos/${id}`);
        return response.data;
    } catch (error) {
        console.log("error: ", error);
    }
}

//updating a todo
export const updateTodo = async(todoId, task, priority) => {
    try {
        const response = await API.put(`/todos/${todoId}`, {task, priority});
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

//deleting a todo
export const deleteTodo = async(todoId) => {
    try {
        const response = await API.delete(`/todos/${todoId}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

