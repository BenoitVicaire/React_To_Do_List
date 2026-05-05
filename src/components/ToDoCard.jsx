import List from './List';

function Card(params){
    const DATE= new Date().toLocaleDateString('fr-FR');
    return (
        <article>
            <h1>To Do List</h1>
            <h2>{DATE}</h2>
            <List params={params} />

        </article>
    );
}

export default Card;