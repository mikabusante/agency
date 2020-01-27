// NOTE: not quite sure how to structure, MUST revisit
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Input } from './OnboardStyles';
import DisplayError from './DisplayError';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($name: String!, $email: String!, $password: String!) {
    signup(email: $email, password: $password, name: $name) {
      email
      name
      password
      permissions
    }
  }
`;

const SignIn = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [signUpUser, { loading: mutationLoading, error: mutationError }] = useMutation(SIGNUP_MUTATION);

  async function handleSubmit(e) {
    e.preventDefault();
    await signUpUser({ variables: { name, email, password } });

    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <Wrapper>
      <Box>
        <form onSubmit={e => handleSubmit(e)} method="post">
          <Fieldset disabled={mutationLoading} aria-busy={mutationLoading}>
            <h4>Welcome to Agency.</h4>
            <h3>{isLoggingIn ? 'Log In' : 'Sign up'}</h3>
            <label htmlFor="name" id="name">
              Name
              <Input name="name" type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>

            <label htmlFor="email" id="email">
              Email
              <Input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>

            <label htmlFor="password" id="password">
              Password
              <Input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>

            <button type="submit">Sign up</button>

            <p>
              Or
              <button type="button" onClick={() => setIsLoggingIn(!isLoggingIn)}>
                {isLoggingIn ? 'sign up' : 'log in'}
              </button>
              {isLoggingIn ? 'to create a new account' : 'if you already have an account'}
            </p>
            <DisplayError error={mutationError} />
          </Fieldset>
        </form>
      </Box>
    </Wrapper>
  );
};

export default SignIn;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Box = styled.div`
  box-shadow: ${props => props.theme.fg} 10px 8px;
  border: 3px solid ${props => props.theme.fg};
  min-height: max-content;
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 1%;

  h4 {
    font-size: 24px;
  }
`;

const Fieldset = styled.fieldset`
  border: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
// const SignInButton = styled.div`
//   background-color: ${props => props.theme.fg};
//   border: 2px solid ${props => props.theme.fg};
//   height: 40px;
//   width: 100%;
//   color: white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 3px;
//   padding: 25px 20px;
//   margin-bottom: 10px;
//   cursor: pointer;

//   a {
//     color: ${props => props.theme.bg};
//     text-decoration: none;

//     :visited {
//       color: ${props => props.theme.bg};
//     }
//   }

//   :hover {
//     background-color: ${props => props.theme.bg};

//     > a {
//       color: ${props => props.theme.fg};
//     }
//   }
// `;

// const Note = styled.p`
//   font-style: italic;
// `;
