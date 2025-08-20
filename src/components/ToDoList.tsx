"use client";
import React, { useState } from "react";
import ToDoInput from "./ToDoInput";
import { MdDeleteForever } from "react-icons/md";

type Task = {
  text: string;
  completed: boolean;
};

export default function ToDoList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: string) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };
  const toggleTask = (index: number) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const handleDelete = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow bg-white">
      <h1 className="text-xl font-bold mb-4">📝 Мій ToDoList</h1>
      <ToDoInput onAdd={addTask} />
      <ul className="mt-4 space-y-2 flex flex-col gap-1.5">
        {tasks.map((task, i) => (
          <li
            key={i}
            className="p-2 border rounded-lg bg-gray-100 text-black flex gap-1.5 items-center justify-center"
          >
            <p className={task.completed ? "line-through text-gray-500" : ""}>
              {task.text}
            </p>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(i)}
              className="w-3.5 h-3.5 cursor-pointer accent-green-600"
            />
            <button onClick={() => handleDelete(i)}>
              <MdDeleteForever className="text-red-500 w-auto h-5" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
