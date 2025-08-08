import { RiDeleteBin6Line, RiDeleteBin6Fill } from "react-icons/ri";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import clsx from "clsx";
import { deleteTodos } from "../services/todos";
import { toggleTodoCompleted } from "../services/todos";

function TodoRow({ text, isDark, id, completed }) {
  const queryClient = useQueryClient();
  const deletedTodoMutation = useMutation({
    mutationFn: deleteTodos,
    onSuccess: (deletedId) => {
      queryClient.setQueryData(["todos"], (oldTodos) => {
        if (!oldTodos) return [];
        console.log(deletedId);
        return oldTodos.filter((todo) => todo.id !== deletedId);
      });
    },
  });

  const toggleTodoMutation = useMutation({
    mutationFn: toggleTodoCompleted,
    onSuccess: (id) => {
      queryClient.setQueryData(["todos"], (todos) => {
        if (!todos) return [];

        return todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
      });
    },
  });

  return (
    <div className="flex items-center justify-between h-16 border-b border-[#E3E4F1] rounded-md mb-1 px-4 bg-white">
      <div className="flex items-center">
        <div
          className={clsx(
            "w-4 h-4 rounded-full border mr-4 flex items-center justify-center",
            completed ? "bg-[#3A7CFD] border-[#3A7CFD]" : "border-[#9495A5]",
            "hover:cursor-pointer"
          )}
          onClick={() => toggleTodoMutation.mutate(id)}
        >
          {completed && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
        <div
          className={clsx(
            "flex-1 bg-transparent outline-none text-sm",
            completed && "line-through text-[#9495A5]"
          )}
        >
          {text}
        </div>
      </div>
      {isDark ? (
        <RiDeleteBin6Fill
          className="hover:cursor-pointer"
          onClick={() => deletedTodoMutation.mutate(id)}
        />
      ) : (
        <RiDeleteBin6Line
          className="hover:cursor-pointer"
          onClick={() => deletedTodoMutation.mutate(id)}
        />
      )}
    </div>
  );
}

export default TodoRow;
