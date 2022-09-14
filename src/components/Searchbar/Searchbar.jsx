import { Input, SearchContainer, Label } from './Searchbar.styled';

const Searchbar = ({ value, onChange }) => {
  return (
    <SearchContainer>
      <Label>
        <img src="https://img.icons8.com/nolan/32/search-more.png" alt="" />
        <Input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
        />
      </Label>
    </SearchContainer>
  );
};

export default Searchbar;
