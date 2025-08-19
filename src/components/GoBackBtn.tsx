"use client";
import { useRouter } from "next/navigation";
import { TiArrowBackOutline } from "react-icons/ti";

export default function GoBackBtn() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="absolute right-4 top-4 text-white hover:text-red-400 hover:scale-110 transition-transform duration-300 sm:right-1 sm:top-1"
    >
      <TiArrowBackOutline className="text-2xl md:text-3xl" />
    </button>
  );
}
