import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("cookieJhon")) || []
    //   [
    //   {
    //     id: 1,
    //     title: "Estudar Programação",
    //     description: "Estudar programação para se tornar full stack.",
    //     isCompleted: false,
    //   },
    //   {
    //     id: 2,
    //     title: "Estudar Inglês",
    //     description: "Estudar inglês para se tornar fluente.",
    //     isCompleted: false,
    //   },
    //   {
    //     id: 3,
    //     title: "Estudar Matemática",
    //     description: "Estudar matemática ajuda com a lógica.",
    //     isCompleted: false,
    //   },
    // ]
  );

  useEffect(() => {
    localStorage.setItem("cookieJhon", JSON.stringify(tasks));
  }, [tasks]);

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       {
  //         method: "GET",
  //       }
  //     );
  //     const data = await response.json();
  //     setTasks(data);
  //   };
  //   // SE QUISER, VOCÊ PODE CHAMAR UMA API PARA PEGAR AS TAREFAS
  //   fetchTasks();
  // }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onTaskDelete(taskId) {
    const newTasks = tasks.filter((x) => x.id != taskId);
    setTasks(newTasks);
  }

  function onTaskAdd(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas - JhonDK 2025-05-10</Title>
        <AddTask onAdd={onTaskAdd} />
        <Tasks base={tasks} fx={onTaskClick} fx2={onTaskDelete} />
      </div>
    </div>
  );
}

export default App;
