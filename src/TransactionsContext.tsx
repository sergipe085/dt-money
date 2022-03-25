import { createContext, ReactNode, useEffect, useState } from "react"; 
import { api } from "./services/api";

export interface ITransaction {
    id: number;
    title: string;
    value: number,
    category: string;
    type: string;
    createdAt: Date;
}

type TransactionInput = Omit<ITransaction, "id" | "createdAt">;

interface ITransactionsProviderProps {
    children: ReactNode;
}

interface ITransactionsContextData {
    transactions: ITransaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<ITransactionsContextData>({} as ITransactionsContextData);

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);
    
    useEffect(() => {
        api.get("/api/transactions").then(response => setTransactions(response.data.transactions));
    }, []);
 
    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post("/api/transactions", {
            ...transactionInput,
            createdAt: new Date()
        });  
        const { transaction } = response.data;

        setTransactions([...transactions, transaction]);
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            { children }
        </TransactionsContext.Provider>
    )
}