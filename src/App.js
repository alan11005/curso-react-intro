import { ToDoButton } from "./ToDoButton";
import {ToDoInput} from "./ToDoInput";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { ToDoCounter } from "./ToDoCounter";

const defaultToDos = [
  { text: 'A llorar a la lloreria', completed:true},
  { text: 'Tomar curso de react', completed:false},
  { text: 'Farrear', completed:false},
  { text: 'Estudiar', completed:true},
]

function App() {
  return (
    <>
        <ToDoCounter completed={16} total={20}/>

        <ToDoInput/>

        <ToDoList>
          {defaultToDos.map(ToDo => (
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