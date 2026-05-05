import './App.css';
import Card from './components/ToDoCard';

const TODOS = [
	{
		todo:"metro",
		date:"05/05/2026"
	},
	{
		todo:"boulo",
		date:"06/05/2026"
	},
	{
		todo:"dodo",
		date:"07/05/2026"
	},
];

function App() {

  	return (
    	<Card params={TODOS} />
  	)
}

export default App
