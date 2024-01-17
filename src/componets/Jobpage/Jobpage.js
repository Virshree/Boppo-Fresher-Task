import axios from "axios";
import React, { useEffect, useState } from "react";
import { JobApi } from "../../api/Api";
import "./Jobpage.css";

function Jobpage({ titlevalue }) {
  const [joblist, setJoblist] = useState([]);
  // const [skill, setSkill] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  function fetchDetails() {
    axios.get(JobApi).then((res) => {
      console.log(res?.data);

      // console.log(searchResult);
      // setSearchResult(res?.data);

      console.log(res?.data?.jobTitle);
      setJoblist(res?.data);
    });
  }

  useEffect(() => {
    fetchDetails();
  }, []);

  //filtered skills
  function handleFilter() {
    const filteredSkills = joblist?.filter((skill) =>
      skill
        .toString()
        .toLowerCase()
        .includes(titlevalue)
        .toString()
        .toLowerCase()
    );

    console.log(filteredSkills);
    // console.log(searchResult)
    console.log(joblist);
    setSearchResult(filteredSkills);
  }

  return (
    <div>
      {/* {joblist?.filter((item)=>item.skills.toString().toLowerCase().includes(titlevalue)).map((job)=>(
       
        <div className="image-container">

            <img src={job.companyImage} alt="logo" className="img-logo"/>
            <div className="title-container">
            <div className="company-name">{job?.company?.companyName}</div>
              <div className="job-title">{job?.jobTitle}</div>

            </div>
          </div>




      ))} */}
      {joblist?.map((job, index) => (
        <div className="parent-container" key={index}>
          <div className="image-container">
            <img src={job?.companyImage} alt="logo" className="img-logo" />
            <div className="title-container">
              <div className="company-name">{job?.company?.companyName}</div>
              <div className="job-title">{job?.jobTitle}</div>
            </div>
          </div>

          <div className="skills-container">
            {job.skills.map((s, i) => (
              <span
                key={i}
                className="skill-chip"
                onClick={() => handleFilter()}
              >
                {s}
              </span>
            ))}
            {/* {searchResult.map((s, i) =>(<span key={i} className="skill-chip">
            {s}

            </span>))} */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Jobpage;
