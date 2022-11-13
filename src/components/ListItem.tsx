import "./ListItem.scss";
import {Trash} from 'phosphor-react'
export function ListItem() {
  return (
    <div className="list-topic">
      <div className="list-topic__content">
        <div className="list-topic__content__round">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox"></label>
        </div>
        <div className="list-topic__content__text">
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
        </div>
        <div className="list-topic__content__icon">
              <Trash size={24} />
        </div>
      </div>
    </div>
  );
}
