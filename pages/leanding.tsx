"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Link from "next/link";
import ConnectButton from "@/components/common/ConnectButton";
import PokerPlus from "@/components/common/PokerPlus";
import Card from "@/components/common/Card";

const data = [
    {
        type: "chips",
        name: "chips",
        description: "Chips can be used to wager on hands within various game modes in Zynga Poker such as Texas Hold`Em, Omaha, Shortdeck, Pineapple Poker, and Tournaments. Chips can be earned through regular gameplay or bought directly. Using the Zynga Poker Store gives you 20% more Chips on purchases compared to the standard in-game Chips Store.",
        data: [
            {
                image: "https://thumbnails.yayimages.com/1600/10/97d/1097de72.jpg",
                title: "Great Vault",
                price: "264,000,000,000",
                vip: "2000",
                coins: "10"
            },
            {
                image: "https://www.tightpoker.com/app/uploads/2023/06/AdobeStock_257420103-874x492-1.jpg",
                title: "Big Vault",
                price: "264,000,000,000",
                vip: "2000",
                coins: "10"
            },
        ]
    },
    {
        type: "gold",
        name: "Gold",
        description: "Gold can be used to spin our Mega Lucky Bonus machine, which earns you even MORE chips! Gold can be earned through regular gameplay or bought directly. Using the Zynga Poker Store gives you 20% more Gold on purchases compared to the standard in-game Gold Store.",
        data: [
            {
                image: "https://thumbnails.yayimages.com/1600/10/97d/1097de72.jpg",
                title: "Great Vault",
                price: "264,000,000,000",
                vip: "2000",
                coins: "10"
            },
            {
                image: "https://www.tightpoker.com/app/uploads/2023/06/AdobeStock_257420103-874x492-1.jpg",
                title: "Big Vault",
                price: "264,000,000,000",
                vip: "2000",
                coins: "10"
            },
        ]
    }
]
const LeandingPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <ConnectButton setIsOpen={setIsOpen} isOpen={isOpen} />

            <div className="flex items-center justify-center gap-4 bg-[#1d1d1d] p-2.5">
                <Link
                    href="#chips"
                    className="uppercase bg-primary text-background font-bold px-5 py-1.5 rounded-4xl text-lg"
                >
                    Chips
                </Link>
                <Link
                    href="#gold"
                    className="uppercase bg-primary text-background font-bold px-5 py-1.5 rounded-4xl text-lg"
                >
                    gold
                </Link>
            </div>

            <PokerPlus />

            <div className="bg-primary py-10 lg:py-24">
                <div className="container">
                    <p className="text-background/80 italic lg:text-lg">
                        ACTIVE ZYNGA POKER ACCOUNT REQUIRED. 20% more chips and gold
                        compared with same price purchases in device app store versions of
                        ZYNGA POKER. Chips and gold values shown after login are inclusive
                        of any purchase multipliers that are applicable to you.
                    </p>
                </div>
            </div>

            {data?.map((list, index) => (
                <section id={list?.type} key={index}>
                    <Card list={list} />
                </section>
            ))}
        </div>
    );
};

export default LeandingPage