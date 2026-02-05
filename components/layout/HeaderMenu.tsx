"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuData: { name: string; link: string }[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Games", link: "/games" },
  { name: "Contact", link: "/contact" },
];

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <div>
      <ul className="grid lg:flex items-center gap-5 lg:gap-10 max-lg:mt-10 max-lg:justify-center">
        {MenuData.map((item, index) => {
          const isActive = pathname === item.link;
          return (
            <li key={index} className="relative group w-fit">
              <Link
                href={item.link}
                className={`text-lg uppercase font-bold transition-all duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.name}
              </Link>

              {/* underline animation */}
              <span
                className={`block h-0.5 bg-primary transition-all duration-300 ease-in-out ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HeaderMenu;
