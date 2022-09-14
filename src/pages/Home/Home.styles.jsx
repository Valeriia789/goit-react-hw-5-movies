import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const TrendingContainer = styled.div`
  padding: 20px;
`;

const TrendingList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
`;

const ListItem = styled.li`
  display: flexbox;
  margin: 10px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadows.blue};

  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;

const MovieLink = styled(NavLink)`
  display: block;
  max-width: 190px;

  text-align: center;
  overflow: hidden;
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-weight: ${props => props.theme.fontWeights.heading};
  color: ${props => props.theme.colors.blue};

  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props => props.theme.colors.text};
  }
`;

export { TrendingContainer, TrendingList, ListItem, MovieLink };
