import { useState } from "react";
import TodoRowHeader from "./TodoRowHeader";
import TodoRow from "./TodoRow";

function TodosList() {
  const [todos, setTodos] = useState([]);
  function addTodo(text) {
    if (text.trim() === "") return;
    setTodos((prev) => [...prev, { text }]);
  }

  function deleteTodo(indexToRemove) {
    setTodos((prevTodos) =>
      prevTodos.filter((_, index) => index !== indexToRemove)
    );
    console.log(`item number ${indexToRemove + 1} deleted`);
    console.log(todos);
  }

  return (
    <div className="w-full">
      <TodoRowHeader addTodo={addTodo} />
      {todos.map((todo, index) => (
        <TodoRow
          key={index}
          text={todo.text}
          deleteTodo={() => deleteTodo(index)}
        />
      ))}
    </div>
  );
}

export default TodosList;
