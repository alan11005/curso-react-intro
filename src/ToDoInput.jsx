import React from 'react';
import './ToDoInput.css';

function ToDoInput(){
    const [searchValue, setSearchValue] = React.useState('');

    console.log('Los usuarios buscan: '+ searchValue)

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