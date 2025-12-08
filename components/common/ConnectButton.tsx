import QRDialog from "@/components/common/QRDialog";
import { Button } from "@/components/ui/button";
import React from "react";

const ConnectButton = ({isOpen, setIsOpen }: any) => {
  return (
    <>
      <div className="bg-primary backdrop-blur-2xl py-3.5 flex items-center gap-5 justify-center sticky top-20 left-0">
        <p className="lg:text-xl font-semibold text-background">
          Connect to the game to purchase.
        </p>
        <Button
          variant="outline"
          className="text-xl py-1.5! px-5.5 h-auto uppercase"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Connect
        </Button>
      </div>
      
      <QRDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default ConnectButton;
