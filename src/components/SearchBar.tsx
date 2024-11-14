import  { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

//   const handleSearchInput = (event) => {
//     setSearchTerm(event.target.value);
//   };

  const handleSearch = () => {
    // Perform search functionality here
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for recipes..."
        value={searchTerm}
        // onChange={handleSearchInput}
      />
      <button className="search-button" onClick={handleSearch}>
        <i className="search-icon"></i>
      </button>
    </div>
  );
};

export default SearchBar;