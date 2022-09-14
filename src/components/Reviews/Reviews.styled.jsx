import styled from '@emotion/styled';

const RewContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
`;

const RewList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -5px;
`;

const ListItem = styled.li`
  align-items: center;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;

  font-size: ${props => props.theme.fontSizes[2]}px;
  font-weight: ${props => props.theme.fontWeights.heading};
  color: ${props => props.theme.colors.secondary};

  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: ${props => props.theme.shadows.blue};
    color: ${props => props.theme.colors.text};
  }
`;

const RewAuthor = styled.p`
  font-size: ${props => props.theme.fontSizes[3]}px;
  line-height: 2;
`;

const RewDate = styled.p`
  color: ${props => props.theme.colors.blue};
`;

const RewInfo = styled.p`
  text-align: justify;
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export { RewContainer, RewList, ListItem, RewAuthor, RewDate, RewInfo };
