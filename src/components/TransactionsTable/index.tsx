import React, { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

interface ITransaction {
    id: number;
    title: string;
    value: number,
    category: string;
    type: string;
    createdAt: Date;
}

export function TransactionsTable() {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);
    
    useEffect(() => {
        api.get("/api/transactions").then(response => setTransactions(response.data.transactions));
    }, [])

    return (
    <Container>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Value</th>
                    <th>Categorya</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                { transactions.map((transaction) => (
                    <tr key={transaction.id}>
                        <td>{transaction.title}</td>
                        <td className={transaction.type}>{Intl.NumberFormat("us", {
                            style: "currency",
                            currency: "USD",
                        }).format(transaction.value)}</td>
                        <td>{transaction.category}</td>
                        <td>{Intl.DateTimeFormat("en-US").format(new Date(transaction.createdAt))}</td>
                    </tr>
                )) }
            </tbody>
        </table>
    </Container>
  )
}

