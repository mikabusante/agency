import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Meta from './Meta';
import Header from './Header';
import GlobalStyle from '../utils/Global';

const theme = {
  bg: '#FCDDF1',
  fg: '#2420F6',
  black: '#22222',
};

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <GlobalStyle />
      <Meta />
      <Header />
      {children}
    </Wrapper>
  </ThemeProvider>
);

export default Page;

const Wrapper = styled.div`
  height: 97vh;
  display: grid;
  grid-template-rows: 50px 1fr;
`;
