/** @format */

import React from "react";
import "./intro.css";
import mypng01 from "../Assests/mypng01.png";
import { Link } from "react-scroll";
import { IoBagSharp } from "react-icons/io5";

export default function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Mukesh Kumar</span>
          <br />
          React Js Developer
        </span>
        <p className="introPara">
          I am a React Js Developer with experties in <br /> HTML,Css, Javascript,
          Frameworks UI Libraries
        </p>
        <Link>
          <button className="btn">
            {" "}
            <IoBagSharp /> Hire Me
          </button>
        </Link>
      </div>
      <img src={mypng01} alt="myprofile" className="bg" />
    </section>
  );
}
