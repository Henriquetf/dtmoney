import { FormEventHandler, useCallback, useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { TransactionType } from '../../context/TransactionsContext';
import { useTransactions } from '../../hooks/useTransactions';

import { Form, TransactionTypeButton, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [type, setType] = useState<TransactionType>(TransactionType.deposit);

  const [title, setTitle] = useState('');
  const [value, setValue] = useState<number>(0);
  const [category, setCategory] = useState('');

  const handleCreateNewTransaction = useCallback<FormEventHandler<HTMLFormElement>>(
    async (event) => {
      event.preventDefault();

      await createTransaction({
        title,
        category,
        type,
        value,
      });

      setType(TransactionType.deposit);
      setTitle('');
      setValue(0);
      setCategory('');

      onRequestClose();
    },
    [type, title, value, category, createTransaction, onRequestClose],
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Form onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <TransactionTypeButton
            type="button"
            onClick={() => setType(TransactionType.deposit)}
            isActive={type === TransactionType.deposit}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </TransactionTypeButton>

          <TransactionTypeButton
            type="button"
            onClick={() => setType(TransactionType.withdraw)}
            isActive={type === TransactionType.withdraw}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </TransactionTypeButton>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Form>
    </Modal>
  );
}
