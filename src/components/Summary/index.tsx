import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { moneyFormatter } from '../../util/formatter';

import { Container } from './styles';

export function Summary() {
  const { summary } = useTransactions();

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{moneyFormatter.format(summary.income)}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>{moneyFormatter.format(-summary.outcome)}</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{moneyFormatter.format(summary.total)}</strong>
      </div>
    </Container>
  );
}
