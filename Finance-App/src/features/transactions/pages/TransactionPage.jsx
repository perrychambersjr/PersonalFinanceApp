import React, { useEffect } from 'react';
import TransactionsHeader from '../components/Layout/TransactionsHeader';
import TransactionsTable from '../components/Layout/TransactionsTable';
import { useTransactions } from '../hooks/useTransactions';
/**
 * Fetching, Filters, and rendering layout
 * @returns 
 */
const TransactionPage = () => { 
  const { transactions, isLoading, error, fetchTransactions } = useTransactions();

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="bg-[var(--beige-100)] h-full p-8">
      <TransactionsHeader /> 
      <TransactionsTable transactions={transactions}/>
    </div>
  )
}

export default TransactionPage