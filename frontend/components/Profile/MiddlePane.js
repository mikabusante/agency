import React from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';

const MiddlePane = ({ middlePaneData }) => {
  const commissions = middlePaneData.filter(prod => prod.type === 'commission');
  const merch = middlePaneData.filter(prod => prod.type === 'merch');

  return (
    <Wrapper>
      <Box>
        <div>
          <Header>Commissions</Header>

          {commissions.splice(0, 2).map(prod => (
            <Item key={uniqid()}>
              <Thumbnail src={prod.image} alt={prod.title} />
              <div>
                <ItemTitle>
                  {prod.title} — ${prod.price}
                </ItemTitle>
                <ItemDesc>{prod.description}</ItemDesc>
              </div>

              <PurchaseButton type="submit">purchase</PurchaseButton>
            </Item>
          ))}
        </div>
        <ViewMore>View All</ViewMore>
      </Box>

      <Box>
        <Header>Merchandise</Header>
        {merch.splice(0, 2).map(prod => (
          <Item key={uniqid()}>
            <Thumbnail src={prod.image} alt={prod.title} />
            <div>
              <ItemTitle>
                {prod.title} — ${prod.price}
              </ItemTitle>
              <ItemDesc>{prod.description}</ItemDesc>
            </div>

            <PurchaseButton type="submit">purchase</PurchaseButton>
          </Item>
        ))}
        <ViewMore>View All</ViewMore>
      </Box>
    </Wrapper>
  );
};

export default MiddlePane;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: max-content max-content;
  grid-gap: 3%;

  * {
    margin: 0;
  }
`;

const Box = styled.div`
  box-shadow: ${props => props.theme.fg} 10px 8px;
  border: 3px solid ${props => props.theme.fg};
  padding: 5% 8% 2% 8%;
  max-height: max-content;
`;

const Header = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: auto 6fr 1fr;
  align-items: center;
  grid-gap: 15px;
  margin-bottom: 13px;
  justify-content: space-between;
`;

const Thumbnail = styled.img`
  width: 85px;
  height: 85px;
  object-fit: cover;
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
  background-color: ${props => props.theme.fg};
  color: ${props => props.theme.bg};
  border: 2px solid ${props => props.theme.fg};
  border-radius: 1px;
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.fg};
  }
`;

const ViewMore = styled.a`
  font-size: 18px;
  text-decoration: underline;
  cursor: pointer;
  margin: 15px 0 30px 0;
  display: inline-block;
`;
