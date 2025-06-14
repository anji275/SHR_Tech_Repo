import React from "react";
import "./../styles/ServiceComponent.css";

const ServiceComponenet = (props) => {
    let intro = props.intro;
    let services = props.services;
    let image = props.image;

  return (  
    <div className="container">
        <div className="image-container">
        <img src={image} alt="Services" />
      </div>
    <div className="service-container">
      <div>
        <h1 className="headings">{intro.title}</h1>
        <p className="para1">
          {intro.text}
        </p>
      </div>
      </div>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      </div>
  );
};

export default ServiceComponenet;