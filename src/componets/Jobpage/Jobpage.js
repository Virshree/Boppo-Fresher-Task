import axios from "axios";
import React, { useEffect, useState } from "react";
import { JobApi } from "../../api/Api";
import "./Jobpage.css";

function Jobpage() {
  const [joblist, setJoblist] = useState([]);

  function fetchDetails() {
    axios.get(JobApi).then((res) => {
      console.log(res?.data);
      setJoblist(res?.data);
      console.log(joblist?.jobTitle);
    });
  }

  useEffect(() => {
    fetchDetails();
  }, []);
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
            {job.skills.map((s, i) => (
              <span key={i} className="skill-chip">
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Jobpage;
