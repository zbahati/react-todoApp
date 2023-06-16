import { useState } from 'react';

const TodoItem = ({ todoItems, setTodos , deleteTodo,setUpdate }) => {
 const [editing, setEditing] = useState(false);
 const handleEditing = () => {
    setEditing(true);
  };
  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const checkedHandler = (id) =>{
    setTodos((prev) => prev.map((prevState) => {
      if(prevState.id === id){
        return{
          ...prevState,
          completed: !prevState.completed,
        }
      }
      return prevState
    }))
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <ul>
      <li className='item'>
        <div className='content' style={viewMode}>

        <input type="checkbox" checked={todoItems.completed}
        onChange={()=> checkedHandler(todoItems.id)}/>
        {todoItems.title}
                <button onClick={handleEditing}>Edit</button>
        <button type="button" onClick={() => deleteTodo(todoItems.id)} >delete</button>

        </div>
        <input
      type="text"
      value={todoItems.title}
      className="textInput"
      style={editMode}
      onChange={(e) => setUpdate(e.target.value, todoItems.id)}
      onKeyDown={handleUpdatedDone}
    />
      </li>
    </ul>
  );
};

export default TodoItem;
