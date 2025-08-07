function TodoRow({ text, deleteTodo }) {
  return (
    <div
      className="flex items-center h-16 border-b border-[#E3E4F1] rounded-md mb-1 px-4 bg-white"
      onClick={deleteTodo}
    >
      <div>
        <div className="w-4 h-4 rounded-full border border-[#9495A5] mr-4"></div>
        <div className="flex-1 bg-transparent outline-none text-sm">{text}</div>
      </div>
      <div className="w-4 h-4 rounded-full border border-[#9495A5] mr-4"></div>
    </div>
  );
}

export default TodoRow;
