"use client"

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../assets/images/logo.png";
import SheetMenu from "./SheetMenu";
import HeaderMenu from "./HeaderMenu";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-primary py-3 lg:py-5 sticky top-0 z-20">
      <div className="container">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-10">
            <Link href="/" className="">
              <Image
                src={Logo}
                alt="Logo"
                className="h-9 lg:h-10 w-[93px] lg:w-[104px]"
              />
            </Link>
          </div>
          <div className="lg:hidden">
            <SheetMenu />
          </div>
          <div className="max-lg:hidden">
            <HeaderMenu />
          </div>
          <div>
            <Button
              variant="outline"
              onClick={() => {
                setIsOpen("add");
              }}
            >
              Connect
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
