import React from "react";
import ServiceComponenet from "../components/ServiceComponent";
import img from "./../images/cloud1.png";
const services = [
  { title: "Cloud Migration & Modernization", description: "Seamlessly transition to cloud environments while minimizing downtime." },
  { title: "Infrastructure Optimization", description: "Improve resource allocation for cost-effective cloud usage." },
  { title: "Security & Compliance", description: "Ensure data protection with industry-leading security measures." },
  { title: "AI & Automation in Cloud", description: "Leverage AI-driven insights for intelligent cloud computing." },
  { title: "Multi-Cloud & Hybrid Solutions", description: "Customize cloud architectures for flexible deployments." }
];

const intro = {title:"Cloud Solutions", text: "At SHR Technologies Inc., we specialize in delivering innovative cloud solutions that empower businesses to scale seamlessly, fortify security, and drive operational efficiency. From cloud migration and infrastructure optimization to advanced cloud-native development, we design strategies that accelerate digital transformation. With a customer-centric approach and deep industry expertise, we help organizations harness the power of the cloud to streamline workflows, reduce costs, and unlock new opportunities. Whether you're looking for scalable storage, secure multi-cloud integration, or AI-powered automation, we provide tailored solutions that ensure long-term success in an evolving digital landscape."};
const CloudSolutions = () => {
  return (  
<ServiceComponenet intro={intro} services={services} image={img}/>
  );
};

export default CloudSolutions;