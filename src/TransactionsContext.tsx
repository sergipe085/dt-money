import { createContext, ReactChild, ReactNode, useEffect, useState } from "react"; 
import { api } from "./services/api";

export interface ITransaction {
    id: number;
    title: string;
    value: number,
    category: string;
    type: string;
    createdAt: Date;
}

interface ITransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext<ITransaction[]>([]);

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);
    
    useEffect(() => {
        api.get("/api/transactions").then(response => setTransactions(response.data.transactions));
    }, []);

    return (
        <TransactionsContext.Provider value={transactions}>
            { children }
        </TransactionsContext.Provider>
    )
}