import React, { useState } from "react";

function Search() {
  const [titlevalue, setTitleValue] = useState();
  function handleSearch(e) {
    setTitleValue(e.target.value);
  }
  return (
    <div>
      <div style={{ display: "block" }}>
        <input
          type="text"
          value={titlevalue}
          onChange={handleSearch}
          placeholder="Enter title"
          style={{ margin: "auto", marginTop: "20px" }}
        />
        <button style={{ backgroundColor: "greenyellow", color: "black" }}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
