import QRDialog from "@/components/common/QRDialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Chips from "@/assets/images/chips-coin.avif"
import Gold from "@/assets/images/chips-coin.avif"
import { isMobileOrWebView } from "@/deviceType";

interface profile {
  userName?: string;
  pp?: string;
  chips?: number;
  uData?: {
    userName?: string;
    uniqueId?: string;
    chips?: number;
  };
}

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  profile?: profile
  userProfile: boolean
}

const ConnectButton = ({ isOpen, setIsOpen, userProfile, profile }: Props) => {

  return (
    <>
      <div className="sticky top-[60px] lg:top-20 left-0 z-20 w-full">
        {userProfile ? (
          <div className="lg:hidden">
            <div className="bg-primary/80 backdrop-blur-2xl h-10 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <Image src={Chips} alt="Chips Image" width={24} height={24} className="size-6" />
                <span className="text-background font-semibold">{profile?.uData?.chips}</span>
              </div>
            </div>
            <div className="p-4 bg-primary flex justify-start gap-4">
              <div className="h-16 w-16 rounded-full overflow-hidden border">
                <Image src={Gold} alt="Profile Image" height={100} width={100} className="w-full h-full object-cover bg-cover bg-center" />
              </div>
              <div className="grid gap-1">
                <h3 className="text-background text-xl line-clamp-1">
                  Welcome, {profile?.uData?.userName}
                </h3>
                <h3 className="text-background text-sm line-clamp-1">
                  Account: {profile?.uData?.uniqueId}
                </h3>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-b from-[#C9964E] via-[#E7BE7A] to-[#F7E3A3] text-primary backdrop-blur-2xl px-4 py-3.5 w-full flex items-center justify-center gap-5">
            <p className="lg:text-xl font-semibold">
              Connect to the game to purchase.
            </p>
            <Button
              variant="outline"
              className="text-xl py-1.5! px-5.5 h-auto uppercase text-primary border-primary"
              onClick={() => {
                if (isMobileOrWebView()) {
                  window.location.href =
                    "https://lalapoker.onelink.me/Wn19/rewardCampaign?code=weblogin&deep_link_value=weblogin";
                } else {
                  setIsOpen(true);
                }
              }}
            >
              Connect
            </Button>
          </div>
        )}


      </div>

      <QRDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default ConnectButton;
