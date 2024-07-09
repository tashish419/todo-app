import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="w-1/2 mx-auto mt-[5%] bg-purple-900">
      <h1 className="font-bold text-center text-3xl my-6">TODO LIST</h1>
      <div>       
        <TaskInput />
      </div>
    </div>
  );
}

export default App;
