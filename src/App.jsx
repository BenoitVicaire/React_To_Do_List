import './App.css';
import Card from './components/ToDoCard';
import CardTernaire from './components/ToDoTernaire';

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

  	return (
		<>
			<h1>Condition if</h1>
			<Card params={TODOS} />
			<h2>Condition Ternaire</h2>
			<CardTernaire params={TODOS} />
		</>
  	)
}

export default App
