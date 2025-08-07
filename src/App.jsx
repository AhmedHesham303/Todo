import { use, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import TodosList from "./components/TodosList";
import Header from "./components/Header";
const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];
function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
function App() {
  useQuery({
    queryKey: ["posts"],
    queryFn:,
  });
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="container w-[34rem] flex flex-col items-center justify-center">
      <Header isDark={isDark} setIsDark={setIsDark} />
      <TodosList isDark={isDark} />
    </div>
  );
}

export default App;
