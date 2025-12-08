"use client";

import React from "react";
import Logo from "../../assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Separator } from "../ui/separator";

const serviceData = [
  {
    name: "Terms of Service",
    href: "",
  },
  {
    name: "Privacy Policy",
    href: "",
  },
  {
    name: "Cookie Policy",
    href: "",
  },
  {
    name: "Refund Policy",
    href: "",
  },
  {
    name: "Support",
    href: "",
  },
];

const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="bg-[#1d1d1d]">
      <div className="container">
        <div className="grid lg:grid-cols-3 justify-center py-7.5 gap-6 lg:gap-10">
          <div className="grid gap-4 h-fit">
            <Link href="/" className="max-lg:mx-auto">
              <Image
                src={Logo}
                alt="Logo"
                className="h-9 lg:h-10 w-[93px] lg:w-[104px] max-md:mx-auto"
              />
            </Link>
            <p className="max-lg:text-sm text-background/70 max-lg:text-center max-lg:max-w-[480px]">
              The games are intended for an adult audience. The games do not
              offer "real money gambling" or an opportunity to win real money or
              prizes. Practice or success at social casino gaming does not imply
              future success at "real money gambling".
            </p>
          </div>
          <div className="grid gap-5 justify-center">
            <h3 className="font-semibold text-background text-xl">Service</h3>
            <ul className="grid gap-3">
              {serviceData.map((items, index) => {
                const isActive = pathname === items.href;
                return (
                  <li key={index} className="relative group w-fit">
                    <Link
                      href={items.href}
                      className={`lg:text-lg font-semibold transition-all duration-200 ${
                        isActive
                          ? ""
                          : "text-background/70 hover:text-background"
                      }`}
                    >
                      {items.name}
                    </Link>

                    {/* underline animation */}
                    <span
                      className={`block h-0.5 bg-primary lg:bg-background transition-all duration-300 ease-in-out ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="grid gap-5 justify-center h-fit">
            <h3 className="font-semibold text-background text-xl">Social</h3>
            <div className="flex items-center gap-4">
              <Link href="">
                <FaFacebookF className="text-background hover:text-background/60 duration-200 size-6" />{" "}
              </Link>
              <Link href="">
                <FaInstagram className="text-background hover:text-background/60 duration-200 size-6" />{" "}
              </Link>
              <Link href="">
                <FaYoutube className="text-background hover:text-background/60 duration-200 size-6" />{" "}
              </Link>
              <Link href="">
                <FaTwitter className="text-background hover:text-background/60 duration-200 size-6" />{" "}
              </Link>
            </div>
          </div>
        </div>
        <Separator className="opacity-15" />
        <div className="p-4 text-center">
              <p className="text-background/70 text-sm">©2025 Zynga, Inc. Zynga, Zynga Poker</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
