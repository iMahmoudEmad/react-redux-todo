import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './todoItem';

const TodoList = () => {
	const todos = useSelector((state) => state);
	return (
		<div className='formInput'>
			{todos?.map((todo) => (
				<TodoItem key={todo?.id} todo={todo} />
			))}
		</div>
	);
};

export default TodoList;
