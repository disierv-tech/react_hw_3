import { useState } from "react";
import "./App.css";
import ToDoList from "./ToDoList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, name: "Покормити кота" },
    { id: 2, name: "Полити квіти" },
    { id: 3, name: "Зателефонувати бабусі" },
  ]);

  function addTodo() {
    const text = inputValue.trim();

    if (text === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      name: text,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputValue("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addTodo();
    }
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addTodo}>Додати запис</button>
      <ToDoList toDos={todos} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
