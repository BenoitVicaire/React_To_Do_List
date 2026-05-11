function ListElement({index , content, date, checked, onClick}){

	if(checked){
		return (
			<li index={index} className="green" onClick={()=> onClick(content)}>{content} - {date} <input type="checkbox" name="check"  id={"check"+index} defaultChecked /></li>
		)
	}else{
		return (
			<li index={index} className="orange" onClick={()=> onClick(content)}>{content} - {date} <input type="checkbox" name="check" id={"check"+index} /></li>
		)
	}
}
function List({params,handleClick}){

    return(
		<ul>
		{params.map((element, index) => {

			return <ListElement
				index={index}
				key={index}
				content={element.todo}
				date={element.date}
				checked={element.checked}
				onClick={handleClick}
			/>
		} )}
    </ul>
    );
}

export default List;