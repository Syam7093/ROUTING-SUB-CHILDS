import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';



const Header = () => {
  return (
    <div className="head">
      <Link to="/user"> User</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/about"> About</Link>
      <Link to="/contact"> Contact Us</Link>
    </div>
  );
};

export default Header;
