import './App.css';
import Form from './components/form';
import Card from './components/ToDoCard';
import { useState } from 'react';
import {TODOS} from './assets/dataSet'
import CategoryFilter from './components/filter';

function App() {
		const [filters, setFilters] = useState({
			transport: true,
			travail: true,
			vital: true
		});
	
		const TODOLIST=TODOS.filter(e=>{
			return filters[e.category];
		});

	function handleSubmit(event){
		event.preventDefault();
		const INPUTS=document.querySelectorAll("input[type=text]");
		INPUTS.forEach(element=>console.log(element.value));
	}

  	return (
		<>
			<Card params={TODOLIST} />
			<Form onSubmit={(event)=>handleSubmit(event)}/>
			<CategoryFilter props={filters} setters={setFilters} />
		</>
  	)
}

export default App
