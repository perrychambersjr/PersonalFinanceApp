import { create } from 'zustand'

export const createPotsSlice = (set, get) => ({
  pots: [],
  addPot: (pot) => set((state) => ({ pots: [...state.pots, pot] })),
  removePot: (id) =>
    set((state) => ({ pots: state.pots.filter((p) => p.id !== id) })),
  clearPots: () => set({ pots: [] }),
})