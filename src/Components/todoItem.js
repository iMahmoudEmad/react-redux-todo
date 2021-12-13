import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/action';
import styles from './todoItem.module.scss';

const TodoItem = ({ todo }) => {
	const [todoName, setTodoName] = useState(todo.name);
	const [status, setStatus] = useState(todo.status);
	const [editable, setEditable] = useState(false);
	const dispatch = useDispatch();

	return (
		<div
			className={
				status === 'In Progress'
					? styles.todoItem
					: `${styles.todoItem} ${styles.complete}`
			}>
			<div className={styles.mb1}>
				<input
					type='checkbox'
					checked={status === 'Complete' ? true : false}
					value={todo?.status || ''}
					onChange={(e) =>
						setStatus(e.target.checked ? 'Complete' : 'In Progress')
					}
				/>

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
			</div>

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
