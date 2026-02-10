"use client";

import React from "react";
import Logo from "../../assets/images/logo1.png";
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
    <div className="bg-primary max-lg:text-center">
      <div className="container py-2 lg:py-4 flex text-background font-semibold text-lg justify-between ">
        <div className=" flex items-center gap-4">
          <Link href="https://lalagaming.com/privacy-policy/">Privacy Policy</Link>
          <Link href="https://lalagaming.com/terms-and-conditions/">Terms of Use</Link>
        </div>
        <div>2026 Lala Gaming. All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Footer;
