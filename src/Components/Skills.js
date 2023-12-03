import React from 'react'
import './skills.css'
import pcimg from '../Assests/pcimg.png'
export default function Skills() {
  return (
    <div>
      <div id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">
           I am a passionate and enthusiastic web developer. i have a strong understanding of development and a keen eye for detail. I am proficient in HTML CSS and JavaScript as well as frameworks Ui Libraries such as React Js.
        </span>
        <div className="skillbar">
           <img src={pcimg} alt="" className="skillBarImg" />
           <div className="skillBarText">
            <h2>Frontend Developer</h2>
            <p>frontend developer</p>
           </div>
        </div>
        
      </div>      
    </div>
  )
}
