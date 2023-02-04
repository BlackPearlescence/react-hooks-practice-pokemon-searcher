import React from "react";

function Search({onSearchChange, searchQuery}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" 
        onChange={onSearchChange} 
        value={searchQuery}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
