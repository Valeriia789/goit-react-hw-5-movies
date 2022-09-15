import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const ListContainer = styled.div`
  padding: 20px;
`;

const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
`;

const ListItem = styled.li`
  margin: 10px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadows.blue};

  transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${props => props.theme.colors.blueOpacity};
    box-shadow: ${props => props.theme.shadows.pink};
  }
`;

const MovieLink = styled(NavLink)`
  display: block;
  max-width: 190px;

  text-align: center;
  overflow: hidden;
  color: ${props => props.theme.colors.blue};

  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props => props.theme.colors.text};
  }
`;

const NoImageAvlb = styled.img`
  width: 185px;
`;

const MovTitle = styled.h2`
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-weight: ${props => props.theme.fontWeights.heading};
`;

export {
  ListContainer,
  MoviesList,
  ListItem,
  MovieLink,
  NoImageAvlb,
  MovTitle,
};
