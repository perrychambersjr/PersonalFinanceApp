import { create } from 'zustand';
import { createPotsSlice } from '../features/pots/store/potsStore';
import { createBalanceSlice } from './balanceStore';

export const useRootStore = create((set, get) => ({
    ...createPotsSlice(set, get),
    ...createBalanceSlice(set, get),

    hydrate: (data) => {
        if (data.pots) {
            const potsWithIds = data.pots.map((pot, i) => ({
                ...pot,
                id: crypto.randomUUID()
            }));
            set({ pots: potsWithIds });
        }
        if (data.balance) set({ balance: data.balance})
    }
}))