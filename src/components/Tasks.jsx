import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ base, fx, fx2 }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(param) {
    const query = new URLSearchParams();
    query.set("title", param.title);
    query.set("description", param.description);

    navigate(`/task?${query.toString()}`); //``isso é uma query string do JavaScript
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {base.map((x) => (
        <li key={x.id} className="flex gap-2">
          <button
            onClick={() => fx(x.id)}
            className={`bg-slate-400 text-left w-full flex items-center gap-2 text-white p-2 rounded-md 
    ${x.isCompleted && "line-through"} `}
          >
            {x.isCompleted && <CheckIcon />}
            {x.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(x)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => fx2(x.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
