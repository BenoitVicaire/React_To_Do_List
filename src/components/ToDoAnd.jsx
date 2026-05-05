function ListElement({index , content, date, checked}){
    return (
            <li index={index} className="green">{content} - {date} {checked && <input type="checkbox" name="check"  id={"check"+index} defaultChecked />}
            </li>
    )
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
function CardAnd({params}){
    const DATE= new Date().toLocaleDateString('fr-FR');

    return (
        <article>
            <h1>To Do List</h1>
            <h2>{DATE}</h2>
            <List params={params} />

        </article>
    );
}

export default CardAnd;