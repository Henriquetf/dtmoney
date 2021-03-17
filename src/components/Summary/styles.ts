import styled from 'styled-components/macro';

export const Container = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -6.75rem;

  > div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 5px;

    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;

      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--green);
      color: white;
    }
  }
`;