import { useState } from "react";
import TodoRowHeader from "./TodoRowHeader";
import TodoRow from "./TodoRow";
import { useQuery } from "@tanstack/react-query";
import { readTodos } from "../services/todos";

function TodosList({ isDark }) {
  const [todos, setTodos] = useState([]);
  const [showTodos, setShowTodos] = useState(false);
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: readTodos,
    enabled: showTodos,
  });
  function addTodo(text) {
    if (text.trim() === "") return;
    setTodos((prev) => [...prev, { text }]);
  }

  function deleteTodo(indexToRemove) {
    setTodos((prevTodos) =>
      prevTodos.filter((_, index) => index !== indexToRemove)
    );
  }

  return (
    <div className="w-full">
      <TodoRowHeader addTodo={addTodo} onShowTodos={() => setShowTodos(true)} />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}

      {data?.slice(0, 10).map((todo, index) => (
        <TodoRow key={index} text={todo.title} isDark={isDark} />
      ))}
    </div>
  );
}

export default TodosList;
