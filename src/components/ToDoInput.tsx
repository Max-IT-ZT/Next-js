"use client";
import React, { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";

interface TodoInputProps {
  onAdd: (task: string) => void;
}

export default function ToDoInput({ onAdd }: TodoInputProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) {
      return;
    }
    onAdd(value.trim());
    setValue("");
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-2 w-full"
    >
      <input
        type="text"
        name="task"
        value={value}
        onChange={onChange}
        placeholder="Введи задачу..."
        className="flex-1 px-3 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full sm:w-auto flex items-center justify-center"
      >
        <MdAssignmentAdd />
      </button>
    </form>
  );
}
