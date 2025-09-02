import { create } from 'zustand';

const useTransactionStore = create((set) => ({
    transactions: [],
    
    actions: {
        removeTransactions: () => set({ transactions: [] }),
    },
}));

export const useTransactionStoreActions = () => useTransactionStore((state) => state.actions);