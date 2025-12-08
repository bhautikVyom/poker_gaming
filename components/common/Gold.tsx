import MoneyCard from "@/components/common/MoneyCard";
import React from "react";

const Gold = () => {
  return (
    <div className="bg-primary pb-10 lg:pb-24">
      <div className="container">
        <div className="grid gap-7">
          <h3 className="text-[40px] font-bold capitalize text-background">
            Gold
          </h3>
          <p className="lg:text-lg text-background/80">
            Gold can be used to spin our Mega Lucky Bonus machine, which earns
            you even MORE chips! Gold can be earned through regular gameplay or
            bought directly. Using the Zynga Poker Store gives you 20% more Gold
            on purchases compared to the standard in-game Gold Store.
          </p>
          <MoneyCard />
        </div>
      </div>
    </div>
  );
};

export default Gold;
