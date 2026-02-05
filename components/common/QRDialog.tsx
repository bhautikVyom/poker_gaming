import React from "react";
import CommonDialog from "../widget/CommonDialog";
import { IoClose } from "react-icons/io5";
import PokerImage from "@/assets/images/poker-dialog.avif"
import QRImage from "@/assets/images/qr.png"
import Image from "next/image";

interface QRDialogProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const QRDialog: React.FC<QRDialogProps> = ({ isOpen, setIsOpen }) => {
  const handleClose = () => {
    setIsOpen(false);
    console.log("close")
  };

  return (
    <div>
      <CommonDialog isOpen={isOpen} onClose={setIsOpen} size="lg" title="">
        {/* Close button */}
        <div
          className="fixed right-0 top-0 z-20 cursor-pointer"
          onClick={handleClose}
        >
          <IoClose className="text-background size-7" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-4 bg-primary rounded-xl overflow-hidden">
            <div className="overflow-hidden h-fit">
                <Image src={PokerImage} alt="Poker Table" width={800} height={400} className="bg-contain object-contain w-full h-full" />
            </div>
            <div className="grid gap-4 h-fit pb-8">
                <h2 className="text-background text-2xl font-semibold text-center">Connect to the Lala Poker Store!</h2>
                <p className="text-center text-background lg:text-lg">Connect to the game to purchase items.</p>
                <Image src={QRImage} alt="Poker Table" width={200} height={200} className="bg-contain object-contain mx-auto" />
            </div>
        </div>
      </CommonDialog>
    </div>
  );
};

export default QRDialog;
