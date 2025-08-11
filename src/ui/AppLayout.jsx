import { useState } from "react";
import TodosList from "../features/todo/TodosList";
import Header from "./Header";

function AppLayout() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="container w-[34rem] flex flex-col items-center justify-center">
      <Header isDark={isDark} setIsDark={setIsDark} />
      <TodosList isDark={isDark} />
    </div>
  );
}

export default AppLayout;
