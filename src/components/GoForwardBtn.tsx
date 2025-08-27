"use client";
import { useRouter } from "next/navigation";
import { TiArrowForwardOutline } from "react-icons/ti";
export default function GoForwardBtn() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.forward()}
      className="absolute right-1 top-1 sm:right-4 sm:top-4  text-white hover:text-red-400 hover:scale-110 transition-transform duration-300"
    >
      <TiArrowForwardOutline className="text-2xl md:text-3xl" />
    </button>
  );
}
