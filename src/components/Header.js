import '../styles/header.css';
import {Link } from 'react-router-dom';

function Header() {
    return (
      <div>
          <div className = "menu-bar">
            <div className = "menu-bar-items">
                <Link to = "/React-Portfolio">About Me</Link>
                <Link to = "/React-Portfolio/Portfolio">Portfolio</Link>
                <Link to = "/React-Portfolio/contact">Contact</Link>
                <Link>Resume</Link>
            </div>
          </div>
      </div>
    );
  }
  
  export default Header;