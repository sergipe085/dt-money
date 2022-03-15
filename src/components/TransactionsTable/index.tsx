import React, { useEffect } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

export function TransactionsTable() {
    useEffect(() => {
        api.get("/api/transactions").then(response => console.log(response.data));
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
                <tr>
                    <td>Website development</td>
                    <td className='deposit'>$400</td>
                    <td>20/01/1990</td>
                    <td>Desenvolvimento</td>
                </tr>
                <tr>
                    <td>Website development</td>
                    <td className='withdraw'>- $400</td>
                    <td>20/01/1990</td>
                    <td>Desenvolvimento</td>
                </tr>
            </tbody>
        </table>
    </Container>
  )
}

