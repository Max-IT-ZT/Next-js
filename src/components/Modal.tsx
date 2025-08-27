"use client";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 border border-white/20 backdrop-blur-md shadow-lg flex items-center justify-center z-50">
      <div className=" p-6 rounded-lg border border-white/20 backdrop-blur-md shadow-lg text-white w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
