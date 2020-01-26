import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    color: ${props => props.theme.blue};
    font-family: 'Karla', sans-serif;

  }
`;

export default GlobalStyle;
