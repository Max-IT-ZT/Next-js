"use client";
import { useState } from "react";

interface LogEntry {
  id: number;
  message: string;
  timestamp: number;
}

export default function TimestampLogger() {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  const addLog = (message: string) => {
    const timestamp = Date.now();
    const newLog = {
      id: timestamp,
      message,
      timestamp,
    };

    setLogs((prev) => [...prev, newLog]);
    console.log(`[${timestamp}] ${message}`);
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  return (
    <div>
      <button onClick={() => addLog("Користувач увійшов")}>Логін</button>
      <button onClick={() => addLog("Дані збережено")}>Збереження</button>
      <button onClick={() => addLog("Помилка системи")}>Помилка</button>

      <div data-testid="logs-list">
        {logs.map((log) => (
          <div key={log.id}>
            {formatTime(log.timestamp)}: {log.message}
          </div>
        ))}
      </div>
    </div>
  );
}
