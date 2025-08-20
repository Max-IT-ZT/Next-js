import GoBackBtn from "@/components/GoBackBtn";
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center font-sans">
      <section className="border-b relative border-white/20 backdrop-blur-md shadow-lg p-10 rounded-3xl max-w-lg w-full text-center">
        <GoBackBtn />
        <h1 className="text-4xl font-bold text-white mb-4">Контакти</h1>
        <p className="text-lg text-white mb-6">
          Звʼяжіться з нами для співпраці або консультації:
        </p>
        <div className="text-white space-y-2">
          <div>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:info@variant-a.com"
              className="underline hover:text-blue-300"
            >
              info@contact.com
            </a>
          </div>
          <div>
            <span className="font-semibold">Телефон:</span>{" "}
            <a
              href="tel:+380991234567"
              className="underline hover:text-blue-300"
            >
              +38 (050) 189-43-97
            </a>
          </div>
          <div>
            <span className="font-semibold">Адреса:</span> м. Житомир, вул.
            Короленка, 87
          </div>
        </div>
      </section>
    </main>
  );
}
