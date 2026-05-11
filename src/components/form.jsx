function Form({onSubmit}){
    function handleChange(event){
        console.log("event",event.target.event)
    }

    return(
        <>
            <h2>Formulaire</h2>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    id="formTodo" 
                    name="formTodo" 
                    placeholder="La Todo"
                    onChange={(event)=>handleChange(event)}/>
                <input type="text" 
                    id="formDate" 
                    name="formDate" 
                    placeholder="La Date" 
                    onChange={(event)=>handleChange(event)}/>
                <input type="submit" value="Valider" />
            </form>
        </>
    )
};

export default Form;
