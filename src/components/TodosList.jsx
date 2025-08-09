import { useState } from "react";
import TodoRowHeader from "./TodoRowHeader";
import TodoRow from "./TodoRow";
import { useQuery } from "@tanstack/react-query";
import { readTodos } from "../services/todos";
import TodoRowFooter from "./TodoRowFooter";
import TodoForm from "./TodoForm";

function TodosList({ isDark }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [filter, setFilter] = useState("all");
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
    return true;
  });

  return isFormOpen ? (
    <TodoForm title={"Create a Todo"} setIsFormOpen={setIsFormOpen} />
  ) : (
    <div className="w-full">
      <TodoRowHeader setIsFormOpen={setIsFormOpen} />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}

      {filteredTodos.slice(-10).map((todo) => (
        <TodoRow
          key={todo.id}
          text={todo.title}
          isDark={isDark}
          id={todo.id}
          completed={todo.completed}
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
