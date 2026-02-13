"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import splash from '../../assets/images/splash.png'

export default function SplashScreen({ children }: any) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
     <div className="fixed inset-0 z-50">
        <Image
          src={splash}
          alt="Lala Poker"
          fill
          priority
          className="object-fill animate-pulse"
        />
      </div>
    );
  }

  return children;
}