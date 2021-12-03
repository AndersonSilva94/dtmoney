import { Container } from './styles';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, actual) => {
    if (actual.type === 'deposit') {
      acc.deposits += actual.amount;
      acc.total += actual.amount;
    } else {
      acc.withdraws += actual.amount;
      acc.total -= actual.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="saídas" />
        </header>
        <strong>
          - {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}