"use client";
import { useRouter } from "next/navigation";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function GoBackBtn() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="
        absolute top-5 right-5 
        w-10 h-10 flex items-center justify-center   
        text-white 
         hover:text-red-600 hover:scale-110 
        transition-all duration-300
        z-50
      "
    >
      <RiArrowGoBackFill className="text-2xl md:text-3xl" />
    </button>
  );
}
