import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './types';

export function addTodo(todo) {
	return {
		type: ADD_TODO,
		data: todo,
	};
}

export function deleteTodo(todoId) {
	return {
		type: DELETE_TODO,
		data: todoId,
	};
}

export function updateTodo(todo) {
	return {
		type: UPDATE_TODO,
		data: todo,
	};
}
