'use client';

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function Success() {
    const [countdown, setCountdown] = useState(5);

    const redirectHome = () => {
        window.location.href = "/";
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    redirectHome();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-[url('../assets/background.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="px-10 py-12 max-w-md w-full text-center animate-fade-in">

                <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-4 animate-bounce" />

                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Payment Successful 🎉
                </h1>

                <p className="text-gray-600 mb-6">
                    Your payment was completed securely.
                </p>

                <p className="text-sm text-gray-500 mb-6">
                    Redirecting in <span className="font-semibold">{countdown}</span> seconds…
                </p>

                <Button variant="outline" className="text-xl text-primary font-semibold py-1.5! px-5.5 h-auto uppercase bg-gradient-to-b from-[#C9964E] via-[#E7BE7A] to-[#F7E3A3]" onClick={redirectHome}>OK</Button>
                <p className="text-xs text-gray-400 mt-4">
                    You can safely close this page.
                </p>
            </div>
        </div>
    );
}
