import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/action';
import styles from './todoItem.module.scss';

const TodoItem = ({ todo }) => {
	const [todoName, setTodoName] = useState(todo.name);
	const [editable, setEditable] = useState(false);
	const dispatch = useDispatch();

	return (
		<div
			className={
				todo?.status === 'In Progress'
					? `${styles.todoItem} inProgress`
					: `${styles.todoItem} deleted`
			}>
			{editable ? (
				<input
					type='text'
					value={todoName}
					placeholder={todo?.name}
					onChange={(e) => setTodoName(e.target.value)}
					autoFocus='on'
				/>
			) : (
				<h2>{todo?.name}</h2>
			)}

			<button
				className={styles.btn}
				onClick={() => {
					dispatch(
						updateTodo({
							...todo,
							name: todoName,
						})
					);
					if (editable) setTodoName(todo.name);
					setEditable(!editable);
				}}>
				{editable ? 'Update' : 'Edit'}
			</button>
			<button
				className={`${styles.delete} ${styles.btn}`}
				onClick={() => dispatch(deleteTodo(todo?.id))}>
				Delete
			</button>
		</div>
	);
};

export default TodoItem;
