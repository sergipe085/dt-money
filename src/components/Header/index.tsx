import logoImg from "../../assets/logo.svg"
import { Container, Content } from './styles'

interface IHeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header = (props: IHeaderProps) => {
  return (
    <Container>
        <Content>
            <img src={logoImg} alt='dt money'></img>
            <button type='button' onClick={props.onOpenNewTransactionModal}>
                New transaction
            </button>
        </Content>
    </Container>
  )
}