function ListElement({index , content, date}){

	return (
		<li index={index}>{content} - {date}</li>
	)

}

function List({date}){

    return(
    <ul>
		<ListElement
			index={1}
			content={"metro"}
			date={"04/05/2026"}
		/>
		<ListElement
			index={2}
			content={"boulo"}
			date={"05/05/2026"}
		/>
		<ListElement
			index={3}
			content={"dodo"}
			date={"06/05/2026"}
		/>
    </ul>
    );
}

export default List;