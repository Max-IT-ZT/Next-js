"use client";
import { useRouter } from "next/navigation";
import { TiArrowBackOutline } from "react-icons/ti";

export default function GoBackBtn() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="absolute flex flex-col items-center justify-center gap-0  right-1 top-1 sm:right-4 sm:top-4 text-white hover:text-red-400 hover:scale-110 transition-transform duration-300"
    >
      <TiArrowBackOutline className="text-2xl md:text-3xl" />
    </button>
  );
}
