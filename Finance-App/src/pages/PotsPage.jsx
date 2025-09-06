import React from 'react';
import PotsCard from '../components/pots/potsCard';
import { useMoneyStore } from '../stores/moneystore';

const PotsPage = () => {
  const pots = useMoneyStore((store) => store.pots);
  console.log(pots);

  return (
      <div className="bg-[var(--beige-100)] h-full p-8 ">
        <div className="flex flex-row flex-end justify-between p-4 h-1/10">
          <h1 className="text-5xl font-semibold">Pots</h1>
          <button className="bg-[var(--grey-900)] text-white rounded-lg cursor-pointer hover:bg-[var(--grey-500)] hover:transition ease-in-out duration-500 font-semibold p-4">+ Add New Pot</button>
        </div>
        {/* Render pots here */}
        <div className="p-8 grid grid-cols-2 gap-4">
          {pots.map((pot, index) => (
            <PotsCard 
              key={index} 
              name={pot.name} 
              target={pot.target} 
              total={pot.total}
              theme={pot.theme}
            />
          ))}
        </div>

    </div>

  )
}

export default PotsPage