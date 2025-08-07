import { RiDeleteBin6Line, RiDeleteBin6Fill } from "react-icons/ri";

function TodoRow({ text, isDark }) {
  return (
    <div className="flex items-center justify-between h-16 border-b border-[#E3E4F1] rounded-md mb-1 px-4 bg-white">
      <div className="flex items-center">
        <div className="w-4 h-4 rounded-full border border-[#9495A5] mr-4"></div>
        <div className="flex-1 bg-transparent outline-none text-sm">{text}</div>
      </div>
      {isDark ? (
        <RiDeleteBin6Fill className="hover:cursor-pointer" />
      ) : (
        <RiDeleteBin6Line className="hover:cursor-pointer" />
      )}
    </div>
  );
}

export default TodoRow;
