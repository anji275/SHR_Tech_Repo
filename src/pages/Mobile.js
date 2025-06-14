import React from "react";
import mobile from "./../images/Mobile.jpg";
import ServiceComponenet from "../components/ServiceComponent";

const services = [
  { title: "Custom App Development", description: "Build tailored solutions for iOS, Android, and cross-platform environments." },
  { title: "User-Centric Design", description: "Create intuitive and engaging interfaces for seamless user experiences." },
  { title: "Performance Optimization", description: "Ensure smooth functionality with speed, security, and reliability." },
  { title: "AI & IoT Integration", description: "Leverage smart technology for enhanced functionalities and automation." },
  { title: "Cloud-Connected Mobile Apps", description: "Enable seamless data syncing and accessibility across devices." }
];

const intro = {title:"Mobile Development", text: "At SHR Technologies Inc., we specialize in developing cutting-edge mobile applications that elevate user engagement, optimize business operations, and transform digital experiences. Whether you're building a customer-centric app, enterprise mobility solutions, or integrating AI-driven functionalities, our mobile development expertise ensures robust, scalable, and high-performing applications tailored to your business needs.Leveraging the latest advancements in 5G connectivity, AI-powered automation, cloud-native applications, and IoT integration, we create seamless, future-ready mobile solutions that drive innovation. Our team implements cross-platform frameworks like Flutter and React Native to ensure optimal performance across devices, while incorporating blockchain security to enhance data privacy. Whether it's AR/VR experiences, voice-enabled applications, or edge computing for real-time processing, we craft mobile solutions that keep your business ahead in a rapidly evolving digital landscape."};
const Mobile = () => {
  return (  
<ServiceComponenet intro={intro} services={services} image={mobile}/>
  );
};

export default Mobile;