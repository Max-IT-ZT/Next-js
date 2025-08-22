"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";
type ModernModalPlayerProps = {
  videoKey: string | null;
};

export default function ModernModalPlayer({
  videoKey,
}: ModernModalPlayerProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!videoKey) return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-5 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Переглянути трейлер
      </button>

      {isOpen && (
        <div
          className="fixed inset-0  flex justify-center items-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video rounded-xl shadow-2xl overflow-hidden transform scale-95 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <ReactPlayer
              src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&modestbranding=1&rel=0`}
              width="100%"
              height="100%"
              playing={isOpen}
              controls
              className="rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
