import "./CreateItem.scss";
import { ListItemOff } from "./ListItemOff";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

export function CreateItem() {
  const [newText , setNewText] = useState('')

  function CreateItem(event : any)  {

    event.preventDefault()
    setNewText(newText)
    console.log('ativo', newText);
    setNewText('')
    
  }

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewText(event.target.value);
  }
  return (
    <main>
      <div className="todo">
        <form className="todo__create" onSubmit={CreateItem} >
          <input type="text" placeholder="Adicione uma nova tarefa"  name="tasks" value={newText} onChange={handleNewTask}/>
          <div className="todo__create__button">
            <button>
              Criar <PlusCircle size={20} />
            </button>
          </div>
        </form>
        <div className="todo__tasks-active">
          <div className="todo__tasks-active__create">
            <span>Tarefas Criadas</span>
            <div>
              <strong>0</strong>
            </div>
          </div>
          <div className="todo__tasks-active__complete">
            <span>Concluídas</span>
            <div>
              <strong>0</strong>
            </div>
          </div>
        </div>
        <ListItemOff />
      </div>
    </main>
  );
}
