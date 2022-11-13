import './ListItemOff.scss';
import { ClipboardText } from "phosphor-react";

export function ListItemOff() {
    return (
        <div className="listItemOff">
            <ClipboardText size={56} />
            <h2>Você ainda não tem tarefas cadastradas </h2>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
       
    )
}