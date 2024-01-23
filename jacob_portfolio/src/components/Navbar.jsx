import React from "react"; 
import { Link } from "react-router-dom"; 
import './Navbar.css';
function Navbar() {   
  return (
        <nav className="sticky">       
          <ul>         
            <li>           
              <Link to="/">Jacob Leksan</Link>       
            </li>         
            <li>           
              <Link to="/resume">Resume</Link>       
            </li>         
            <li>           
              <Link to="/contact">Contact</Link>         
            </li>       
          </ul>     
        </nav>   
      ); 
    }
export default Navbar; 