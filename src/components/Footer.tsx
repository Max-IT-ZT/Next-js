import Image from "next/image";
import React from "react";
import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from "react-icons/ri";
export default function Footer() {
  return (
    <footer className="backdrop-blur-md border-t border-white/20 shadow-lg text-white p-2">
      <div className="max-w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <a
            href="https://maxdev.site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/MaxDev.png"
              priority={false}
              alt="Logo"
              width={60}
              height={60}
              className=""
            />
          </a>
        </div>
        <div className="text-sm text-gray-300">
          <div className="text-center">
            Email:{" "}
            <a href="mailto:info@myproject.com" className="underline">
              info@myproject.com
            </a>
          </div>
          <div className="text-center">
            Телефон:{" "}
            <a href="tel:+380123456789" className="underline">
              +38 (012) 345-67-89
            </a>
          </div>
          <div className="mt-4 text-xs text-gray-400 text-center">
            © {new Date().getFullYear()} MyProject. Всі права захищені. Ліцензія
            MIT.
          </div>
        </div>
        <div className="flex gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <RiFacebookFill className="w-6 h-6 fill-current hover:text-blue-500" />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <RiTwitterFill className="w-6 h-6 fill-current hover:text-blue-400" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <RiInstagramFill className="w-6 h-6 fill-current hover:text-pink-500 " />
          </a>
        </div>
      </div>
    </footer>
  );
}
