import { create } from 'zustand';

export const createPotsSlice = (set, get) => ({
  pots: [],

  addPot: async (newPot) => {
    const res = await fetch("http://localhost:5000/pots", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPot),
    });
    const data = await res.json();
    set((state) => ({ pots: [...state.pots, data] }));
  },

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
    })),

  withdrawFromPot: (id, amount) => 
    set((state) => ({
      pots: state.pots.map((p) => 
        p.id === id
        ? { ...p, total: Math.max(0, p.total - amount) }
        : p
      ),
    })),

  fetchPots: async () => {
    set({ loading: true, error: null});
    try {
      const res = await fetch('http://localhost:5000/pots');
      const data = await res.json();
      set({ pots: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
})