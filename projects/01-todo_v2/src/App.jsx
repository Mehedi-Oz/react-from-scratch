import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems"

import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"

function App() {

  const todoItems = [
    {
      name: "Buy Groceries",
      dueDate: "24-Jan-2026"
    },
    {
      name: "Job Viva",
      dueDate: "25-Jan-2026"
    },
    {
      name: "Go To College",
      dueDate: "26-Jan-2026"
    },
  ];

  return (
    <div className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </div>
  )
}

export default App;
