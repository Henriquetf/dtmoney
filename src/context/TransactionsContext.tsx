import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';

import { api } from '../services/api';

export enum TransactionType {
  deposit = 'deposit',
  withdraw = 'withdraw',
}

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  value: number;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: React.ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  summary: {
    income: number;
    outcome: number;
    total: number;
  };
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData,
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const createTransaction = useCallback(async (newTransaction: TransactionInput) => {
    const response = await api.post<{ transaction: Transaction }>('transactions', newTransaction);

    const { transaction } = response.data;

    setTransactions((prevState) => [...prevState, transaction]);
  }, []);

  const summary = useMemo(() => {
    const income = transactions
      .filter((t) => t.type === TransactionType.deposit)
      .reduce((acc, t) => acc + t.value, 0);

    const outcome = transactions
      .filter((t) => t.type === TransactionType.withdraw)
      .reduce((acc, t) => acc + t.value, 0);

    const total = income - outcome;

    return {
      income,
      outcome,
      total,
    };
  }, [transactions]);

  useEffect(() => {
    api
      .get<{ transactions: Transaction[] }>('transactions')
      .then((response) => setTransactions(response.data.transactions))
      .catch(console.log);
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction, summary }}>
      {children}
    </TransactionsContext.Provider>
  );
}
