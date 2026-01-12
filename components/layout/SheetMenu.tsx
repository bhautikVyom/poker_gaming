import React from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import CommonButton from "../widget/CommonButton";
import { Button } from "../ui/button";
import HeaderMenu from "./HeaderMenu";
import { TextAlignJustify } from "lucide-react";
import Link from "next/link";

const SheetMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="border-none">
        <Button variant="outline"><TextAlignJustify className="text-background border-none" /></Button>
      </SheetTrigger>
      <SheetContent className="backdrop-blur-xl bg-primary/50 border-0">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription>
           <HeaderMenu />
          </SheetDescription>
        </SheetHeader>
        
      </SheetContent>
    </Sheet>
  );
};

export default SheetMenu;
