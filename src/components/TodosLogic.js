import { useState } from "react";
import InputTodo from "./InputTodo";
import TodosLists from "./TodoList";


const TodoLigic = () => {

  const [ todos, setTodos] = useState([
    {
      id: 1,
      title: "Morning Session",
      completed: true,
    },
    {
      id: 2,
      title: "Learning Time",
      completed: false,
    },
    {
      id: 3,
      title: "Standup meeting",
      completed: false,
    },

  ]);

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  const deleteTodoHandler = (id) =>{
    setTodos([
      ...todos.filter((todosId) => {
        return todosId.id !== id;
      })
    ])
  }

  const AddTodoItem = (title) => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);

  }


  return (
    <div className="logic-section">
      <InputTodo AddTodoItem = {AddTodoItem}/>
      <TodosLists setUpdate={setUpdate} todoProps = {todos} setTodos = {setTodos} deleteTodo= {deleteTodoHandler}/>

    </div>
  );
};

export default TodoLigic;
