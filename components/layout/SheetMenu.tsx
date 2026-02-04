import React from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import CommonButton from "../widget/CommonButton";
import { Button } from "../ui/button";
import HeaderMenu from "./HeaderMenu";
import { TextAlignJustify } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/images/logo.png";

const SheetMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="border-none">
        <Button variant="outline"><TextAlignJustify className="text-background border-none" /></Button>
      </SheetTrigger>
      <SheetContent className="bg-gradient-to-b from-[#C9964E] via-[#E7BE7A] to-[#F7E3A3]">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription>
            <Link href="/" className="max-lg:flex justify-center">
              <Image
                src={Logo}
                alt="Logo"
                className="h-9 lg:h-10 w-[93px] lg:w-[104px]"
              />
            </Link>
            <HeaderMenu />
          </SheetDescription>
        </SheetHeader>

      </SheetContent>
    </Sheet>
  );
};

export default SheetMenu;
