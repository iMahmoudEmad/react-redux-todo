import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './todoItem';
import TodoInput from './todoInput';
import styles from './todoList.module.scss';

const TodoList = () => {
	const todos = useSelector((state) => state);
	return (
		<div className={styles.formInput}>
			<TodoInput />

			{todos?.length ? (
				todos?.map((todo) => <TodoItem key={todo?.id} todo={todo} />)
			) : (
				<h2>No Data!</h2>
			)}
		</div>
	);
};

export default TodoList;
