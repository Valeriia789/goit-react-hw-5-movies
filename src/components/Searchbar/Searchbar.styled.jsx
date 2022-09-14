import styled from '@emotion/styled';

const SearchContainer = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  max-width: 340px;
  padding: 10px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.primary};
`;

const Input = styled.input`
  margin-left: 10px;
  border: none;
  border-bottom: 1px solid;
  outline: none;

  font-size: ${props => props.theme.fontSizes[3]}px;

  background-color: ${props => props.theme.colors.primary};
  border-color: ${props => props.theme.colors.blue};
`;

export { Input, SearchContainer, Label };
