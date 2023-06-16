import TodoItem from "./TodoItem";

const TodosLists = ({todoProps, setTodos, deleteTodo}) => {
  return (
    <ul>
      {
        todoProps.map((todos) => (
          <TodoItem key={todos.id} todoItems ={todos} setTodos= {setTodos} deleteTodo ={deleteTodo}/>
        ))

      }

  </ul>
   );
}

export default TodosLists;