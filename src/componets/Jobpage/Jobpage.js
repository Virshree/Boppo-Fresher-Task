import React, { useEffect, useState } from "react";
import "./Jobpage.css";

function Jobpage({ joblist}) {
  
  
 

 
 

  return (
    <div>
     
    
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
            {job?.skills.map((s, i) => (
              <span
                key={i}
                className="skill-chip"
                // onClick={() => handleFilter()}
              >
                {s}
              </span>
                          ))}
                          {/* <span>{job?.company?.companyId}</span> */}
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
