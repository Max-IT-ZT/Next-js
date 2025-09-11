"use client";
import { useState, useEffect } from "react";

export default function SettingsManager() {
  const [theme, setTheme] = useState<string>("light");
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const savedUsername = localStorage.getItem("username") || "";

    setTheme(savedTheme);
    setUsername(savedUsername);
  }, []);

  const saveTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    console.log(`Тему збережено: ${newTheme}`);
  };

  const saveUsername = () => {
    localStorage.setItem("username", username);
    console.log(`Ім'я користувача збережено: ${username}`);
  };

  const clearSettings = () => {
    localStorage.removeItem("theme");
    localStorage.removeItem("username");
    setTheme("light");
    setUsername("");
    console.log("Налаштування очищено");
  };

  return (
    <div>
      <div>
        <label>Тема:</label>
        <button
          onClick={() => saveTheme("light")}
          data-active={theme === "light"}
        >
          Світла
        </button>
        <button
          onClick={() => saveTheme("dark")}
          data-active={theme === "dark"}
        >
          Темна
        </button>
      </div>

      <div>
        <label>Ім&apos;я:</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Введіть ім'я"
        />
        <button onClick={saveUsername}>Зберегти ім&apos;я</button>
      </div>

      <button onClick={clearSettings}>Очистити все</button>
    </div>
  );
}
