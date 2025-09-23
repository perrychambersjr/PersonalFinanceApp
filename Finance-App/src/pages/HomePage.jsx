import { useRootStore } from "../stores/rootStore";
import { toCurrency } from "../utils/toCurrency";

export default function HomePage() {
    const balance = useRootStore((state) => state.balance)

    return (
        <div className="bg-[var(--beige-100)] h-full p-8">
            <h1 className="text-5xl font-semibold">Overview</h1>
            <div className="flex flex-row gap-8 justify-between mt-8">
                {/*  Balance, Income, Exenses cards */}
                <div className="bg-[var(--grey-900)] p-6 rounded-xl shadow-md w-1/3">
                    <h2 className="text-white text-lg pb-2">Current</h2>
                    <p className="text-white text-4xl font-semibold">{toCurrency(balance.current)}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md w-1/3">
                    <h2 className="text-[var(--grey-500)] text-lg pb-2">Income</h2>
                    <p className="text-black text-4xl font-semibold">{toCurrency(balance.income)}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md w-1/3">
                    <h2 className="text-[var(--grey-500)] text-lg pb-2">Expenses</h2>
                    <p className="text-black text-4xl font-semibold">{toCurrency(balance.expenses)}</p>
                </div>
            </div>
        </div>
    )
}