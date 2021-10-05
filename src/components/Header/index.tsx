import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
  onClickNewTransaction: () => void;
}

export function Header({ onClickNewTransaction }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onClickNewTransaction}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
