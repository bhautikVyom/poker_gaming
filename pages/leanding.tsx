"use client";

import { useEffect, useState } from "react";
import ConnectButton from "@/components/common/ConnectButton";
import Faqs from "@/components/common/faqs";
import ApiService from "@/service/ApiUrl";
import MoneyCard from "@/components/common/MoneyCard";
import { useSearchParams } from "next/navigation";
import { isMobileOrWebView } from "@/deviceType";
import PokerPlus from "@/components/common/PokerPlus";

interface profile {
    userName: string;
    pp: string;
    chips: number;
    uData: {
        userName: string;
        uniqueId: string;
        chips: number;
    };
}

const LeandingPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState<any>();
    const [userProfile, setUserProfile] = useState(false)
    const [profile, setProfile] = useState<profile>()

    const searchParams = useSearchParams();
    let uid;

    if (isMobileOrWebView()) {
        uid = searchParams?.get("uid");
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await ApiService.getWebStore();
            setData(result);
        }

        fetchData();
    }, [])

    useEffect(() => {
        if (!uid) return;

        const fetchData = async () => {
            if (isMobileOrWebView()) {

                const payload = {
                    uid: uid
                }
                const result = await ApiService.webLogin(payload)

                if (result) {
                    setProfile(result)
                    setUserProfile(true)
                }
            }
        }

        fetchData()
    }, [])

    return (
        <div className="min-h-screen bg-[url('../assets/background.jpg')] bg-cover bg-center bg-no-repeat">

            {/* <div className="flex items-center justify-center gap-4 bg-[#1d1d1d] p-2.5">
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
            </div> */}

            <PokerPlus />

            <ConnectButton setIsOpen={setIsOpen} isOpen={isOpen} uid={uid} userProfile={userProfile} profile={profile} />
            {/* <div className="bg-primary py-10 lg:py-24 p-2 lg:p-0">
                <div className="container border py-4 rounded-md">
                <p className="text-background/80 italic lg:text-lg">
                ACTIVE ZYNGA POKER ACCOUNT REQUIRED. 20% more chips and gold
                compared with same price purchases in device app store versions of
                ZYNGA POKER. Chips and gold values shown after login are inclusive
                        of any purchase multipliers that are applicable to you.
                    </p>
                </div>
            </div> */}

            <div className="pb-10 lg:pb-24">
                <div className="container">
                    <div className="grid gap-7 text-primary">
                        <h3 className="text-[40px] font-bold capitalize">Chips</h3>
                        <p className="lg:text-lg">
                            Chips can be used to wager on hands within various game modes in
                            Zynga Poker such as Texas Hold’Em, Omaha, Shortdeck, Pineapple
                            Poker, and Tournaments. Chips can be earned through regular gameplay
                            or bought directly. Using the Zynga Poker Store gives you 20% more
                            Chips on purchases compared to the standard in-game Chips Store.
                        </p>
                        <MoneyCard list={data?.chipsStore} uid={uid} />
                    </div>
                </div>
            </div>

            <Faqs />
        </div>
    );
};

export default LeandingPage