import TodosList from "./components/TodosList";
import Header from "./components/Header";
function App() {
  return (
    <div className="container w-[34rem] flex items-center justify-center">
      <Header />
      <TodosList />
    </div>
  );
}

export default App;
