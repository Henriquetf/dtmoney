import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;

    --red: #e52e4d;
    --green: #33cc95;

    --blue: #5429cc;
    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb2;

    --background: #f0f2f5;
    --shape: #ffffff;

    --input-background: #e7e9ee;
    --input-border: #d7d7d7;
    --input-placeholder: #969cb3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialised;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    border: 0;

    transition: filter 0.15s ease-in-out, background 0.15s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);

    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }
  .react-modal-close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 1.5rem;
    border: 0;
    background:  transparent;
  }
`;
