import { useState } from "react";
import TodoRowHeader from "./TodoRowHeader";
import TodoRow from "./TodoRow";
import { useQuery } from "@tanstack/react-query";
import { readTodos } from "../services/todos";
function TodosList({ isDark }) {
  const [todos, setTodos] = useState([]);
  function addTodo(text) {
    if (text.trim() === "") return;
    setTodos((prev) => [...prev, { text }]);
  }

  function deleteTodo(indexToRemove) {
    setTodos((prevTodos) =>
      prevTodos.filter((_, index) => index !== indexToRemove)
    );
  }
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: readTodos,
  });
  data.slice(10);
  return (
    <div className="w-full">
      <TodoRowHeader addTodo={addTodo} />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {data?.slice(0, 10).map((todo, index) => (
        <TodoRow key={index} text={todo.title} isDark={isDark} />
      ))}
    </div>
  );
}

export default TodosList;
