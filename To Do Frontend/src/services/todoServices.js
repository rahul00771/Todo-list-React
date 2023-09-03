
//importing the axios instance
import API from "../axios/axios";

//creating the services(CRUD)

//posting new data
export const createTodo = async (task, priority)=> {
    try {
            const response = await API.post('/todos', {task, priority});
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
        console.log(response.data);
        return response.data;        
    } catch (error) {
        console.log(error);
    }
};

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

