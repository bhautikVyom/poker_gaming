"use client";

import { useEffect, useState } from "react";
import ConnectButton from "@/components/common/ConnectButton";
import Faqs from "@/components/common/faqs";
import ApiService from "@/service/ApiUrl";
import MoneyCard from "@/components/common/MoneyCard";
import { useSearchParams } from "next/navigation";
import { isMobileOrWebView } from "@/deviceType";
import PokerPlus from "@/components/common/PokerPlus";
import { Button } from "@/components/ui/button";
import QRDialog from "@/components/common/QRDialog";

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

interface ChipsItem {
    type: string;
    title: string;
    price: string;
    amount: string;
    priceId?: string;
    plan_id?: string;
    active?: boolean;
}

interface StoreData {
    chipsStore: ChipsItem[];
}

const LeandingPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [qr, setQr] = useState(false);
    const [data, setData] = useState<StoreData>();
    const [userProfile, setUserProfile] = useState(false)
    const [profile, setProfile] = useState<profile>()

    const searchParams = useSearchParams();

    let uid

    useEffect(() => {
        const fetchData = async () => {
            const result = await ApiService.getWebStore();
            setData(result as StoreData);
        }

        fetchData();
    }, [])

    useEffect(() => {
        if (!isMobileOrWebView()) return;

        const handleLogin = async () => {
            try {
                uid = searchParams?.get("uid");

                const sessionProfile = sessionStorage.getItem("WEB_USER_PROFILE");

                if (!uid && sessionProfile) {
                    const parsedProfile = JSON.parse(sessionProfile);
                    uid = parsedProfile?.uData?._id
                }

                if (!uid) return;

                const payload = { uid: uid };

                const result = await ApiService.webLogin(payload);

                if (result) {
                    setProfile(result);
                    setUserProfile(true);

                    sessionStorage.setItem(
                        "WEB_USER_PROFILE",
                        JSON.stringify(result)
                    );
                }
            } catch (error) {
                console.error("Web login failed:", error);
                sessionStorage.removeItem("WEB_USER_PROFILE")
            }
        };

        handleLogin();
    }, [uid]);

    return (
        <div className="min-h-screen bg-[url('../assets/background.jpg')] bg-cover bg-center bg-no-repeat">

            {isMobileOrWebView() && <ConnectButton setIsOpen={setIsOpen} isOpen={isOpen} userProfile={userProfile} profile={profile} />}

            <PokerPlus />

            {!isMobileOrWebView() && (
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
                                setQr(true);
                            }
                        }}
                    >
                        Connect
                    </Button>
                </div>
            )}

            <div className="pb-10 lg:pb-24">
                <div className="container">
                    <div className="grid gap-7 text-primary">
                        <h3 className="text-[40px] font-bold capitalize" id="chips">Chips</h3>
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
            <QRDialog isOpen={qr} setIsOpen={setQr} />
        </div>
    );
};

export default LeandingPage