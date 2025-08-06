import TodoRowHeader from "./TodoRowHeader";
import TodoRow from "./TodoRow";

function TodosList() {
  return (
    <div className="w-full">
      <TodoRowHeader />
      <TodoRow />
      <TodoRow />
      <TodoRow />
      <TodoRow />
      <TodoRow />
      <TodoRow />
    </div>
  );
}

export default TodosList;
