import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Meta from './Meta';
import GlobalStyle from '../utils/Global';

const theme = {
  pink: '#FCDDF1',
  blue: '#2420F6',
};

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      <Meta />
      {children}
    </div>
  </ThemeProvider>
);

export default Page;
