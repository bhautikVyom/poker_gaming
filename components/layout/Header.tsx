"use client";

import Image from "next/image";
import Logo from "../../assets/images/logo1.png";
import SheetMenu from "./SheetMenu";
import HeaderMenu from "./HeaderMenu";
import Link from "next/link";

const Header = () => {

  return (
    <div className="bg-primary backdrop-blur-2xl py-3 lg:py-5 sticky top-0 z-20">
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
        </div>
      </div>
    </div>
  );
};

export default Header;
