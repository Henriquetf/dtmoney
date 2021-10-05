import styled from 'styled-components/macro';

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;

    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      text-align: left;
      font-weight: 400;
      line-height: 1.5rem;

      padding: 1rem 2rem;
    }

    td {
      border: 0;
      padding: 1rem 2rem;
      background: var(--shape);

      font-weight: 400;
      color: var(--text-body);

      &:first-child {
        color: var(--text-title);

        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
      }

      &:last-child {
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
