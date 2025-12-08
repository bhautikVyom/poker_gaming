"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ConnectButton from "./ConnectButton";
import Link from "next/link";

const LeandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <ConnectButton setIsOpen={setIsOpen} isOpen={isOpen} />

      <div className="flex items-center justify-center gap-4 bg-[#1d1d1d] p-2.5">
        <Link href="#chips" className="uppercase bg-primary text-background font-bold px-5 py-1.5 rounded-4xl text-lg">Chips</Link>
        <Link href="#gold" className="uppercase bg-primary text-background font-bold px-5 py-1.5 rounded-4xl text-lg">gold</Link>
      </div>
    </div>
  );
};

export default LeandingPage;
