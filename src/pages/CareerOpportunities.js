import React, { useState } from "react";


const jobOpportunities = [
  {
    info:"Job",
    id:"JAVA_DEVELOPER_1",
    title: "Software Developer (Java, ReactJS, Oracle)",
    description: "Expertise in Java, ReactJS, Oracle,Spring Boot, Spring Security, Spring Batch.",
  },
  {
    info:"Job",
    id:"PYTHON_DEVELOPER_1",
    title: "Software Developer (Python & Databases)",
    description: "Experience in Python, Oracle, MS-SQL, Postgres, and Airflow.",
  },
  {
    info:"Job",
    id:"BUSINESS_ANALYST_1",
    title: "Business Analyst (Banking & Risk Management)",
    description: "Expert in Banking industry, Risk Management, and financial regulations.",
  },
  {
    info:"Job",
    id:"PROJECT_MANAGER_1",
    title: "Project Manager (Banking & Finance)",
    description: "Lead development teams in Banking & Finance sector.",
  }
];

const CareerOpportunities = () => {
  const [showAlert, setShowAlert] = useState(false);
  const handleApply = (props) => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  }
  return (
    <div className="career-container">
      <p>Explore career opportunities at SHR Technologies Inc. and apply to be part of our dynamic team.</p>
      <h2>Current Openings</h2>

      <div className="job-list" style={{paddingBottom:"8%"}}>
        {jobOpportunities.map((job, index) => (
          <div key={index} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <button onClick={() => handleApply(job)}>Apply Now</button>
          </div>
        ))}
      </div>
 {showAlert && (
        <div className="alert-box">
          <p>Thank you for your interest in SHR Technologies. Please send your latest resume to</p>
            <p>careers@shrtech.com</p>
            <p>We will get back to you as soon as possible.</p>
          <button className="close-btn" onClick={() => setShowAlert(false)}>✖</button>
        </div>
      )}
    </div>
  );
};

export default CareerOpportunities;