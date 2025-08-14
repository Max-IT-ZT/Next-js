import Clock from "@/components/Clock";
import Counter from "@/components/Counter";
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold mask-linear-from-2.5 text-center text-white">
        Ласкаво просимо до мого проекту!
      </h1>
      <p className="text-xl font-bold mask-linear-from-2.5 text-gray-300 text-center">
        Це приклад сторінки, створеної за допомогою Next.js та Tailwind CSS.
      </p>
      <Counter />
      <Clock />
    </div>
  );
}
