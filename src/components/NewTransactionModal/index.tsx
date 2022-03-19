import closeImg from "../../assets/close.svg";
import outcomeImg from "../../assets/outcome.svg";
import incomeImg from "../../assets/income.svg";
import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: INewTransactionModalProps) => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  const [transactionType, setTransactionType] = useState("deposit");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title, 
      value,
      category,
      transactionType
    }

    api.post("/api/transactions", data);
  }

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

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Create Transaction</h2> 

          <input 
            value={title} 
            onChange={(event) => setTitle(event.target.value)} 
            placeholder="Title"
          />

          <input 
            value={value} 
            onChange={(event) => setValue(Number(event.target.value))} 
            placeholder="Value" 
            type="number"
          />

          <TransactionTypeContainer>
            <RadioBox 
              type="button" 
              onClick={() => setTransactionType("deposit")} 
              isActive={transactionType === "deposit"}
              activeColor={"green"}
            >
              <img src={incomeImg} alt="Income"/>
              <span>Income</span>
            </RadioBox>

            <RadioBox 
              type="button" 
              onClick={() => setTransactionType("withdraw")}
              isActive={transactionType === "withdraw"}
              activeColor={"red"}
            >
              <img src={outcomeImg} alt="Outcome"/>
              <span>Outcome</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input 
            value={category} 
            onChange={(event) => setCategory(event.target.value)} 
            placeholder="Category"
          />

          <button type="submit">Submit</button>
        </Container>
    </Modal>
  )
}