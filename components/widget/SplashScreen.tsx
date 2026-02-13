"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import splash from "../../assets/images/splash.png";

export default function SplashScreen({ children }: any) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {children}

      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary">
          <Image
            src={splash}
            alt="Lala Poker"
            width={500}
            height={500}
            priority
            className="animate-pulse"
          />
        </div>
      )}
    </>
  );
}