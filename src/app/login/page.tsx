import React from "react";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form className="flex flex-col gap-4 p-8 border-b border-white/20 backdrop-blur-md shadow-lg min-w-[320px]  text-white">
        <h2 className="text-center text-2xl font-semibold">Вхід</h2>
        <label className="flex flex-col gap-1">
          Email
          <input
            type="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Введіть email"
          />
        </label>
        <label className="flex flex-col gap-1">
          Пароль
          <input
            type="password"
            name="password"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Введіть пароль"
          />
        </label>
        <button
          type="submit"
          className="py-3 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition"
        >
          Увійти
        </button>
      </form>
    </div>
  );
}
