import React, { useContext } from 'react'
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from './styles'

export function TransactionsTable() {
    const { transactions } = useContext(TransactionsContext);

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

