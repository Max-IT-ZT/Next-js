"use client";
import React, { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      clearInterval(interval);
    }, 1000);
  }, [time]);

  return (
    <div
      className="text-gray-200 text-7xl font-extrabold tracking-widest 
               drop-shadow-md 
               bg-black/60 p-8 rounded-2xl border border-cyan-500/20 w-xl
               text-center uppercase
                "
    >
      {time}
    </div>
  );
}
