import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import Business from "./pages/Business";
import CloudSolutions from "./pages/CloudSolutions";
import Mobile from "./pages/Mobile";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/development" element={<SoftwareDevelopment />}/>
        <Route path="/business" element={<Business />}/>
        <Route path="/cloud-solutions" element={<CloudSolutions />}/>
        <Route path="/mobile" element={<Mobile />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;