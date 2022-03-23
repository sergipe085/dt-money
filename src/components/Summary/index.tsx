import React, { useContext } from 'react'
import { Container } from "./styles"
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from '../../TransactionsContext';

export function Summary() {
  const transactions = useContext(TransactionsContext);

  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Incomes"/>
        </header>
        <strong>$1000</strong>
      </div>
      <div>
        <header>
          <p>Outcomes</p>
          <img src={outcomeImg} alt="Outcomes"/>
        </header>
        <strong>$500</strong>
      </div>
      <div className="highlitBackground">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong>$500</strong>
      </div>
    </Container>
  )
}
