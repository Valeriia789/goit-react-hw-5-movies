import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

const MainContainer = styled.main`
  background-color: ${props => props.theme.colors.backgroundMain};
  border-radius: 2px;
`;

const BackContainer = styled.div`
  max-width: 150px;
  /* margin-left: auto; */
  margin-top: 10px;
border-radius: 5px;
  background-color: ${props => props.theme.colors.gray};
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: ${props => props.theme.fontWeights.heading};
  font-size: ${props => props.theme.fontSizes[2]}px;

  color: ${props => props.theme.colors.text};

  &:hover {
    box-shadow: ${props => props.theme.shadows.box};
  }
`;

const CardContainer = styled.div``;

export { MainContainer, BackContainer, StyledLink, CardContainer };
