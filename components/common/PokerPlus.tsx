import React from "react";
import { Button } from "@/components/ui/button";
import BonusImage from "@/assets/images/bonus.avif"
import Image from "next/image";

const PokerPlus = () => {
  return (
    <div className="bg-primary grid lg:grid-cols-2">
      <div className="lg:col-span-1 max-w-[500px] lg:ml-32 w-full flex items-center justify-center">
        <div className="flex flex-col gap-y-4 p-4 lg:p-8 items-center lg:items-start justify-center">
          <h3 className="font-semibold text-background text-4xl">
            Lala gaming
          </h3>
          <p className="text-background/80 max-md:text-center">
            Download Zynga Poker +plus for extra value on purchases! All your
            progress, chips, and achievements transfer seamlessly.
          </p>
          <Button variant="outline" className="text-xl text-primary font-semibold py-1.5! px-5.5 h-auto uppercase bg-gradient-to-b from-[#C9964E] via-[#E7BE7A] to-[#F7E3A3]">CLAIM BONUS</Button>
        </div>
      </div>
      <div className="lg:col-span-1">
        <Image
          src={BonusImage}
          alt="Bonus Image"
          width={800}
          height={700}
          className="max-h-[600px] h-full w-full object-cover bg-cover bg-center" />
      </div>
    </div>
  );
};

export default PokerPlus;
