import React, { useState } from "react";

const ToDoList = (props) => {
  const handleDelete = (id) => {
    props.deleteTodo(id);
  };

  return (
    <>
      <ul>
        {props.toDos.map((todo) => (
          <li key={todo.id}>
            {todo.name}{" "}
            <button onClick={() => handleDelete(todo.id)}>Видалити</button>
          </li>
        ))}
      </ul>
      <p>Кількість: {props.toDos.length}</p>
    </>
  );
};

export default ToDoList;
