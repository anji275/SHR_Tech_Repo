import joinus from "./../images/About.png";
import Features from "./Features";
const About = () => {
  return (
    <div className="container">
      <div className="imagebk">
        <img src={joinus} alt="Join Us" className="carrers-img feature-box" />
        <div style={{ padding: "0px 0px 20px 20px" }}>
          <h1 className="headings">About Us</h1>
          <p className="para1">
            <strong>SHR Technologies Inc.</strong> is a leading provider of
            software consulting and application development services. With a
            team of experienced professionals, we help businesses navigate
            digital transformation and achieve operational excellence.
          </p>
          <p className="para1">
            We provide highly skilled software professionals to support
            multi-level companies in achieving their technology goals. Our
            experts bring deep industry knowledge, technical excellence, and
            innovative solutions to drive success across diverse sectors.
            Whether you need specialized talent for development, system
            integration, or cloud transformation, we deliver top-tier
            professionals tailored to your unique business needs.
          </p>
          <p className="para1">
            We build AI-powered applications tailored for the banking and
            finance industry to drive scalability and efficiency.Our AI-driven
            solutions help financial institutions innovate, automate, and expand
            operations seamlessly. By integrating advanced AI technologies, we
            empower banking and finance firms to optimize workflows and enhance
            customer experiences.
          </p>
        </div>
      </div>
      {/*    <div className="imagebk">
      <div style={{padding: "20px"}}>
        <h1 className="headings" style={{margin: "0px"}}>What We Follow?</h1>
        <p style={{textAlign:"justify"}} >
          Strategies are crucial to ensure innovation, efficiency, and customer satisfaction.
          We follow a structured and agile approach to consulting and development:
        </p>
        <div className="small-box-container">
        <div className="small-box">
        <h3>Consultation & Analysis</h3>
        <ul className="ui-class">
        <li>Understanding client needs and objectives.</li>
        <li>Conducting market research and feasibility studies.</li>
        <li>Identifying opportunities for digital transformation.</li>
        </ul>
        </div>
        <div className="small-box">
        <h3>Custom Solutions</h3>
        <ul className="ui-class">
        <li>Designing and developing software tailored to business needs.</li>
        <li>Developing scalable and future-proof applications.</li>
        <li>Using cutting-edge technology to enhance business efficiency</li>
        </ul>
        </div></div>
        <div className="small-box-container">
        <div className="small-box">
        <h3>Implementation & Integration</h3>
        <ui  className="ui-class">
        <li>Seamlessly deploying solutions within existing systems.</li>
        <li>Ensuring compatibility with third-party tools and platforms.</li>
        <li>Providing comprehensive training and onboarding for users.</li>
        </ui>
        </div>
        <div className="small-box">
        <h3>Continuous Support</h3>
        <ui  className="ui-class"><li>Ensuring long-term success with maintenance and updates.</li>
        <li>Monitoring performance and ensuring security compliance.</li>
        <li>Adapting solutions to evolving industry trends.</li>
        </ui>
        </div>
        </div>
        </div>
          <img src={about} style={{padding:"20px",height:"auto"}} alt="Join Us" className="carrers-img feature-box"/>
        </div>*/}
      <div style={{ padding: "20px" }}>
        <h1 className="headings">Why Choose Us?</h1>
        <p className="para1">
          Our expertise spans across multiple industries, helping businesses
          optimize processes, reduce costs, and accelerate growth through
          innovative software solutions. Our team of experts leverages
          cutting-edge technologies, AI-driven insights, and agile methodologies
          to develop customized solutions tailored to each industry's unique
          challenges. By fostering collaboration and innovation, we empower
          businesses to enhance efficiency, streamline workflows, and achieve
          sustainable growth in an ever-evolving digital landscape
        </p>
        <Features />
        {/*  <div className="div-bottom-img">
        <img src={about2} alt="Company Overview" className="bottom-img" />
        <img src={strategies} alt="Working Strategy" className="bottom-img"/>
     </div>*/}
      </div>
    </div>
  );
};

export default About;
