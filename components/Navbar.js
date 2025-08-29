"use client";
import { useState } from "react";
import Link from "next/link";

export default function TopNavbar() {
  const links = ["الرئيسية", "الخدمات", "أعمالي", "المهارات", "التواصل"];
  const [hovered, setHovered] = useState(null);

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 
                 max-w-[90%] px-6 py-3 
                 bg-white/10 backdrop-blur-md rounded-full shadow-lg z-50
                 flex justify-center gap-6"
    >
      {links.map((link, index) => (
        <span
          key={index}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className={`cursor-pointer font-semibold whitespace-nowrap text-gray-600
                      transition-opacity duration-1000 ease-out
                      ${hovered !== null && hovered !== index ? "opacity-0" : "opacity-100"}`}
        >
          <Link href={`/${link.toLowerCase()}`}>{link}</Link>
        </span>
      ))}
    </nav>
  );
}
