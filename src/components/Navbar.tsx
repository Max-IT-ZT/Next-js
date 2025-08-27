"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Головна" },
    { href: "/movies", label: "Фільми" },
    { href: "/searchMovies", label: "Пошук фільмів" },
    { href: "/dashboard", label: "Дошка" },
    { href: "/login", label: "Увійти" },
    { href: "/contact", label: "Контакти" },
  ];

  return (
    <nav className="relative z-50 flex items-center justify-between px-7 py-2 border-b border-white/20 backdrop-blur-md  shadow-lg text-white">
      <a href="https://maxdev.site" target="_blank" rel="noopener noreferrer">
        <Image
          src="/img/logoMaxDev.webp"
          priority
          alt="Logo"
          width={50}
          height={50}
        />
      </a>
      <ul className="hidden lg:flex space-x-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-lg font-semibold hover:text-red-400 ${
                pathname === link.href
                  ? "border-b-2 border-red-400 pb-1"
                  : "text-gray-400"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        className="lg:hidden flex items-center z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="drawer"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 h-screen w-2/3 bg-black/70 backdrop-blur-md rounded-b-2xl rounded-tr-2xl p-6 flex flex-col z-40"
          >
            <ul className="flex flex-col space-y-6 mt-10">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block text-lg font-semibold hover:text-red-400 ${
                      pathname === link.href
                        ? "border-l-4 border-red-400 pl-2 text-white"
                        : "text-gray-300"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </nav>
  );
}
