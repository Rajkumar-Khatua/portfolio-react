import React from "react";
import "./Project.scss";
const Projects = () => {
  return (
    <div class="card">
      <img src="./public/My_Linkedin_Pic.jpeg" alt="" className="card__image"/>
      <div class="card__buttons">
        <button class="card__button__1">Demo</button>
        <button class="card__button__2"><img src="../../../public/github_733609.png" alt="" className="icon"/> </button>
      </div>
    </div>
  );
};

export default Projects;
