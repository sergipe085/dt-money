import closeImg from "../../assets/close.svg";
import outcomeImg from "../../assets/outcome.svg";
import incomeImg from "../../assets/income.svg";
import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import { useState } from "react";

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: INewTransactionModalProps) => {
  const [transactionType, setTransactionType] = useState("deposit");

  return (
    <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button 
          type="button" 
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="close modal"/>
        </button>

        <Container>
          <h2>Create Transaction</h2> 

          <input placeholder="Title"/>

          <input placeholder="Value" type="number"/>

          <TransactionTypeContainer>
            <RadioBox 
              type="button" 
              onClick={() => setTransactionType("deposit")} 
              isActive={transactionType === "deposit"}
            >
              <img src={incomeImg} alt="Income"/>
              <span>Income</span>
            </RadioBox>

            <RadioBox 
              type="button" 
              onClick={() => setTransactionType("withdraw")}
              isActive={transactionType === "withdraw"}
            >
              <img src={outcomeImg} alt="Outcome"/>
              <span>Outcome</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input placeholder="Category"/>

          <button type="submit">Submit</button>
        </Container>
    </Modal>
  )
}