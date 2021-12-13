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
			<button>Edit</button>
			<button>Delete</button>
		</div>
	);
};

export default TodoItem;
