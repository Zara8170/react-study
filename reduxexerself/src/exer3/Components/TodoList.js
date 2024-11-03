import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setFilter, toggleTodo } from "./reduxComponents/todoSlice";

function TodoList() {
  const { todos, filter } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return todo.completed;
    return true;
  });

  return (
    <div>
      <input
        type="text"
        onKeyDown={(e) => e.key === "Enter" && dispatch(addTodo(e.target.value))}
        placeholder="Add a new todo"
      />
      <button onClick={() => dispatch(setFilter("all"))}>All</button>
      <button onClick={() => dispatch(setFilter("completed"))}>Completed</button>
      <button onClick={() => dispatch(setFilter("active"))}>Active</button>

      {filteredTodos.map((todo) => (
        <div key={todo.id} onClick={() => dispatch(toggleTodo(todo.id))}>
          <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</p>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
