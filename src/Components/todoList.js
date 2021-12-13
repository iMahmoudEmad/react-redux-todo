import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './todoItem';

const TodoList = () => {
	const todos = useSelector((state) => state);
	return (
		<div className='formInput'>
			{todos?.length ? (
				todos?.map((todo) => <TodoItem key={todo?.id} todo={todo} />)
			) : (
				<h2>No Data!</h2>
			)}
		</div>
	);
};

export default TodoList;
