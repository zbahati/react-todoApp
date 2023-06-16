import { useState } from "react";

const InputTodo = ({AddTodoItem}) => {

  const [title, setTitle] = useState('');
  const changeHandler = (event) =>{
    setTitle(event.target.value)
  }

  const submitHandler = (event) =>{
    event.preventDefault();
    AddTodoItem(title);
    setTitle('');
  }

  return (
    <div className="todoInput">
      <form onSubmit={submitHandler}>
        <input type="text" value={title} onChange={changeHandler} placeholder=" Add Todo"/>
        <button>Submit</button>
      </form>
      <p>{title}</p>
    </div>
  );
};

export default InputTodo;
