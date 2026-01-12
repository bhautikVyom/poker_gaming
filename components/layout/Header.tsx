"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../assets/images/logo.png";
import SheetMenu from "./SheetMenu";
import HeaderMenu from "./HeaderMenu";
import { Button } from "../ui/button";
import Link from "next/link";
import QRDialog from "../common/QRDialog";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-[#C9964E] via-[#E7BE7A] to-[#F7E3A3] backdrop-blur-2xl py-3 lg:py-5 sticky top-0 z-20">
      <div className="container">
        <div className="flex items-center gap-4 lg:gap-10">
          <div className="flex items-center gap-10 w-full max-lg:justify-between">
            <div className="flex items-center gap-12">
              <Link href="/" className="max-lg:flex justify-center">
                <Image
                  src={Logo}
                  alt="Logo"
                  className="h-9 lg:h-10 w-[93px] lg:w-[104px]"
                />
              </Link>
              <div className="max-lg:hidden">
                <HeaderMenu />
              </div>
            </div>
            <div className="lg:hidden">
              <SheetMenu />
            </div>
          </div>
          <div className="items-center justify-center space-x-4 p-2.5 hidden lg:block">
            <Link
              href="#chips"
              className="uppercase rounded-md  text-background bg-primary font-bold px-5 py-1.5 text-lg"
            >
              Chips
            </Link>
            <Link
              href="#gold"
              className="uppercase rounded-md  text-background bg-primary font-bold px-5 py-1.5 text-lg"
            >
              gold
            </Link>
          </div>
          {/* <div>
            <Link href="#chips" className="font-semibold text-background/70 hover:text-background">Chips</Link>
            <Link href="#gold" className="font-semibold text-background/70 hover:text-background">Gold</Link>
            <Button
              variant="outline"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Connect
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
