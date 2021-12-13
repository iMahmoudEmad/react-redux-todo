import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/action';
import { v4 as uuidv4 } from 'uuid';
import styles from './todoInput.module.scss';

const TodoInput = () => {
	const [todo, setTodo] = useState('');
	const dispatch = useDispatch();

	return (
		<div className={styles.formInput}>
			<input
				type='text'
				placeholder='Enter Todo Name...'
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button
				onClick={() => {
					dispatch(addTodo({ id: uuidv4(), name: todo }));
					setTodo('');
				}}>
				Add
			</button>
		</div>
	);
};

export default TodoInput;
