import { create } from 'zustand';

export const useMoneyStore = create((set) => ({
    balance: {
        current: 0,
        income: 0,
        expenses: 0,
    },
    transactions: [],
    budgets: [],
    pots: [],
    bills: [],
    setData: (data) => set({
        balance: {
            current: data.balance.current,
            income: data.balance.income,
            expenses: data.balance.expenses,
        },
        transactions: data.transactions,
        budgets: data.budgets,
        pots: data.pots,
        bills: data.bills
    })
}));