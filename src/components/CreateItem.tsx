import "./CreateItem.scss";
import { ListItemOff } from "./ListItemOff";
import { PlusCircle } from "phosphor-react";

export function CreateItem() {
  return (
    <main>
      <div className="todo">
        <form className="todo__create">
          <input type="text" placeholder="Adicione uma nova tarefa" />
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
