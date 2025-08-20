import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center  font-sans">
      <section className="border-b border-white/20 backdrop-blur-md shadow-lg p-10 rounded-3xl  max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Про нас — Варіант А
        </h1>
        <p className="text-lg text-white mb-6">
          Ми — команда ентузіастів, яка створює сучасні веб-додатки з акцентом
          на якість, інновації та зручність для користувачів. Наша мета —
          допомогти вам реалізувати найсміливіші ідеї у світі цифрових
          технологій.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-indigo-500 text-white rounded-xl no-underline font-semibold transition-colors hover:bg-indigo-600"
          >
            На головну
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-indigo-100 text-indigo-800 rounded-xl no-underline font-semibold transition-colors hover:bg-indigo-200"
          >
            Зв&apos;язатися з нами
          </Link>
        </div>
      </section>
    </main>
  );
}
