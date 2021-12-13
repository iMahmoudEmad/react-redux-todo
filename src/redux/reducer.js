import { TODOS_CONSTANT } from './constans';
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './types';

export const reducer = (todos = TODOS_CONSTANT, { type, data }) => {
	switch (type) {
		case ADD_TODO:
			break;
		case DELETE_TODO:
			let filteredTodos = [...todos];
			filteredTodos = filteredTodos.filter((todo) => todo.id !== data);
			return filteredTodos;
		case UPDATE_TODO:
			break;
		default:
			return todos;
	}
};
