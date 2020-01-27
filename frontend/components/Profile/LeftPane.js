import React from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';

const LeftPane = ({ leftPaneData }) => {
  const { name, handle, pronouns, bio, location, links } = leftPaneData;

  return (
    <Wrapper>
      <Me>
        <ProfilePicture src="/static/profile.png" alt="test profile" />
        <MeText>
          <Name>{name}</Name>
          <Handle>{handle}</Handle>
          <Pronouns>{pronouns}</Pronouns>
        </MeText>
      </Me>

      <Bio>
        <Header>BIO</Header>
        <BioText>{bio}</BioText>
      </Bio>

      <Player>
        <div className="wavy" data-text="loaderloader"></div>
      </Player>

      <div>
        <Header>LINKS</Header>
        <LinksList>
          {links.map(link => (
            <li key={uniqid()}>
              <Links href={link.target}>{link.display}</Links>
            </li>
          ))}
        </LinksList>
      </div>

      <div>
        <Header>Location</Header>
        <p>{location}</p>
      </div>

      <div>
        <Header>Friends</Header>
        <div>
          <Friend src="/static/placeholder.jpg" />
          <Friend src="/static/placeholder.jpg" />
          <Friend src="/static/placeholder.jpg" />
          <Friend src="/static/placeholder.jpg" />
        </div>
      </div>
    </Wrapper>
  );
};

export default LeftPane;

const Wrapper = styled.div`
  box-shadow: ${props => props.theme.fg} 10px 8px;
  border: 3px solid ${props => props.theme.fg};
  height: max-content;
  display: grid;
  grid-template-rows: auto auto auto auto auto;
  padding: 10% 5% 5% 10%;
  grid-gap: 3%;

  * {
    margin: 0;
  }
`;

const Me = styled.div``;

const ProfilePicture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid ${props => props.theme.fg};
  margin-left: -3%;
  margin-bottom: 10px;
`;

const MeText = styled.div`
  * {
    line-height: 80%;
  }
`;

const Name = styled.h2`
  font-size: 24px;
  margin-bottom: 0;
`;

const Handle = styled.span`
  font-family: 'Cutive Mono', monospace;
  font-size: 12px;

  :before {
    content: '@';
    margin-right: 3px;
  }
`;

const Pronouns = styled.div`
  background-color: ${props => props.theme.fg};
  color: ${props => props.theme.bg};
  text-align: center;
  width: max-content;
  padding: 3px 5px;
  border-radius: 2px;
  margin-top: 5px;
  font-size: 12px;
`;

const Header = styled.h3`
  margin: 0;
  margin-bottom: 4px;
  font-size: 14px;
  text-transform: uppercase;
`;

const Bio = styled.div`
  h3 {
    margin: 0;
    margin-bottom: 2px;
  }
`;

const BioText = styled.p`
  margin: 0;
`;

const Player = styled.div`
  background-color: ${props => props.theme.fg};
  height: 80px;
  margin-left: -12%;
  margin-right: -6%;
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;

  li {
  }
`;

const Links = styled.a`
  font-size: 18px;
  margin-bottom: 3px;
  display: block;

  :visited {
    color: ${props => props.theme.fg};
  }
`;

const Friend = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.fg};
  margin-right: 5px;
`;
