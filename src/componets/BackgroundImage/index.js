import React, { useEffect, useState } from "react";
import "./index.css";
// import Search from "../Search";
import Jobpage from "../Jobpage/Jobpage";
import { fetchDetails } from "../../fetch-data";

function BackgroundImage() {
  const [titleValue, setTitleValue] = useState("");
  const [joblist, setJoblist] = useState([]);

  function searchTrigger(e) {
    if (e.keyCode === 13) {
      fetchDetails().then((data) => {
        //filter logic
        // console.log(data?.data)

        const filteredArray = [];
        data?.data.filter((item) => {
          if (item.skills.includes(titleValue.toUpperCase())) {
            // setJoblist(item);
            filteredArray.push(item);
          }
        });
        console.log(filteredArray, "filteredArray");
        setJoblist(filteredArray);
      });
    }
  }

  function handleSearch(e) {
    setTitleValue(e.target.value);
  }
  function handleClear() {
    setTitleValue("");
  }

  useEffect(() => {
    fetchDetails().then((data) => {
      setJoblist(data.data);
    });
  }, [titleValue]);
  return (
    <div className="backg-conatiner">
      <div className="search-text">
        <input
          type="text"
          value={titleValue}
          onChange={handleSearch}
          onKeyDown={searchTrigger}
          className="input-text"
        />
        <span className="reset-container" onClick={() => handleClear()}>
          Clear
        </span>
      </div>

      <Jobpage joblist={joblist} />
    </div>
  );
}

export default BackgroundImage;
