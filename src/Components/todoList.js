import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './todoItem';

const TodoList = () => {
	const todos = useSelector((state) => state);
	return (
		<div className='formInput'>
			{todos?.map((todo) => (
				<TodoItem key={todo?.id} name={todo?.name} status={todo?.status} />
			))}
		</div>
	);
};

export default TodoList;
