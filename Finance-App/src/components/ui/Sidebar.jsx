
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import MinimizeMenu from "../../assets/images/icon-minimize-menu.svg";
import budgetsIcon from "../../assets/images/icon-nav-budgets.svg";
import overviewIcon from "../../assets/images/icon-nav-overview.svg";
import potsIcon from "../../assets/images/icon-nav-pots.svg";
import recurringBillsIcon from "../../assets/images/icon-nav-recurring-bills.svg";
import transactionsIcon from "../../assets/images/icon-nav-transactions.svg";
import logoLarge from "../../assets/images/logo-large.svg";
import logoSmall from "../../assets/images/logo-small.svg";


const Sidebar = () => {
    const [minimized, setMinimized] = useState(false);

  return (
    <aside
      className={`h-screen ${
        minimized ? "w-20" : "w-64"
      } text-white flex flex-col shadow-lg bg-white transition-all duration-300`}
    >
      <div
        className={`rounded-tr-xl ${
          minimized ? "pl-0 flex justify-center items-center" : "pl-6"
        } font-public-bold tracking-normal bg-[var(--grey-900)] text-white`}
      >
        <img
          src={minimized ? logoSmall : logoLarge}
          alt="Finance Logo"
          className={
            minimized
              ? "pt-10 mb-20 w-10 h-20 object-contain"
              : "w-40 h-40 object-contain"
          }
        />
      </div>

      {/* Nav */}
      <nav className="flex-1 flex flex-col p-4 py-8 font-semibold rounded-br-xl bg-[var(--grey-900)]">
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white hover:text-[var(--grey-900)] transition relative"
            >
              <img src={overviewIcon} alt="Overview" className="w-5 h-5 p-0" />
              <span
                className={`transition-opacity duration-300 ${
                  minimized ? "opacity-0 absolute" : ""
                }`}
              >
                Overview
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="/transactions"
              className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white hover:text-[var(--grey-900)] transition relative"
            >
              <img src={transactionsIcon} alt="Transactions" className="w-5 h-5" />
              <span
                className={`transition-opacity duration-300 ${
                  minimized ? "opacity-0 absolute" : ""
                }`}
              >
                Transactions
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="/budgets"
              className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white hover:text-[var(--grey-900)] transition relative"
            >
              <img src={budgetsIcon} alt="Budgets" className="w-5 h-5" />
              <span
                className={`transition-opacity duration-300 ${
                  minimized ? "opacity-0 absolute" : ""
                }`}
              >
                Budgets
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="/pots"
              className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white hover:text-[var(--grey-900)] transition relative"
            >
              <img src={potsIcon} alt="Pots" className="w-5 h-5" />
              <span
                className={`transition-opacity duration-300 ${
                  minimized ? "opacity-0 absolute" : ""
                }`}
              >
                Pots
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="/bills"
              className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white hover:text-[var(--grey-900)] transition relative"
            >
              <img
                src={recurringBillsIcon}
                alt="Recurring Bills"
                className="w-5 h-5"
              />
              <span
                className={`transition-opacity duration-300 ${
                  minimized ? "opacity-0 absolute" : ""
                }`}
              >
                Recurring Bills
              </span>
            </Link>
          </li>
        </ul>

        <div className="mt-auto w-full py-2 rounded-xl font-lg flex flex-row gap-4 justify-center">
          <img
            src={MinimizeMenu}
            alt="minimize"
            className="cursor-pointer"
            onClick={() => setMinimized(!minimized)}
          />
          {!minimized && (
            <button onClick={() => setMinimized(!minimized)}>Minimize Menu</button>
          )}
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar