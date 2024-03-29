import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="Search Robots"
        className="pa3 ba b--green bg-lightest-blue f3"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
