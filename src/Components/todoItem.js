import React from 'react';

const TodoItem = ({ name, status }) => {
	return (
		<div
			className={
				status == 'In Progress' ? 'formInput inProgress' : 'formInput deleted'
			}>
			<h2>{name}</h2>
		</div>
	);
};

export default TodoItem;
