import { TODOS_CONSTANT } from './constants';
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
			updatedTodos = [...todos];
			let selectedTodoIdx = -1;
			for (let idx = 0; idx < updatedTodos.length; idx++) {
				selectedTodoIdx++;
				if (updatedTodos[idx].id === data.id) break;
			}

			if (selectedTodoIdx !== -1) {
				updatedTodos[selectedTodoIdx] = data;

				return updatedTodos;
			}
			break;
		default:
			return todos;
	}
};
