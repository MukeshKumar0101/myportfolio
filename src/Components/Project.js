/** @format */

import React from "react";
import "./project.css";
export default function Project() {
  return (
    <div id="projects">
      <h3>Project I have done</h3>
      <div className="all-Project">
        <div className="project-detail">
          <h3 className="calculator">Calculator</h3>
          <img
            className="project-img"
            src="https://cdn.icon-icons.com/icons2/2420/PNG/512/calculator_icon_146875.png"
            alt="calculator"
          />
          <a
            href="https://github.com/MukeshKumar0101/Calculator"
            className="project-link">
            Go to project
          </a>
        </div>
        <div className="project-detail">
          <h3 className="calculator">Weather App</h3>
          <img
            className="project-img"
            src="https://img.freepik.com/premium-vector/night-with-clouds-weather-app-screen-mobile-interface-design-forecast-weather-background-time-concept-vector-banner_87946-4287.jpg"
            alt="calculator"
          />
          <a
            href="https://mukeshkumar0101.github.io/weatherapp/"
            className="project-link">
            Go to project
          </a>
        </div>
        <div className="project-detail">
          <h3 className="calculator">Todo App</h3>
          <img
            className="project-img"
            src="https://thumbs.dreamstime.com/b/heavy-to-do-list-young-busy-manager-holding-giant-clipboard-long-tasks-needs-be-completed-too-many-things-work-vector-210013854.jpg"
            alt="calculator"
          />
          <a
            href="https://github.com/MukeshKumar0101/todoAgain"
            className="project-link">
            Go to project
          </a>
        </div>
      </div>
    </div>
  );
}
