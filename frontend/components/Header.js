import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Username from './Username';

const Header = () => (
  <Wrapper>
    <Logo>Agency</Logo>

    <nav>
      <Username />
      <Link href="/">
        <NavLink>Dashboard</NavLink>
      </Link>
      <Link href="/">
        <NavLink>Settings</NavLink>
      </Link>
      <Link href="/">
        <NavLink>Logout</NavLink>
      </Link>
    </nav>
  </Wrapper>
);

export default Header;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 3vw;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
  border-bottom: 2px solid ${props => props.theme.fg};
`;

const Logo = styled.h1`
  font-size: 18px;
`;

export const NavLink = styled.a`
  color: ${props => props.theme.black};
  cursor: pointer;
  margin-right: 20px;
  :visited {
    color: ${props => props.theme.black};
  }

  :hover {
    text-decoration: underline;
  }
`;
