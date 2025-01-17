import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

const Items = () => (
  <Center>
    <p>Items</p>
    <Query query={ALL_ITEMS_QUERY}>
      {({ data, loading, error }) => {
        if (loading) {
          return <p>Loading...</p>;
        }

        if (error) {
          return <p>Error: {error.message}</p>;
        }
        return (
          <ItemsList>
            {data.items.map(item => (
              <div>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            ))}
          </ItemsList>
        );
      }}
    </Query>
  </Center>
);

export default Items;

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: 1000px;
`;
