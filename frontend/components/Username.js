import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Link from 'next/link';
import { NavLink } from './Header';

const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    me {
      id
      email
      name
      permissions
    }
  }
`;
const Username = props => {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY);

  if (loading) {
    return null;
  }

  if (!data) {
    return (
      <Link href="/signin">
        <NavLink>Sign in</NavLink>
      </Link>
    );
  }

  if (error) return <p>Error...</p>;

  return (
    <Link href="/">
      <NavLink>{data.me.name}</NavLink>
    </Link>
  );
};

export default Username;
