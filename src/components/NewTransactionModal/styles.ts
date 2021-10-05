import { transparentize } from 'polished';
import styled, { css } from 'styled-components/macro';

export const Form = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border: 1px solid var(--input-border);
    border-radius: 0.25rem;
    background: var(--input-background);

    font-size: 1rem;

    &::placeholder {
      color: var(--input-placeholder);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  > button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;

    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;

    margin-top: 1.5rem;
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

type TransactionColors = 'red' | 'green';

const colors: Record<TransactionColors, string> = {
  green: '#12A454',
  red: '#E62E4D',
};

interface TransactionTypeButtonProps {
  isActive: boolean;
  activeColor: TransactionColors;
}

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  height: 4rem;
  border: 1px solid var(--input-border);
  border-radius: 0.25rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 20px;
    width: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }

  ${(props) =>
    props.isActive &&
    css`
      background: ${transparentize(0.9, colors[props.activeColor])};
      color: white;
    `}
`;
