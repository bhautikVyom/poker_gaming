import React from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import CommonButton from "../widget/CommonButton";
import { Button } from "../ui/button";
import HeaderMenu from "./HeaderMenu";
import { TextAlignJustify } from "lucide-react";

const SheetMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="border-none">
        <Button variant="outline"><TextAlignJustify className="text-background border-none" /></Button>
      </SheetTrigger>
      <SheetContent side="left" className="backdrop-blur-xl bg-background/50 border-0">
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
