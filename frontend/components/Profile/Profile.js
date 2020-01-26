import React from 'react';
import styled from 'styled-components';
import LeftPane from './LeftPane';
import MiddlePane from './MiddlePane';

const Profile = () => (
  <Wrapper>
    <LeftPane></LeftPane>
    <MiddlePane />
  </Wrapper>
);

export default Profile;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.pink};
  padding: 3vh 2vw;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 2vw;
  overflow: hidden;
`;
