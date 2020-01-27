/* eslint-disable react-hooks/rules-of-hooks */

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Profile from '../components/Profile/Profile';

const profile = () => (
  <div>
    <Profile />
  </div>
);

export default profile;
