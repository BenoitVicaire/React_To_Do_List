import List from './List';

function Card(){
    const DATE= new Date().toLocaleDateString('fr-FR');
    return (
        <article>
            <h1>To Do List</h1>
            <h2>{DATE}</h2>
            <List />

        </article>
    );
}

export default Card;