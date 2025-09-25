import { create } from 'zustand';


/**
 * Avatar: Img Path
 * Name
 * Category
 * Date
 * Amount
 * Recurring: Bool
 * Id
 */
export const createTransactionsSlice = (set, get) => ({
    transactions: [],
    isLoading: false,
    error: null,

    fetchTransactions: async () => {
        set({ isLoading: true, error: null});
        try {
            const res = await fetch('http://localhost:5000/transactions')
            const data = await res.json();
            set({ transactions: data, isLoading: false});
        } catch(err) {
            set({error: err.message, isLoading: false})
        }
    }

})