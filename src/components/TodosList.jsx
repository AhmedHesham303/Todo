import { useState } from "react";
import TodoRowHeader from "./TodoRowHeader";
import TodoRow from "./TodoRow";
import { useQuery } from "@tanstack/react-query";
import { readTodos } from "../services/todos";
import TodoRowFooter from "./TodoRowFooter";

function TodosList({ isDark }) {
  const [filter, setFilter] = useState("all");
  const [showTodos, setShowTodos] = useState(false);
  const {
    data: todos = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: readTodos,
  });

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // "all"
  });

  return (
    <div className="w-full">
      <TodoRowHeader onShowTodos={() => setShowTodos((prev) => !prev)} />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}

      {showTodos &&
        filteredTodos
          .slice(-10)
          .map((todo) => (
            <TodoRow
              key={todo.id}
              text={todo.title}
              isDark={isDark}
              id={todo.id}
            />
          ))}
      <TodoRowFooter
        length={filteredTodos.length}
        setFilter={setFilter}
        filter={filter}
      />
    </div>
  );
}

export default TodosList;
