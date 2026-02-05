"use client";

import React, { useState } from "react";
import Image from "next/image";
import Chips from "@/assets/images/chips.avif";
import ChipsCoin from "@/assets/images/chips-coin.avif";
import Gold from "@/assets/images/gold.avif";
import VIP from "@/assets/images/vip.avif";
import { PiWarningCircle } from "react-icons/pi";
import { Button } from "../ui/button";
import { IoClose } from "react-icons/io5";
import QRDialog from "./QRDialog";
import ApiService from "@/service/ApiUrl";

interface MoneyItem {
  type: string;
  title: string;
  price: string;
  amount: string;
  priceId?: string;
  plan_id?: string;
}

interface MoneyCardProps {
  list?: MoneyItem[];
}

const MoneyCard = ({ list, uid }: MoneyCardProps) => {

  const [isOpen, setIsOpen] = useState(false)

  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleFlip = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handlePurchase = async (items: MoneyItem) => {
    const payload = {
      uid: uid,
      plan_id: items?.plan_id,
      price: items?.price,
      amount: items?.amount,
      PurchaseType: items?.type,
      priceId: items?.priceId
    }

    console.log("payload", payload);

    const response = await ApiService.purchaseChips(payload)
    if (response) {
      alert("Purchase successful!")
    }
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4">
      {list?.filter(item => item?.type === "chips")?.map((items, index) => (
        <div
          key={index}
          className="relative h-[209px]"
          style={{ perspective: "1000px" }}
        >
          <div
            className="absolute inset-0 rounded-xl p-4 border border-input/40 bg-gradient-to-b from-primary to-background/30"
            style={{
              transformStyle: "preserve-3d",
              transform: flippedCards[index]
                ? "rotateX(180deg)"
                : "rotateX(0deg)",
              transition:
                "transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 p-4 flex items-start gap-3"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="size-[120px]">
                <Image
                  src={Chips}
                  alt="Chips"
                  width={120}
                  height={120}
                  className=""
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-1.5">
                  <h3 className="capitalize lg:text-xl font-semibold text-background">
                    {items?.title || "Chips"}
                  </h3>
                  <PiWarningCircle
                    onClick={() => handleFlip(index)}
                    className="cursor-pointer rotate-180 text-background size-5"
                  />
                </div>
                <h2 className="text-background font-bold text-xl lg:text-3xl">
                  ${items?.price}
                </h2>
                <div className="h-10 flex items-center gap-1 px-2.5 w-fit bg-background/10 rounded mb-1">
                  <Image
                    src={ChipsCoin}
                    alt="VIP"
                    width={30}
                    height={30}
                    className="h-[30px] w-[30px]"
                  />
                  <h3 className="text-background font-bold lg:text-xl">
                    {items?.amount}
                  </h3>
                </div>
                {uid ? (
                  <Button
                    className="text-xl py-2! px-5.5 h-auto uppercase w-full"
                    onClick={() => handlePurchase(items)}
                  >
                    Purchse
                  </Button>
                ) : (
                  <Button
                    className="text-xl py-2! px-5.5 h-auto uppercase w-full"
                    onClick={
                      () => {
                        setIsOpen(true);
                      }
                    }
                  >
                    login
                  </Button>
                )}
              </div>
            </div>

            {/* Back */}
            <div
              className="absolute inset-0 p-4 flex justify-center flex-col gap-2"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateX(180deg)",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Image
                    src={ChipsCoin}
                    alt="Chips"
                    width={30}
                    height={30}
                    className="h-[30px] w-[30px]"
                  />
                  <h3 className="text-background font-bold lg:text-xl">
                    {items?.price}
                  </h3>
                </div>
                <IoClose
                  className="text-background size-5 cursor-pointer"
                  onClick={() => handleFlip(index)}
                />
              </div>
              <div className="flex items-center gap-1">
                <Image
                  src={Gold}
                  alt="Gold"
                  width={30}
                  height={30}
                  className="h-[30px] w-[30px]"
                />
                <h3 className="text-background font-bold lg:text-xl">
                  {items?.amount}
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))
      }

      <QRDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </div >
  );
};

export default MoneyCard;
