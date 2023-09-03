import './ToDoButton.css';

function ToDoButton(){
    return(
        <button 
        className='CreateTodoButton'
        onClick={(event)=>{
            console.log(event)
            console.log(event.target)
        }}
        >+</button>
    )
}

export {ToDoButton};