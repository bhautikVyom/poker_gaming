"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Link from "next/link";
import ConnectButton from "@/components/common/ConnectButton";
import PokerPlus from "@/components/common/PokerPlus";
import Chips from "@/components/common/Chips";
import Gold from "@/components/common/Gold";

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

            <section id="chips">
                <Chips />
            </section>

            <section id="gold">
                <Gold />
            </section>
        </div>
    );
};

export default LeandingPage