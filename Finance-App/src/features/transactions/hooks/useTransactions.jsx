import { useRootStore } from "../../../stores/rootStore";

export const useTransactions = () => {
    const transactions = useRootStore((s) => s.transactions)
    const isLoading = useRootStore((s) => s.isLoading)
    const error = useRootStore((s) => s.error)

    const fetchTransactions = useRootStore((s) => s.fetchTransactions);

    return {
        transactions,
        isLoading,
        error,
        fetchTransactions
    }
}