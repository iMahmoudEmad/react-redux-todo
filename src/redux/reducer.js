import { TODOS_CONSTANT } from './constans';
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './types';

export const reducer = (todos = TODOS_CONSTANT, { type, data }) => {
	let updatedTodos;
	switch (type) {
		case ADD_TODO:
			updatedTodos = [...todos];
			updatedTodos.push(data);
			return updatedTodos;
		case DELETE_TODO:
			updatedTodos = [...todos];
			updatedTodos = updatedTodos.filter((todo) => todo.id !== data);
			return updatedTodos;
		case UPDATE_TODO:
			break;
		default:
			return todos;
	}
};
