import { useRootStore } from "../../../stores/rootStore";

export const useBudgets = () => {
    const budgets = useRootStore((s) => s.budgets)
    const isLoading = useRootStore((s) => s.isLoading)
    const error = useRootStore((s) => s.error)

    const totalSpent = budgets.reduce((total, budget) => total + budget.spent, 0);
    const totalLimit = budgets.reduce((total, budget) => total + budget.maximum, 0);

    const fetchBudgets = useRootStore((s) => s.fetchBudgets);

    return {
        budgets,
        isLoading,
        error,
        totalSpent,
        totalLimit,
        fetchBudgets
    }
}