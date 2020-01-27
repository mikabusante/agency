import React from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';

const RightPane = ({ rightPaneData }) => (
  <Wrapper>
    <Work>
      <Header>Featured Work</Header>
      {rightPaneData.work.map(img => (
        <Thumbnail src={img.image} alt="work" key={uniqid()} />
      ))}

      <ViewMore>View More</ViewMore>
    </Work>

    <GuidelinesBox>
      <SmallHeader>Commission Guidelines</SmallHeader>
      <List>
        {rightPaneData.guidelines.map(item => (
          <li key={uniqid()}>{item.text}</li>
        ))}
      </List>
    </GuidelinesBox>
  </Wrapper>
);

export default RightPane;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;

  grid-gap: 3%;

  * {
    margin: 0;
  }
`;

const Box = styled.div`
  box-shadow: ${props => props.theme.fg} 10px 8px;
  border: 3px solid ${props => props.theme.fg};
  padding: 8%;
  display: grid;
  justify-content: space-between;
`;

const GuidelinesBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Work = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
`;

const ViewMore = styled.a`
  font-size: 18px;
  text-decoration: underline;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 90%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
  margin-bottom: 5%;
  border: 2px solid ${props => props.theme.fg};
`;

const SmallHeader = styled.h3`
  margin: 0;
  margin-bottom: 4px;
  font-size: 14px;
  text-transform: uppercase;
  height: max-content;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  li {
    span {
      font-weight: bold;
    }
  }
`;
