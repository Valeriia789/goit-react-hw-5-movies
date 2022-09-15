import styled from '@emotion/styled';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 40px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 12px;
  margin: 0;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.text};
  font-size: 1rem;

  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadows.pink};
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background-color: ${props => props.theme.colors.blueOpacity};
    box-shadow: none;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background-color: ${props => props.theme.colors.primary};
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export { Nav, Button };
