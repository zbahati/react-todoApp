import Header from "./Header";
import Navbar from "./Navbar";
import TodoLigic from "./TodosLogic";

const TodoApp = () => {
  return (
    <div>
      <Navbar />
     <Header />
     <TodoLigic />
    </div>
   );
}

export default TodoApp;