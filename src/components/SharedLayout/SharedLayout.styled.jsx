import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Header = styled.header`
  background-color: ${props => props.theme.colors.primary};
  border-radius: 2px;
`;

const HeaderList = styled.ul`
  display: flex;
  padding: 5px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding: 5px;

  font-weight: ${props => props.theme.fontWeights.heading};
  font-size: ${props => props.theme.fontSizes[3]}px;
`;

const StyledNavLink = styled(NavLink)`
  color: ${props => props.theme.colors.text};

  &:hover {
    text-shadow: ${props => props.theme.shadows.text};
  }
`;

export { Header, HeaderList, ListItem, StyledNavLink };
