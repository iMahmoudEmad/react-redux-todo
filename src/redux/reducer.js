import { TODOS_CONSTANS } from './constans';
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './types';

export const reducer = (state = TODOS_CONSTANS, action) => {
	switch (action.type) {
		case ADD_TODO:
			break;
		case DELETE_TODO:
			break;
		case UPDATE_TODO:
			break;
		default:
			return state;
	}
};
