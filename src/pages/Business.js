import React from "react";
import ServiceComponenet from "../components/ServiceComponent";
import Bus from "./../images/Business.png";
const services = [
  { title: "Market & Competitive Analysis", description: "Identify emerging tech trends and competitor strategies." },
  { title: "Operational Efficiency", description: "Optimize development workflows and improve software performance." },
  { title: "Digital Transformation", description: "Implement modern solutions like AI, cloud computing, and automation." },
  { title: "Risk Management & Compliance", description: "Ensure cybersecurity, data protection, and regulatory alignment." },
  { title: "Scalable Software Solutions", description: "Develop robust applications that adapt to business growth." }
];

const intro = {title:"Business Consulting", text: "At SHR Technologies Inc., we empower businesses with technology-driven solutions that enhance efficiency, scalability, and innovation. Our approach is built on industry expertise, ensuring that companies receive the right software solutions to meet their evolving needs.By leveraging cutting-edge technology and industry best practices, we provide solutions that streamline operations, optimize workflows, and drive measurable results. Whether it's custom software development, seamless integration of advanced systems, or ongoing support to ensure long-term success, we are committed to delivering excellence. Our goal is to help businesses not only adapt to digital transformation but also thrive in an ever-changing technological landscape."};
const Business = () => {
  return (  
<ServiceComponenet intro={intro} services={services} image={Bus}/>
  );
};

export default Business;