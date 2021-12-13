import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/action';

const TodoItem = ({ todo }) => {
	const dispatch = useDispatch();

	return (
		<div
			className={
				todo?.status == 'In Progress'
					? 'formInput inProgress'
					: 'formInput deleted'
			}>
			<h2>{todo?.name}</h2>
			<button>Edit</button>
			<button onClick={() => dispatch(deleteTodo(todo?.id))}>Delete</button>
		</div>
	);
};

export default TodoItem;
