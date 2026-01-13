import MoneyCard from '@/components/common/MoneyCard'
import React from 'react'

interface CardProps {
  list?: {
    name: string;
    data: MoneyItem[];
  };
}

interface MoneyItem {
  title: string;
  price: string;
  vip: string;
  coins: string;
}

const Card = ({ list }: CardProps) => {
  return (
    <div className="bg-primary pb-10 lg:pb-24">
      <div className="container">
        <div className="grid gap-7">
          <h3 className="text-[40px] font-bold capitalize text-background">{list?.name}</h3>
          <p className="lg:text-lg text-background/80">
            Chips can be used to wager on hands within various game modes in
            Zynga Poker such as Texas Hold’Em, Omaha, Shortdeck, Pineapple
            Poker, and Tournaments. Chips can be earned through regular gameplay
            or bought directly. Using the Zynga Poker Store gives you 20% more
            Chips on purchases compared to the standard in-game Chips Store.
          </p>
          <MoneyCard list={list?.data} />
        </div>
      </div>
    </div>
  )
}

export default Card
