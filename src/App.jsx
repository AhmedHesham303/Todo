import { useState } from "react";
import TodosList from "./components/TodosList";
import Header from "./components/Header";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="container w-[34rem] flex flex-col items-center justify-center">
      <Header isDark={isDark} setIsDark={setIsDark} />
      <TodosList isDark={isDark} />
    </div>
  );
}

export default App;
