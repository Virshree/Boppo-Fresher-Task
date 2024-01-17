import React, { useEffect, useState } from "react";
import'./index.css';
import Jobpage from "../Jobpage/Jobpage";

function Search() {
  const [titlevalue, setTitleValue] = useState('');

  function handleSearch(e) {
    setTitleValue(e.target.value);
  }
  function handleClear(){
    setTitleValue('');
  }

  // useEffect(()=>{
  //   //filtered skills based on title value

  //   const filteredSkills=skill.filter((s)=>s.toLowerCase().includes(titlevalue).toLowerCase())
  //   setSearchResult(filteredSkills);
  // },[skill,titlevalue]);
  return (
    <div className="search-parent">
      <div className="search-container">
   
        <input
          type="text"
          value={titlevalue}
          onChange={handleSearch}
      
          className="input-container"
        />
           {/* <a href="#" className="reset-container">Clear</a> */}
           <span className="reset-container" onClick={()=>handleClear()}>Clear</span>
      </div>
      <Jobpage />
    </div>
    
  );
}

export default Search;
