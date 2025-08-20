import Clock from "@/components/Clock";
import Counter from "@/components/Counter";
import FormModal from "@/components/FormModal";
import ToDoList from "@/components/ToDoList";

export default async function HomePage() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-2xl font-bold mask-linear-from-2.5  md:text-3xl lg:text-4xl text-center text-white">
        Ласкаво просимо до мого проекту!
      </h1>
      <p className=" text-xs   md:text-sm font-bold mask-linear-from-2.5 lg:text-xl  text-gray-300 text-center">
        Це приклад сторінки, створеної за допомогою Next.js та Tailwind CSS.
      </p>
      <Counter />
      <Clock />
      <FormModal />
      <ToDoList />
    </div>
  );
}
