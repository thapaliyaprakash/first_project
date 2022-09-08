import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {
	const [input, setInput] = useState('');
	const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

	console.log(input)
	console.log(todos)

	// Local Storage Setup
	// const getLocalTodos = () => {
	// 	if (localStorage.getItem('todos') === null) {
	// 		localStorage.setItem('todos', JSON.stringify([]));
	// 	} else {
	// 		let todoLocal = JSON.parse(localStorage.getItem('todos'));
	// 		setTodos(todoLocal);
	// 	}
	// }

	// set items to localStorage
	const saveLocalTodos = (todo) => {
		// check if there is already items in localStorage
		if (localStorage.getItem('todos') === null) {
			localStorage.setItem('todos', JSON.stringify([]));
		} else {
			let todoLocal = JSON.parse(localStorage.getItem('todos'));
			todoLocal.push(todo);
			localStorage.setItem('todos', JSON.stringify(todoLocal));
		}
	}

		// CREATE: Add a new todo
		function handleSubmit() {
			setTodos([...todos, input])
			saveLocalTodos(input)
			setInput('')
		}

		//UPDATE: Update the individual items in the array having index
		function updateTodo(index) {
			const newTodos = [...todos];
			// newTodos[index] = input;
			newTodos.splice(index, 1, input);
			setTodos(newTodos);
			setInput('');
		}

		//DELETE: Delete the individual items in the array having index
		function deleteTodo(index) {
			const newTodos = [...todos];
			newTodos.splice(index, 1);
			setTodos(newTodos);
		}

		// Remove All: It removes all the items in the array
		function removeall() {
			setTodos([])
			localStorage.setItem('todos', JSON.stringify([]))
		}

		return (
			<div className='todo'>
				<div className="todo-logo">
					<h3>Todo App</h3>
				</div>

				<div className="todo-form">
					<form>
						<input
							type="text"
							className="task"
							name="input"
							value={input}
							onChange={e => setInput(e.target.value)}
						/>
						<input
							type="submit"
							className="button"
							name="button"
							value="Add Todo"
							disabled={!input}
							onClick={handleSubmit}
						/>
					</form>
				</div>

				<div className="todo-lists">
					<h3>Task Lists</h3>
					{/*  */}
					<ul>
						{todos.map((todo) => (
							<li>
								{todo}
								<button
									className='update'
									onClick={() => updateTodo(todos.indexOf(todo))}
								>
									Update
								</button>
								<button
									className='delete'
									onClick={() => deleteTodo(todos.indexOf(todo))}
								>
									Delete
								</button>
							</li>
						))
						}
					</ul>
				</div>

				<div className="todo-removeall">
					<button
						className='button'
						onClick={removeall}
					>
						Remove All
					</button>
				</div>
			</div>
		)
	}

	export default Todo