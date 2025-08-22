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
    <div className="max-w-md w-full mx-auto mt-10 p-4 border rounded-lg shadow bg-white sm:max-w-lg md:max-w-xl lg:max-w-2xl">
      <h1 className="text-xl font-bold mb-4 text-center">📝 Мій ToDoList</h1>
      <ToDoInput onAdd={addTask} />
      <ul className="mt-4 space-y-2 flex flex-col gap-1.5">
        {tasks.map((task, i) => (
          <li
            key={i}
            className="p-2 border rounded-lg bg-gray-100 text-black flex flex-col sm:flex-row gap-2 sm:gap-1.5 items-center justify-between"
          >
            <p
              className={`flex-1 ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.text}
            </p>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(i)}
                className="w-4 h-4 cursor-pointer accent-green-600"
              />
              <button onClick={() => handleDelete(i)}>
                <MdDeleteForever className="text-red-500 w-auto h-5" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
