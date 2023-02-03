import React, { useState } from 'react';

function SearchPage() {
  const [keyword, setKeyword] = useState('');

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSearchClick = () => {
    console.log(`Searching for: ${keyword}`);
  };

  return (
    <div className="App">
      <h1>Twitter Search</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter search keyword"
          value={keyword}
          onChange={handleKeywordChange}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>
    </div>
  );
}

export default SearchPage;
