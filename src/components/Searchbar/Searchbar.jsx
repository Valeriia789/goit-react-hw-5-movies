const Searchbar = ({ onChange }) => {
  return (
    <>
      <input
        name="searchQuery"
        onChange={e => onChange(e.target.value)}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </>
  );
};

export default Searchbar;
