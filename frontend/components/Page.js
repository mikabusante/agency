import React from 'react';
import Meta from './Meta';

const Page = ({ children }) => (
  <div>
    <Meta />
    <p>This is on every page</p>
    {children}
  </div>
);

export default Page;
