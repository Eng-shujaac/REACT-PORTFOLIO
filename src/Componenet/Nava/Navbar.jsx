import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="navbar-brand"><span>D</span>esign with <span> ENG Shujaac</span></div>
      <div className="navbar-nav">
        <ul>
          <li><a href="Home">Home</a></li>
          <li><a href="About">About us</a></li>
          <li><a href="Skills">Skills</a></li>
          <li><a href="Contact me">Contact me</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;