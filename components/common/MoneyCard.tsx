"use client";

import React, { useState } from "react";
import Image from "next/image";
import i1 from "@/assets/images/1.png";
import i2 from "@/assets/images/2.png";
import i3 from "@/assets/images/3.png";
import i4 from "@/assets/images/4.png";
import i5 from "@/assets/images/5.png";
import i6 from "@/assets/images/6.png";
import i7 from "@/assets/images/7.png";
import i8 from "@/assets/images/8.png";

import ChipsCoin from "@/assets/images/chips-coin.avif";
import Gold from "@/assets/images/gold.avif";
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
  active?: boolean;
}

interface MoneyCardProps {
  list?: MoneyItem[];
}

const MoneyCard = ({ list, uid }: MoneyCardProps) => {

  const [isOpen, setIsOpen] = useState(false)
  const [link, setLink] = useState("")

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
    console.log("items", items);

    const payload = {
      uid: uid,
      plan_id: items?.plan_id,
      price: items?.price,
      amount: items?.amount,
      PurchaseType: items?.type,
      priceId: items?.priceId
    }

    const response = await ApiService.purchaseChips(payload)

    if (response?.url) {
      window.open(
        response.url,
        "stripeCheckout",
        "width=500,height=700,top=100,left=500"
      );
    }

  }

  const getImageByPrice = (price: string) => {
    const amount = Number(price);

    if (amount >= 0 && amount < 50) return i1;
    if (amount >= 50 && amount < 100) return i2;
    if (amount >= 100 && amount < 200) return i3;
    if (amount >= 200 && amount < 300) return i4;
    if (amount >= 300 && amount < 500) return i5;
    if (amount >= 500 && amount < 1000) return i6;
    if (amount >= 1000 && amount < 2000) return i7;

    return i8;
  };


  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4">
      {list?.filter(item => item?.type === "chips" && item?.active === true)?.map((items, index) => (
        <div
          key={index}
          className="relative h-[209px]"
          style={{ perspective: "1000px" }}
        >
          <div
            className="absolute inset-0 rounded-xl p-4 border border-input/40 bg-gradient-to-b from-[#C9964E] via-[#E7BE7A] to-[#F7E3A3]"
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
              <Image
                src={getImageByPrice(items?.price)}
                alt="Chips"
                className="w-[120px] h-[120px] object-contain"
              />

              <div className="grid gap-2">
                <div className="flex items-center gap-1.5">
                  <h3 className="capitalize lg:text-xl font-semibold text-primary">
                    {items?.title || "Chips"}
                  </h3>
                  <PiWarningCircle
                    onClick={() => handleFlip(index)}
                    className="cursor-pointer rotate-180 text-primary size-5"
                  />
                </div>
                <h2 className="text-primary font-bold text-xl lg:text-3xl">
                  ${items?.price}
                </h2>
                <div className="h-10 flex items-center gap-1 px-2.5 w-fit bg-primary/20 rounded-sm mb-1">
                  <Image
                    src={ChipsCoin}
                    alt="VIP"
                    width={30}
                    height={30}
                    className="h-[30px] w-[30px]"
                  />
                  <h3 className="text-primary font-bold lg:text-xl">
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
                  <h3 className="text-primary font-bold lg:text-xl">
                    {items?.price}
                  </h3>
                </div>
                <IoClose
                  className="text-primary size-5 cursor-pointer"
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
                <h3 className="text-primary font-bold lg:text-xl">
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
