import Modal from "react-modal";

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: INewTransactionModalProps) => {
  return (
    <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        <h1>Create Transaction</h1>
    </Modal>
  )
}