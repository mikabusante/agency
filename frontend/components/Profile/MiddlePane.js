import React from 'react';
import styled from 'styled-components';

const MiddlePane = () => (
  <Wrapper>
    <Box>
      <Header>Commissions</Header>
      <Item>
        <Thumbnail src="/static/comm_1.png" alt="placeholder" />
        <div>
          <ItemTitle>Portrait Icon — $40</ItemTitle>
          <ItemDesc>Lorem ipsum</ItemDesc>
        </div>

        <PurchaseButton type="submit">purchase</PurchaseButton>
      </Item>

      <Item>
        <Thumbnail src="/static/comm_1.png" alt="placeholder" />
        <div>
          <ItemTitle>Portrait Icon — $40</ItemTitle>
          <ItemDesc>Lorem ipsum</ItemDesc>
        </div>

        <PurchaseButton type="submit">purchase</PurchaseButton>
      </Item>
    </Box>
    <Box>
      <Header>Merchandise</Header>
    </Box>
  </Wrapper>
);

export default MiddlePane;

const Wrapper = styled.div`
  max-height: 95%;
  display: grid;
  grid-template-rows: 1fr 1fr;

  grid-gap: 3%;

  * {
    margin: 0;
  }
`;

const Box = styled.div`
  box-shadow: ${props => props.theme.blue} 10px 8px;
  border: 3px solid ${props => props.theme.blue};
  padding: 8%;
`;

const Header = styled.h3`
  font-size: 24px;
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  grid-gap: 5px;
  margin-bottom: 13px;
  justify-content: space-between;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
`;

const ItemTitle = styled.h4`
  font-size: 22px;
  font-weight: bold;
`;

const ItemDesc = styled.p`
  font-family: 'Cutive Mono';
`;

const PurchaseButton = styled.button`
  width: max-content;
  padding: 3px 8px 5px 8px;
  background-color: ${props => props.theme.blue};
  color: ${props => props.theme.pink};
  border: 0;
  border-radius: 1px;
`;
