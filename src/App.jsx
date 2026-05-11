import './App.css';
import Form from './components/form';
import Card from './components/ToDoCard';

const TODOS = [
	{
		todo:"metro",
		date:"05/05/2026",
		checked:true
	},
	{
		todo:"boulo",
		date:"06/05/2026",
		checked:false
	},
	{
		todo:"dodo",
		date:"07/05/2026",
		checked:true
	},
];
function App() {
	function handleSubmit(event){
		event.preventDefault();
		const INPUTS=document.querySelectorAll("input[type=text]");
		INPUTS.forEach(element=>console.log(element.value));
	}

  	return (
		<>
			<Card params={TODOS} />
			<Form onSubmit={(event)=>handleSubmit(event)}/>
		</>
  	)
}

export default App
