const Searchbar = ({ value, onChange }) => {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </>
  );
};

export default Searchbar;
