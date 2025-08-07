import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodos } from "../services/todos";
function TodoRowHeader({ onShowTodos }) {
  const [inputValue, setValue] = useState("");

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      createdTodo.mutate(inputValue);
      setValue("");
    }
  }
  const queryClient = useQueryClient();

  const createdTodo = useMutation({
    mutationFn: createTodos,
    onSuccess: (newTodo) => {
      queryClient.setQueryData(["todos"], (oldTodos) => {
        return oldTodos ? [...oldTodos, newTodo] : [newTodo];
      });
    },
  });

  return (
    <div className="flex items-center justify-between h-16 border-b border-[#E3E4F1] rounded-md mb-6 px-4 bg-white">
      <div className="flex ">
        <div className="w-4 h-4 rounded-full border border-[#9495A5] mr-4"></div>
        <input
          className="flex-1 bg-transparent outline-none text-sm"
          placeholder="Create a new todo..."
          value={inputValue}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <button
        className="text-sm text-[#9495A5] hover:text-[#494C6B] transition-colors duration-200"
        onClick={() => onShowTodos()}
      >
        Show all todos
      </button>
    </div>
  );
}

export default TodoRowHeader;
