"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Головна" },
    { href: "/posts", label: "Пости" },
    { href: "/about", label: "Про нас" },
  ];

  return (
    <nav className="flex items-center p-4 border-b border-white/20 backdrop-blur-md shadow-lg text-white">
      <a href="https://maxdev.site" target="_blank" rel="noopener noreferrer">
        <Image
          src="/img/Logo2.png"
          alt="Logo"
          width={40}
          height={40}
          className="mr-10 rounded-b-full bg-white"
        />
      </a>
      <ul className="flex space-x-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-lg font-semibold hover:text-red-400 ${
                pathname === link.href
                  ? "border-b-2 border-red-400 pb-1"
                  : "text-gray-400 "
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
