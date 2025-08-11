import { createTodos } from "../../services/todos/createTodos";
import { IoMdAdd } from "react-icons/io";
import TodoForm from "./TodoForm";
import { useQueryClient } from "@tanstack/react-query";

function TodoRowHeader({ setIsFormOpen }) {
  const queryClient = useQueryClient();

  return (
    <>
      <div className="flex items-center justify-between h-16 border-b border-[#E3E4F1] rounded-md mb-6 px-4 bg-white">
        <div className="flex gap-4 items-center ">
          <div className="w-4 h-4 rounded-full border border-[#9495A5] "></div>
          <div>Create a todo...</div>
        </div>
        <button
          className="text-xl text-white bg-[#6062D8]  rounded-lg transition-colors duration-200 px-4 py-2 flex items-center gap-2"
          onClick={() => setIsFormOpen(true)}
        >
          <IoMdAdd />
          Create
        </button>
      </div>
    </>
  );
}

export default TodoRowHeader;
