import React from 'react';

const SearchBar = ({onSearch}) => (
    <div>
      <input
        placeholder="Search for users"
        autoFocus={true}
        onChange={ ({ target: t }) => onSearch(t.value) }/>
    </div>
);

export default SearchBar;