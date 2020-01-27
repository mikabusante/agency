import styled from 'styled-components';

const SignIn = () => (
  <Wrapper>
    <Box>
      <h4>Welcome to Agency.</h4>
      <SignInButton>
        <a href="/">Sign in with Twitter</a>
      </SignInButton>

      <SignInButton>
        <a href="/">Sign in with Instagram</a>
      </SignInButton>

      <Note>We use social login to prevent abuse.</Note>
    </Box>
  </Wrapper>
);

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
  padding: 10% 6%;
  min-height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 24px;
  }
`;

const SignInButton = styled.div`
  background-color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  height: 40px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  padding: 25px 20px;
  margin-bottom: 10px;
  cursor: pointer;

  a {
    color: ${props => props.theme.bg};
    text-decoration: none;

    :visited {
      color: ${props => props.theme.bg};
    }
  }

  :hover {
    background-color: ${props => props.theme.bg};

    > a {
      color: ${props => props.theme.fg};
    }
  }
`;

const Note = styled.p`
  font-style: italic;
`;
