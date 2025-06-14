import { useNavigate } from "react-router-dom";
import MarketWidget from "./MarketWidget"; 

const Home = () => {
    const navigate = useNavigate();
    return (
      <div className="container bg">
        <div>
        <h1 className="title">Welcome to SHR Technologies Inc.</h1>
        {/*<p>Your trusted partner for software consulting and application development.</p>*/}
        <p>Software Hub of Revolution</p>
        <button className="styled-button" onClick={() => navigate("/about")}>
        About Us <span className="arrow"></span>
      </button>
      <MarketWidget />
      <div>
    </div>
        </div>
        </div>
    );
  };
  
  export default Home;