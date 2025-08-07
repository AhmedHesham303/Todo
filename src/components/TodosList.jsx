import { useState } from "react";
import TodoRowHeader from "./TodoRowHeader";
import TodoRow from "./TodoRow";
import { useQuery } from "@tanstack/react-query";
import { readTodos } from "../services/todos";

function TodosList({ isDark }) {
  const [showTodos, setShowTodos] = useState(false);
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: readTodos,
  });

  return (
    <div className="w-full">
      <TodoRowHeader onShowTodos={() => setShowTodos((prev) => !prev)} />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}

      {showTodos &&
        data
          ?.slice(-10)
          .map((todo, index) => (
            <TodoRow key={index} text={todo.title} isDark={isDark} />
          ))}
    </div>
  );
}

export default TodosList;
