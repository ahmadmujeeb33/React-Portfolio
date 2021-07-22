import '../styles/header.css';
import {Link } from 'react-router-dom';

function Header() {
    return (
      <div>
          <div className = "menu-bar">
            <div className = "menu-bar-items">
                <Link to = "/">About Me</Link>
                <Link to = "/Portfolio">Portfolio</Link>
                <Link>Contact</Link>
                <Link>Resume</Link>
            </div>
          </div>
      </div>
    );
  }
  
  export default Header;