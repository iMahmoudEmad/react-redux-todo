import React from 'react';

const TodoItem = ({ todo }) => {
	return (
		<div
			className={
				todo?.status == 'In Progress'
					? 'formInput inProgress'
					: 'formInput deleted'
			}>
			<h2>{todo?.name}</h2>
		</div>
	);
};

export default TodoItem;
