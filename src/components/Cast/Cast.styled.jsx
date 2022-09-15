import styled from '@emotion/styled';

const CastContainer = styled.div`
  margin-top: 20px;
`;

const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
`;

const ListItem = styled.li`
  display: flex;
  width: 420px;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadows.blue};

  font-weight: ${props => props.theme.fontWeights.heading};
  font-size: ${props => props.theme.fontSizes[4]}px;
  line-height: 2;
  color: ${props => props.theme.colors.secondary};
  text-shadow: ${props => props.theme.shadows.text};

  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: ${props => props.theme.shadows.pink};
    color: ${props => props.theme.colors.text};
  }

  img {
    margin-right: 10px;
    border-radius: 5px;
    box-shadow: ${props => props.theme.shadows.pink};
  }
`;

const ItemInfoContainer = styled.div`
  padding: 10px;
`;

const CharacterContainer = styled.div`
  color: ${props => props.theme.colors.blue};
`;

export {
  CastContainer,
  CastList,
  ListItem,
  ItemInfoContainer,
  CharacterContainer,
};
