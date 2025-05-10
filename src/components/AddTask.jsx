import { useState } from "react";
import Input from "./Input";

function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Título da Tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></Input>
      <Input
        type="text"
        placeholder="Descrição da Tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></Input>
      <button
        onClick={() => {
          //antes de adicionar verifico se está preenchido
          if (title.trim() == "" || description.trim() == "") {
            return alert("Preencha a tarefa e descrição por favor.");
          }
          onAdd(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>

    /* <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <li className="flex">
        <input
          className="w-full p-2 rounded-md"
          placeholder="Título da Tarefa"
        ></input>
      </li>
      <li>
        <input
          className="w-full p-2 rounded-md"
          placeholder="Descrição da Tarefa"
        ></input>
      </li>
      <li>
        <button className="w-full p-2 rounded-md bg-slate-600 text-white">
          Adicionar
        </button>
      </li>
    </ul> */
  );
}

export default AddTask;
