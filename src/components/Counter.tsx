"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
export default function Counter() {
  const [num, setNum] = useState(0);
  return (
    <div className="bg-gray-400/20 backdrop-blur-xs p-4 rounded-lg">
      <h2 className="text-2xl font-bold text-center text-white">
        Лічильник: {num}
      </h2>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setNum(num + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          <FaPlus className="flex items-center justify-center" />
        </button>
        <button
          onClick={() => setNum(num - 1)}
          disabled={num === 0}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 ml-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaMinus className="flex items-center justify-center" />
        </button>
      </div>
    </div>
  );
}
