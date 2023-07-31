import React from "react";
import "./Project.scss";
const Projects = ({ img, link, title, desc }) => {
  return (
    <div class="card">
      <img src={img} alt="" className="__card__img" />
      <div class="card__buttons">
        <span className="title">{title}</span>
        <span className="Desc">{desc}</span>
        <a href={link} target="blank" rel="noreferrer">
          <button class="card__button">
            <img
              src="../../../public/github_733609.png"
              className="icon"
              alt=""
            />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
