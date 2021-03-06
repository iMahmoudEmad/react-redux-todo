import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/action';
import { v4 as uuid } from 'uuid';
import styles from './todoInput.module.scss';

const TodoInput = () => {
	const [todo, setTodo] = useState('');
	const [isInputEmpty, setIsInputEmpty] = useState(true);
	const dispatch = useDispatch();

	return (
		<div className={styles.formInput}>
			<input
				type='text'
				placeholder='Enter Todo Name*'
				value={todo}
				onChange={(e) => {
					setTodo(e.target.value);
					setIsInputEmpty(false);
				}}
			/>
			<button
				onClick={() => {
					if (!isInputEmpty) {
						dispatch(addTodo({ id: uuid(), name: todo }));
						setTodo('');
					}
					setIsInputEmpty(true);
				}}>
				Add
			</button>
		</div>
	);
};

export default TodoInput;
