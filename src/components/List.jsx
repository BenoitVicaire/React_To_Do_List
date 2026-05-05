function ListElement({index , content, date}){

	return (
		<li index={index}>{content} - {date}</li>
	)

}
function List({params}){
	const TODOS = Object.values(params).flat();
	
    return(
    <ul>
		{TODOS.map((element, index) => {
			return <ListElement
				index={index}
				key={index}
				content={element.todo}
				date={element.date}
			/>
		} )}
    </ul>
    );
}

export default List;