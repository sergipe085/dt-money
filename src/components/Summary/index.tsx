import React, { useContext } from 'react'
import { Container } from "./styles"
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from '../../TransactionsContext';

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === "deposit") {
      acc.deposits += transaction.value;
      acc.total += transaction.value;
    }
    else if (transaction.type === "withdraw") {
      acc.withdraws += transaction.value;
      acc.total -= transaction.value;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Incomes"/>
        </header>
        <strong>{Intl.NumberFormat("us", {style: "currency",currency: "USD",}).format(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Outcomes</p>
          <img src={outcomeImg} alt="Outcomes"/>
        </header>
        <strong>{Intl.NumberFormat("us", {style: "currency",currency: "USD",}).format(summary.withdraws)}</strong>
      </div>
      <div className={summary.total > 0 ? "positiveTotal" : "negativeTotal"}>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong>{Intl.NumberFormat("us", {style: "currency",currency: "USD",}).format(summary.total)}</strong>
      </div>
    </Container>
  )
}
