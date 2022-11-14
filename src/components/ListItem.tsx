import "./ListItem.scss";
import {Trash} from 'phosphor-react';

interface TaskProps {
  id: number
  content: string
  isChecked: boolean
}

export function ListItem({id, content, isChecked} : TaskProps ) {
  return (
    <div className="list-topic">
      <div className="list-topic__content">
        <div className="list-topic__content__round">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox"></label>
        </div>
        <div className="list-topic__content__text">
            <p>{content}</p>
        </div>
        <div className="list-topic__content__icon">
              <Trash size={24} />
        </div>
      </div>
    </div>
  );
}
