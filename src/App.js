import TodoList from './Components/todoList';
import styles from './app.module.scss';

function App() {
	return (
		<main className={styles.parent}>
			<TodoList />
		</main>
	);
}

export default App;
