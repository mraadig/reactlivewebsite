import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Import Firebase auth instance
import { onAuthStateChanged, signOut } from "firebase/auth"; // Import required Firebase functions

const Title = () => (
  <a
    href="/"
    style={{
      textDecoration: 'none',
      color: "rgba(255, 128, 0, 0.9)",
      border: "2px solid salmon",
      borderRadius: "15px",
      marginLeft: "10px"
    }}
  >
    <h2 id="hi" key="hi">ApnaKitchen</h2>
  </a>
);

const HeaderComponent = () => {
  const [isLogin, setLogin] = useState(false); // Track login status
  const [username, setUsername] = useState(""); // Track the user's name
  const navigate = useNavigate();

  // Firebase auth state listener to check if the user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogin(true); // Set login state to true
        setUsername(user?.displayName || user?.email); // Set the user's display name or email
      } else {
        setLogin(false); // Set login state to false
        setUsername(""); // Clear the username when logged out
      }
    });

    return () => unsubscribe(); // Clean up the listener on component unmount
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setLogin(false);
      setUsername("");
      navigate("/"); // Navigate to home after logout
    });
  };

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart 🛒</Link></li>
        </ul>
      </div>
      {
        isLogin
          ? <>
              <span>Welcome, {username}</span> {/* Display username */}
              <button className="btnl LogOut" onClick={handleLogout}>LogOut</button>
            </>
          : <button className="btnl Login" onClick={handleLoginClick}>Login</button>
      }
    </div>
  );
};

export default HeaderComponent;
