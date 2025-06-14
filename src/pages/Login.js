import React, { useState, useEffect } from "react";
import "./../styles/Login.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const hardcodedUsername = "admin";
  const hardcodedPassword = "shr_admin";

  const handleLogin = () => {
    if (username === hardcodedUsername && password === hardcodedPassword) {
      setIsLoggedIn(true);
      sessionStorage.setItem("loggedInUser", JSON.stringify(username));
      navigate("/");
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };
  useEffect(() => {
    const savedUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    console.log("savedUser", savedUser);
    savedUser ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, []);

  return (
    <div className="container" style={{ paddingBottom: "8%" }}>
      {!isLoggedIn ? (
        <div className="login-box">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      ) : (
        navigate("/")
      )}
    </div>
  );
};

export default Login;
