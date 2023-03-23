import axios from "axios";

const api = axios.create({
    baseURL: 'http://db:4001'
});

export const getTodos = async () => {
  return await api.get('/todos')
};

export const createTodo = async (formData) => {
  await api.post('/todos', formData)
};

export const deleteTodo = async (todoId) => {
    await api.delete(`/todos/${todoId}`)
};
