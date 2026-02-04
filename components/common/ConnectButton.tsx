import QRDialog from "@/components/common/QRDialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Chips from "@/assets/images/chips-coin.avif"
import Gold from "@/assets/images/chips-coin.avif"

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ConnectButton = ({ isOpen, setIsOpen }: Props) => {
  const userProfile = false

  const isMobileOrWebView = () => {
    if (typeof window === "undefined") return false;

    const ua = navigator.userAgent || navigator.vendor;

    const isMobile = /android|iphone|ipad|ipod/i.test(ua);

    const isWebView =
      /(wv|WebView)/i.test(ua) ||
      (/iPhone|iPad|iPod/i.test(ua) && !/Safari/i.test(ua));

    return isMobile || isWebView;
  };

  return (
    <>
      <div className="sticky top-[60px] lg:top-20 left-0 z-20 w-full">
        {userProfile ? (
          <div className="lg:hidden">
            <div className="bg-primary/80 backdrop-blur-2xl h-10 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <Image src={Chips} alt="Chips Image" width={24} height={24} className="size-6" />
                <span className="text-background font-semibold">0</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src={Gold} alt="Chips Image" width={24} height={24} className="size-6" />
                <span className="text-background font-semibold">0</span>
              </div>
            </div>
            <div className="p-4 bg-primary flex justify-start gap-4">
              <div className="h-16 w-16 rounded-full overflow-hidden border">
                <Image src={Gold} alt="Profile Image" height={100} width={100} className="w-full h-full object-cover bg-cover bg-center" />
              </div>
              <div className="grid gap-1">
                <h3 className="text-background text-xl line-clamp-1">
                  Welcome, Priyank
                </h3>
                <h3 className="text-background text-sm line-clamp-1">
                  Account: {"9823154894812"}
                </h3>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <h3 className="text-background text-sm line-clamp-1">
                    Sapphire
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-[#1d1d1d] backdrop-blur-2xl px-4 py-3.5 w-full flex items-center justify-center gap-5">
            <p className="lg:text-xl font-semibold text-background">
              Connect to the game to purchase.
            </p>
            <Button
              variant="outline"
              className="text-xl py-1.5! px-5.5 h-auto uppercase"
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
