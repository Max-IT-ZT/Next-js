// components/Logger.tsx
"use client";
import { useState } from "react";

export default function Logger() {
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp}: ${message}`;
    console.log(logMessage);

    setLogs((prev) => [...prev, logMessage]);
  };

  return (
    <div>
      <button onClick={() => addLog("Тестове повідомлення")}>Додати лог</button>
      <button onClick={() => addLog("Помилка системи")}>
        Логувати помилку
      </button>
      <div data-testid="logs">
        {logs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
    </div>
  );
}
