import { createGlobalStyle, css } from "styled-components";

const GlobalCss = createGlobalStyle`
  html {
    ${({ theme }) => css`
      font-size: 62.5%;
      line-height: 1.5;
      color: ${theme.color.white};
      font-family: "Pretendard", "-apple-system", "BlinkMacSystemFont",
        "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
        "Droid Sans", "Helvetica Neue", sans-serif;
    `}
  }

  body * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-text-fill-color: inherit;
    color: inherit;
  }

  a {
      text-decoration: none;
      color: inherit;
  }

  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }

  input:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
`;

export default GlobalCss;
