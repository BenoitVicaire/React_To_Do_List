function ListElement({index , content, date, checked}){

	if(checked){
		return (
			<li index={index} className="green">{content} - {date} <input type="checkbox" name="check"  id={"check"+index} defaultChecked /></li>
		)
	}else{
		return (
			<li index={index} className="orange">{content} - {date} <input type="checkbox" name="check" id={"check"+index} /></li>
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
				checked={element.checked}
			/>
		} )}
    </ul>
    );
}

export default List;