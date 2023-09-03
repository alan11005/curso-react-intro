import React from "react";

import { ToDoButton } from "./ToDoButton";
import {ToDoInput} from "./ToDoInput";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { ToDoCounter } from "./ToDoCounter";

const defaultToDos = [
  { text: 'A llorar a la lloreria', completed:true},
  { text: 'Tomar curso de react', completed:false},
  { text: 'Farrear', completed:false},
  { text: 'Estudiar', completed:true}
]

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  console.log('Los usuarios buscan: '+ searchValue)

  const [toDos, setToDos]= React.useState(defaultToDos);

  const completedToDos = toDos.filter(
    toDo => !!toDo.completed).length;
  const totalToDos = toDos.length;
  
  const searchedToDos = toDos.filter(
    (toDo) =>{
      const toDoText = toDo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText)
  })
  
  return (
    <>
        <ToDoCounter completed={completedToDos} total={totalToDos}/>

        <ToDoInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <ToDoList>
          {searchedToDos.map(ToDo => (
            <ToDoItem 
              key={ToDo.text}
              text={ToDo.text}
              completed={ToDo.completed}
              />
          ))}
        </ToDoList>
        <ToDoButton/>
    </>
  );
}

export default App;