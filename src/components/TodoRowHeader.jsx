import { useState } from "react";

function TodoRowHeader({ addTodo }) {
  const [inputValue, setValue] = useState("");

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      addTodo(inputValue);
      setValue("");
    }
  }

  return (
    <div className="flex items-center h-16 border-b border-[#E3E4F1] rounded-md mb-6 px-4 bg-white">
      <div className="w-4 h-4 rounded-full border border-[#9495A5] mr-4"></div>
      <input
        className="flex-1 bg-transparent outline-none text-sm"
        placeholder="Create a new todo..."
        value={inputValue}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default TodoRowHeader;
