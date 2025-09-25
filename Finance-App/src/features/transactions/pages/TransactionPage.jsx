import React, { useEffect, useMemo, useState } from 'react';
import TransactionsHeader from '../components/Layout/TransactionsHeader';
import TransactionsTable from '../components/Layout/TransactionsTable';
import { useTransactions } from '../hooks/useTransactions';
/**
 * Fetching, Filters, and rendering layout
 * @returns 
 */
const TransactionPage = () => { 
  const { transactions, isLoading, error, fetchTransactions } = useTransactions();
  const[searchTerm, setSearchTerm] = useState("");
  const[sortDir, setSortDir] = useState("Latest");
  const[categoryFilter, setCategoryFilter] = useState("All Transactions");

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    })
  }

  const filteredTransactions = useMemo(() => {
    let results = transactions;

    if (categoryFilter && categoryFilter !== "All Transactions") {
      const lowerCat = categoryFilter.trim().toLowerCase();
      results = results.filter(
        (tx) => tx.category?.toLowerCase() === lowerCat
      );
    }

    if (searchTerm) {
      const lowerTerm = searchTerm.trim().toLowerCase();
      results = results.filter(
        (tx) =>
          tx.name.toLowerCase().includes(lowerTerm) ||
          formatDate(tx.date)?.toLowerCase().includes(lowerTerm)
      );
    }

    return results;
  }, [transactions, searchTerm, categoryFilter]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="bg-[var(--beige-100)] h-full p-8">
      <TransactionsHeader /> 
      <TransactionsTable 
        transactions={filteredTransactions} 
        onSearchChange={setSearchTerm} 
        formatDate={formatDate} 
        sortDir={sortDir}
        setSortDir={setSortDir} 
        setCategoryFilter={setCategoryFilter} 
        categoryFilter={categoryFilter}
      />
    </div>
  )
}

export default TransactionPage