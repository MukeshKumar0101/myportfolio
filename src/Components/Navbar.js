/** @format */

import React,{useState} from "react";
import "./navbar.css";
import logo1 from "../Assests/logo1.jpg";
import { Link } from "react-scroll";
import { MdContacts } from "react-icons/md";
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className="navbar">
      <img src={logo1} alt="logo1" className="logo1" />
      <div className="desktopMenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} duration={500} offset={-100} className="desktopMenuListItem">Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500}   offset={-150} className="desktopMenuListItem">About</Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500}   offset={-150} className="desktopMenuListItem">Projects</Link>
    
      </div>
      <button className="desktopMenuBtn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:"smooth"})
      }}>
        {" "}
        <MdContacts /> Contact Me
      </button>
      <img src='https://cdn-icons-png.flaticon.com/128/8106/8106985.png' alt="menu" className="mobMenu" onClick={()=>{setShowMenu(!showMenu)}}/>
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass="active" to="intro" spy={true} smooth={true} duration={500} offset={-100} className="listItem" onClick={()=>{setShowMenu(false)}}>Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500}   offset={-150} className="listItem" onClick={()=>{setShowMenu(false)}}>About</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}   offset={-150} className="listItem" onClick={()=>{setShowMenu(false)}}>contact</Link>
        <Link onClick={()=>{setShowMenu(false)}} className="listItem" activeClass="active" to="projects" spy={true} smooth={true} duration={500}   offset={-150}>Projects</Link>
      </div>
    </nav>
  );
}
