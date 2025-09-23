import React from 'react';
import { Link } from "react-router-dom";
import IconPot from '../../../assets/images/icon-pot.svg';
import { useRootStore } from '../../../stores/rootStore';


const PotsOverview = () => {
  const pots = useRootStore((store) => store.pots);
 
  const total = pots.reduce((acc, pot) => acc + pot.total, 0);
  
  return (
    <div className="bg-white rounded-xl shadow-sm">
      {/* Header */}
      <div className="flex flex-row justify-between p-6 items-center">
        <h1 className="text-[var(--grey-900)] font-bold text-lg">Pots</h1>
        <p className="text-[var(--grey-500)] text-sm font-semibold cursor-pointer">
          <Link to="/pots" className="text-[var(--grey-500)] text-sm font-semibold hover:text-[var(--grey-900)] transition">
            See Details →
          </Link>
        </p>
      </div>

      {/* Body */}
      <div className="grid grid-rows-2 grid-cols-3 gap-4 px-6 pb-6">
        {/* Left: Total Saved */}
        <div className="row-span-2 col-span-1 bg-[var(--beige-100)] rounded-xl flex flex-col items-center justify-center p-6">
          <img src={IconPot} alt="Pot Icon" className="w-10 h-10 mb-3" />
          <p className="text-[var(--grey-500)] text-sm font-semibold">
            Total Saved
          </p>
          <h1 className="text-3xl font-bold text-[var(--grey-900)]">
            ${total}
          </h1>
        </div>

        {/* Right: Pots list */}
        <div className="row-span-2 col-span-2 grid grid-cols-2 gap-y-4">
          {pots.map((pot) => (
            <div key={pot.id} className="flex items-center gap-2">
              {/* Colored bar */}
              <div
                className="w-1 h-6 rounded-full"
                style={{ backgroundColor: pot.theme }}
              />
              {/* Name + Value */}
              <div className="flex flex-col">
                <span className="text-[var(--grey-500)] text-sm font-semibold">
                  {pot.name}
                </span>
                <span className="text-[var(--grey-900)] font-bold">
                  ${pot.total}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PotsOverview