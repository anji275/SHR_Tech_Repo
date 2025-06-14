import React from "react";
import dev from "./../images/Dev5_C.png";
import ServiceComponenet from "../components/ServiceComponent";

const services = [
  { title: "Web Applications", description: "We build scalable web applications with the latest frameworks, ensuring seamless user experiences and high performance." },
  { title: "Full Stack Development", description: "Our full-stack solutions integrate front-end and back-end technologies to create end-to-end applications tailored to business needs." },
  { title: "Custom & Enterprise Software", description: "We design custom enterprise software that automates business processes, enhances efficiency, and drives digital transformation." },
  { title: "Database Systems", description: "Robust database solutions ensure secure storage, optimized performance, and seamless integration for business applications." },
  { title: "UI/UX Design", description: "Our UI/UX experts craft intuitive and engaging designs that elevate user satisfaction and boost digital interactions." },
  { title: "Mobile Apps", description: "We develop high-performance mobile applications for iOS and Android, ensuring functionality, security, and innovation." },
  { title: "Digital & Cloud Solutions", description: "Our cloud-based solutions leverage modern technologies to enhance scalability, security, and operational efficiency." }
];

const intro = {title:"Application Development", text: "With deep expertise in Full Stack Development, Java, PHP, Microsoft Technologies, Python, Web API, and Mobile App Development, we craft industry-focused software solutions that drive digital transformation. In the banking and finance sector, we deliver secure fintech applications, AI-driven risk assessment tools, and seamless payment processing solutions to optimize operations. Our insurance technology solutions enhance policy management, fraud detection, and predictive analytics for smarter decision-making. For eCommerce businesses, we build scalable platforms with personalized user experiences, omnichannel integrations, and secure payment gateways. From enterprise-grade web applications to cloud-based AI-driven analytics, we ensure security, agility, and performance across industries. Through continuous integration, automation, and real-time business intelligence, our software solutions empower businesses to streamline processes, enhance customer engagement, and drive sustainable growth in an evolving digital landscape."};
const SoftwareDevelopment = () => {
  return (  
<ServiceComponenet intro={intro} services={services} image={dev}/>
  );
};

export default SoftwareDevelopment;