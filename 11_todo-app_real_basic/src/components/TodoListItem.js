import React, {useState, useCallback} from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdCreate
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle, onUpdateCheck, onUpdate, style }) => {
  const { id, text, checked, update } = todo;
  const [value, setValue] = useState(text);

  const onChange = useCallback(
    e => {
      setValue(e.target.value);
      onUpdate(id, value);
    },
    [onUpdate, value],
  );

  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className={cn("TodoListItem", { checked })}>
        <div
          className={cn('checkbox', { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          {update && !checked ? <input className="text" placeholder={text} autoFocus onChange={onChange} /> : <div className="text">{text}</div>}
        </div>
        {checked ? null :
           <div className="update" onClick={() => onUpdateCheck(id)}>
          <MdCreate />
          </div>}
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
