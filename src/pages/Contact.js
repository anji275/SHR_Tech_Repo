import React, { useState } from "react";
import "./../styles/Contact.css";
import watsapp from "./../images/whatsapp.png";
import facebook from "./../images/facebook.png";
import linkedin from "./../images/linkedin.png";
import twitter from "./../images/twitter.png";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    info:"Contact",
    name: "",
    email: "",
    phone: "",
    description: ""
  });
const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Hide after 3 seconds
  };

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleShowAlert();
  };

  // Social Media Share Links
  const shareText = encodeURIComponent("Reach out to SHR Technologies for more information!");
  const shareUrl = encodeURIComponent("https://www.shrtechnologies.com");

  const whatsappLink = `https://api.whatsapp.com/send?text=${shareText} ${shareUrl}`;
  const linkedinLink = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
  const twitterLink = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;
  const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;

  return (
    <div className="container">
      <div className="contact-wrapper">
      <div className="contact-container">
        <h2>Contact Us</h2>
        {message && <div className="popup-message">{message}</div>}
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
          <button className="btn-contact" type="submit">Submit</button>
        </form>
      </div>

      {/* Embedded Google Maps iframe */}
      <div className="social-container">
        <div className="">
         <h3>Registered Office</h3><p className="para2"> 812, 1 Rosemount, Scarborough, Ontario, M1K 2W5.</p>
          <h3>Corporate Office</h3><p className="para2"> 71, 180 Bay Street, Toronto, Ontario, M1k 2W5.</p>
          <p style={{paddingTop:"20px"}}><FaEnvelope />Email us: <strong>clientsupport@shrtech.com</strong></p>
          <p><FaPhoneAlt /> Call us: 437 928 1901</p>
          {/* Social Media Links */}
        <div className="social-links">
          <p>Share on:</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer"><img src={watsapp} alt="WhatsApp" className="img"/></a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" className="img"/></a>
          <a href={twitterLink} target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter" className="img"/></a>
          <a href={facebookLink} target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Facebook" className="img"/></a>
        </div>
        </div>
      </div>
      </div>
      {showAlert && (
        <div className="alert-box">
          <p>Thank you for contacting us. Please send email to <strong>clientsupport@shrtech.com</strong></p>
          <p>We will get back to you soon.</p>
          <button className="close-btn" onClick={() => setShowAlert(false)}>✖</button>
        </div>
      )}
      <div className="map-container" style={{heigth:"50%"}}>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.265732387661!2d-79.26495028450564!3d43.74474097911795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d17d4d9c0293%3A0x538c0a3c369f8754!2s1%20Rosemount%20Dr%2C%20Scarborough%2C%20ON%20M1K%202W5%2C%20Canada!5e0!3m2!1sen!2sus!4v1716400000000"
          width="100%"
          height="100%"
          style={{ border: 0, marginBottom: "10vh"}}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
