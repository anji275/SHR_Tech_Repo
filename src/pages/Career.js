import joinus from  "./../images/Careers.jpg";
import CareerOpportunities from './CareerOpportunities'

const Career = () => {
  return (
    <div  className="container">
      <div className="imagebk" style={{padding:"20px"}}>
      <img src={joinus} alt="Join Us" className="carrers-img"/>
      <div>
      <h1 className="headings">Join Our Team</h1>
      <p style={{textAlign: "justify"}}>Are you looking for a place where your ideas matter, your skills are valued, and your growth is our priority? Welcome to SHR Technologies Inc., where we redefine the standards of software excellence and create an environment where professionals thrive.</p>
      <p style={{textAlign: "justify"}}>We believe that a great work culture drives great results. That's why we foster a collaborative, supportive, and forward-thinking environment, ensuring every team member feels empowered to innovate and succeed.</p>
      <p style={{textAlign: "justify"}}>At SHR Technologies Inc., you'll be surrounded by passionate individuals who are committed to industry best practices, cutting-edge technology, and continuous learning—all while working in a space that prioritizes work-life balance and personal development.</p>
      <p style={{textAlign: "justify"}}>If you’re ready to be part of a team that sets the bar high and delivers outstanding solutions, join us today and take your career to the next level. Let’s build the future together!</p>
     </div>
     </div>
     <CareerOpportunities/>
    </div>
  );
};
export default Career;