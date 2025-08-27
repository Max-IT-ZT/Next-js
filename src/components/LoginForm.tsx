"use client";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setMessage("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Помилка логіну");
      return;
    }

    setMessage("Успішний вхід!");
    window.location.href = "/dashboard";
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleLogin}
        className="w-[300px] sm:w-[360px] p-6 sm:p-8 flex flex-col gap-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
      >
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-white mb-4">
          Вхід
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition"
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition"
          required
        />

        <button
          type="submit"
          className="mt-2 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Увійти
        </button>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {message && <p className="text-green-400 text-center">{message}</p>}

        <p className="text-gray-300 text-xs text-center mt-2">
          Введіть свої дані для входу
        </p>
      </form>
    </div>
  );
}
