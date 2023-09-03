import './ToDoCounter.css';

function ToDoCounter({total, completed}){
    return(
        <h1 className='TodoCounter'>
            Has completado <span>{completed}</span>
            de <span>{total}</span> ToDo
        </h1>
    );
}

export {ToDoCounter}