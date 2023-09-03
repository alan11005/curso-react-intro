import './ToDoInput.css';

function ToDoInput({searchValue, setSearchValue}){

    return(
        <input 
        placeholder="Aqui"
        className='TodoSearch'
        value = {searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value)              
        }}
        />
    );
}

export  {ToDoInput}