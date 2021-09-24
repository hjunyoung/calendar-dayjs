import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    width: 100vw;
    min-height: 100vh;
    background-color: rgba(250, 250, 250, 1)
  }

  a {
    text-decoration: none;
    color: inherit
  }
`;

export default GlobalStyles;
