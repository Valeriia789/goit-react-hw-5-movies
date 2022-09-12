import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const MainContainer = styled.main`
  background-color: ${props => props.theme.colors.backgroundMain};
  border-radius: 2px;
`;

const LinkContainer = styled.div`
  max-width: 150px;
  /* margin-left: auto; */
  border-radius: 5px;
`;

const LinkButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: start;

  margin-top: 10px;
  padding-left: 10px;

  font-weight: ${props => props.theme.fontWeights.heading};
  font-size: ${props => props.theme.fontSizes[2]}px;

  box-shadow: ${props => props.theme.shadows.pink};
  color: ${props => props.theme.colors.text};

  &:hover {
    background-color: ${props => props.theme.colors.highlight};
    box-shadow: ${props => props.theme.shadows.blue};
    text-shadow: ${props => props.theme.shadows.text};
  }
`;

const CardContainer = styled.div`
  display: flex;
  max-width: 1024px;
  padding: 10px;
`;

const PosterContainer = styled.div`
  padding: 10px;

  img {
    border-radius: 10px;
  }
`;

const InfoContainer = styled.div`
  padding: 10px;
`;

const MovieTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes[7]}px;
  font-weight: ${props => props.theme.fontWeights.heading};

  color: ${props => props.theme.colors.text};
  text-shadow: ${props => props.theme.shadows.text};
`;

const StatTitle = styled.p`
  font-size: ${props => props.theme.fontSizes[2]}px;
  font-weight: ${props => props.theme.fontWeights.heading};
  color: ${props => props.theme.colors.primary};
`;

const StatInfo = styled.span`
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-weight: ${props => props.theme.fontWeights.body};
  color: ${props => props.theme.colors.text};
  text-shadow: ${props => props.theme.shadows.text};
`;

const MoreInfoContainer = styled.div`
  margin-top: 20px;
`;

export {
  MainContainer,
  LinkContainer,
  LinkButton,
  CardContainer,
  PosterContainer,
  InfoContainer,
  MovieTitle,
  StatTitle,
  StatInfo,
  MoreInfoContainer,
};
