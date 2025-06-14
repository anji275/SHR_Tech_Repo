import React from "react";
import "./../styles/Service.css";

const Service = () => {
  return (
    <div className="service-container">
      <h2>Our Services</h2>
      <p>
        At <strong>SHR Technologies</strong>, we specialize in delivering top-tier software solutions, AI-driven innovation, and expert business analysis to help businesses thrive in a competitive landscape.
      </p>

      <div className="service-list">
        <div className="service-item">
          <h3>Software Development</h3>
          <p>
            We offer **custom web and mobile development** using the latest technologies like React, Node.js, Python, and more. Our solutions are designed for scalability, security, and performance.
          </p>
        </div>

        <div className="service-item">
          <h3>AI & Machine Learning Development</h3>
          <p>
            Harness the power of artificial intelligence with our cutting-edge **AI and machine learning solutions**. We help businesses automate workflows, improve decision-making, and unlock data-driven insights.
          </p>
        </div>

        <div className="service-item">
          <h3>Highly Skilled Developers</h3>
          <p>
            Our **multilevel expertise** ensures you get access to top-tier developers proficient in modern programming languages, cloud technologies, and architecture design.
          </p>
        </div>

        <div className="service-item">
          <h3>Business Analysis & Strategy</h3>
          <p>
            We provide **strategic business analysis** to identify growth opportunities, optimize workflow efficiency, and integrate niche technologies into your business model.
          </p>
        </div>

        <div className="service-item">
          <h3>Enterprise Solutions</h3>
          <p>
            Our **enterprise-grade solutions** focus on enhancing operational agility, implementing digital transformation, and securing seamless integration across multiple systems.
          </p>
        </div>
      </div>

      <p className="cta">
        🚀 Ready to elevate your business with expert solutions? Contact us today!
      </p>
    </div>
  );
};

export default Service;
