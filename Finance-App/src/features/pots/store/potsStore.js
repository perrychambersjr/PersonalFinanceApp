import { create } from 'zustand';

export const createPotsSlice = (set, get) => ({
  pots: [],

  addPot: (pot) => set((state) => ({ pots: [...state.pots, pot] })),

  removePot: (id) =>
    set((state) => ({ pots: state.pots.filter((p) => p.id !== id) })),

  clearPots: () => set({ pots: [] }),

  depositToPot: (id, amount) =>
    set((state) => ({
      pots: state.pots.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            total: (p.total || 0) + amount,
          };
        }
        return p;
      }),
    })),

  updatePot: (updatedPot) => 
    set((state) => ({
      pots: state.pots.map((p) => p.id === updatedPot.id ? { ...create, ...updatedPot } : p)
    }))
})