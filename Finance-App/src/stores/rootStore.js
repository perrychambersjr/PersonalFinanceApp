import { create } from 'zustand';
import { createPotsSlice } from '../features/pots/store/potsStore';
import { createBalanceSlice } from './balanceStore';

export const useRootStore = create((set, get) => ({
    ...createPotsSlice(set, get),
    ...createBalanceSlice(set, get),

    hydrate: (data) => {
        console.log(data)
        if (data.pots) set({ pots: data.pots })
        if (data.balance) set({ balance: data.balance})
    }
}))