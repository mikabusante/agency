import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';

import LeftPane from './LeftPane';
import MiddlePane from './MiddlePane';
import RightPane from './RightPane';

const PROFILE_QUERY = gql`
  query PROFILE_QUERY($handle: String!) {
    users(where: { handle: $handle }) {
      name
      handle
      pronouns
      bio
      links {
        display
        target
      }
      location
      products {
        title
        image
        price
        type
        description
      }
      work {
        image
      }
      guidelines {
        text
      }
    }
  }
`;

const Profile = () => {
  const router = useRouter();
  const { profile } = router.query;

  const { loading, error, data } = useQuery(PROFILE_QUERY, { variables: { handle: profile } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { name, handle, pronouns, bio, location, links, products, work, guidelines } = data.users[0];
  const leftPaneData = { name, handle, pronouns, bio, location, links };
  const middlePaneData = products;
  const rightPaneData = { work, guidelines };

  return (
    <Wrapper>
      <LeftPane leftPaneData={leftPaneData} />
      <MiddlePane middlePaneData={middlePaneData} />
      <RightPane rightPaneData={rightPaneData} />
    </Wrapper>
  );
};
export default Profile;

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${props => props.theme.bg};
  padding: 3vh 2vw;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 2vw;
  overflow: hidden;
`;
