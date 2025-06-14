import React from "react";
import { FaStar, FaRocket, FaUserGraduate, FaLock, FaBolt } from "react-icons/fa"; // Import icons
import "./../styles/Features.css"; // Import CSS file

const features = [
  {
    icon: <FaStar />,
    title: "Customer Satisfaction",
    description: "We prioritize excellence by delivering high-quality solutions tailored to meet client expectations, ensuring a seamless and positive experience."
  },
  {
    icon: <FaRocket />,
    title: "Cutting-Edge Technology",
    description: "Our team leverages advanced technologies, including AI and cloud computing, to develop innovative solutions that drive business efficiency and transformation."
  },
  {
    icon: <FaUserGraduate />,
    title: "Expertise & Experience",
    description: "With a team of industry experts, we bring years of experience and knowledge to craft intelligent, scalable, and result-driven solutions for businesses."
  },
  {
    icon: <FaLock />,
    title: "Trust & Reliability",
    description: "We uphold transparency and strong security measures to ensure our clients receive reliable, secure, and trustworthy solutions for their business growth."
  },
  {
    icon: <FaBolt />,
    title: "Fast & Efficient Delivery",
    description: "Our agile workflows and high-performance strategies enable rapid project execution while maintaining quality assurance for optimized results."
  }
];

const Features = () => {
  return (
    <div className="features-container" style={{fontSize:"14px"}}>
      {features.map((feature, index) => (
        <div className="feature-box" key={index}>
          <div className="icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
