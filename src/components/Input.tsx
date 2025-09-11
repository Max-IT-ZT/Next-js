"use client";
import React from "react";
import { useState, KeyboardEvent } from "react";

interface InputProps {
  onEnter: (value: string) => void;
}
export default function Input({ onEnter }: InputProps) {
  const [value, setValue] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim() !== "") {
      onEnter(value);
      setValue("");
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Введіть текст і натисніть Enter"
      className="border rounded px-2 py-1 focus:outline-none focus:ring"
    />
  );
}
