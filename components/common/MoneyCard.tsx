import React from 'react';

const MoneyCard = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(380px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(380px,1fr))] gap-4">
      {[1,2,3,4,5,6,7].map((items,index) => (
        <div
          key={index}
          className="rounded-xl border border-input/40 h-20 bg-grediants"
        >
          Denish
        </div>
      ))}
    </div>
  )
}

export default MoneyCard;
