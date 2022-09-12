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
  max-width: 185px;
  overflow: hidden;
  margin: 10px;
  border-radius: 10px;

  background-color: ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.shadows.blue};
`;

const MovieLink = styled(NavLink)`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  padding: 5px 15px 15px 15px;

  font-size: ${props => props.theme.fontSizes[5]}px;
  font-weight: ${props => props.theme.fontWeights.bold};

  color: ${props => props.theme.colors.background};
  text-shadow: ${props => props.theme.shadows.textSecondary};
`;

export { TrendingContainer, TrendingList, ListItem, MovieLink };
