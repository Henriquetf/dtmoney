import Modal from 'react-modal';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './context/TransactionsContext';
import { useModal } from './hooks/useModal';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const transactionModal = useModal();

  return (
    <TransactionsProvider>
      <Header onClickNewTransaction={transactionModal.open} />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal
        isOpen={transactionModal.isModalOpen}
        onRequestClose={transactionModal.close}
      />
    </TransactionsProvider>
  );
}
