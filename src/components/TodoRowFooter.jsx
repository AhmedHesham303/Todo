import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clearCompleted, clearAll } from "../services/todos";
import clsx from "clsx";

function TodoRowFooter({ length, setFilter, filter }) {
  const queryClient = useQueryClient();
  const clearCompletedMutation = useMutation({
    mutationFn: clearCompleted,
    onSuccess: () => {
      queryClient.setQueryData(["todos"], (todos) => {
        if (!todos) return [];
        return todos.map((todo) =>
          todo.completed ? { ...todo, completed: false } : todo
        );
      });
    },
  });
  const clearCAllMutation = useMutation({
    mutationFn: clearAll,
    onSuccess: () => {
      queryClient.setQueryData(["todos"], () => {
        return [];
      });
    },
  });

  return (
    <div className="w-full h-12 bg-white border-b-[#E3E4F1] rounded-md mb-6 flex justify-between items-center text-[#9495A5] text-sm px-4">
      <p>{length} items left</p>

      <div className="flex gap-5">
        <button
          onClick={() => setFilter("all")}
          className={clsx(
            "hover:text-[#3A7CFD]",
            filter === "all" && "text-[#3A7CFD]"
          )}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className={clsx(
            "hover:text-[#3A7CFD]",
            filter === "active" && "text-[#3A7CFD]"
          )}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={clsx(
            "hover:text-[#3A7CFD]",
            filter === "completed" && "text-[#3A7CFD]"
          )}
        >
          Completed
        </button>
      </div>
      <div className="flex gap-2">
        <button
          className="hover:text-[#494C6B] transition-colors duration-200"
          onClick={() => clearCompletedMutation.mutate()}
        >
          Clear Completed
        </button>
        <button
          className="hover:text-[#494C6B] transition-colors duration-200"
          onClick={() => clearCAllMutation.mutate()}
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

export default TodoRowFooter;
