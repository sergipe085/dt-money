import closeImg from "../../assets/close.svg";
import Modal from "react-modal";
import { Container } from "./styles";

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: INewTransactionModalProps) => {
  return (
    <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button type="button" onClick={onRequestClose}>
          <img src={closeImg} alt="close modal"/>
        </button>

        <Container>
          <h2>Create Transaction</h2> 

          <input placeholder="Title"/>

          <input placeholder="Value" type="number"/>

          <input placeholder="Category"/>

          <button type="submit">Submit</button>
        </Container>
    </Modal>
  )
}