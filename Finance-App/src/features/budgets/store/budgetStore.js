/**
 * Budgets: [
 *  "category": "Entertainment",
 *  "maximum": 50,
 *  "theme": "#277C78",
 *  "id": "c7be"
 * ]
 */

export const createBudgetsSlice = (set, get) => ({
    budgets: [],
    isLoading: false,
    error: null,

    fetchBudgets: async () => {
        set({ isLoading: true, error: null});
        try {
            const res = await fetch('http://localhost:5000/budgets')
            const data = await res.json();
            set({ budgets: data, isLoading: false});
        } catch(err) {
            set({error: err.message, isLoading: false})
        }
    }
})