import './App.css';
import List from './components/list';
import Form from './components/form';
import { useState } from 'react';


function App() {
	const [todo,setTodo]=useState([
		{
			id:1,
			label:"Learn JavaScript",
			completed: false,
		},
		{
			id:2,
			label:"Do homework",
			completed: false,
		},
		{
			id:3,
			label:"Meet a friend",
			completed: false,
		},
		{
			id:4,
			label:"Workout",
			completed: false,
		},
		{
			id:5,
			label:"Get a job",
			completed: false,
		},
	])

  return(
	<div>

	<Form addTodo={setTodo} todoList={todo}/>
	<List addTodo={setTodo} todoList={todo}/>

	</div>
  )
}

export default App;



