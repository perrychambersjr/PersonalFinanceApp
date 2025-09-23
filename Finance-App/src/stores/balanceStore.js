export const createBalanceSlice = (set, get) => ({
  balance: {
    current: 0,
    income: 0,
    expenses: 0,
  },

  setBalance: (balanceObj) => set({ balance: balanceObj }),

  clearBalance: () =>
    set({
      balance: {
        current: 0,
        income: 0,
        expenses: 0,
      },
    }),
})