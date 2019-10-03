import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="search Robots"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
