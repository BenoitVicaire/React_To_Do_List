import { useState } from "react";


function ListElement({index , content, date, hour, category, checked}){
	const [hours, setHours] = useState(hour);

	function handleClickMinus(){
		if(hours>0){
			setHours(hours-1);
		}else{
			alert("Can't do that");
		}

	}
	function handleClickPlus(){
		setHours(hours+1);
	}

	if(checked){
		return (
			<li 
				index={index} 
				className="green" 
			>
			<button onClick={handleClickPlus}>+</button>
			<button onClick={handleClickMinus}>-</button>
			{content} - {date} - {hours} - {category}
			<input 
				type="checkbox" 
				name="check"  
				id={"check"+index} 
				defaultChecked 
			/>
			</li>
		)
	}else{
		return (
			<li 
				index={index} 
				className="orange" 
			>
			<button onClick={handleClickPlus}>+</button>
			<button onClick={handleClickMinus}>-</button>
			{content} - {date} - {hours} - {category}
			<input 
				type="checkbox" 
				name="check" 
				id={"check"+index}
			/>
			</li>
		)
	}
}
function List({params}){

    return(
		<ul>
		{params.map((element, index) => {

			return <ListElement
				index={index}
				key={index}
				content={element.todo}
				date={element.date}
				hour={element.hour}
				category={element.category}
				checked={element.checked}

			/>
		} )}
    </ul>
    );
}

export default List;