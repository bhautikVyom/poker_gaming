import React from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import HeaderMenu from "./HeaderMenu";
import { TextAlignJustify } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/images/logo1.png";

const SheetMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="border-none">
        <Button variant="outline"><TextAlignJustify className="text-background border-none" /></Button>
      </SheetTrigger>
      <SheetContent className="bg-primary">
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
