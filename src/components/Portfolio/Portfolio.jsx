import React from "react";
import "./Portfolio.scss";
import Projects from "../Projects/Projects";
import { projects } from "../../data";
const Portfolio = () => {
  return (
    <div className="Portfolio">
      <div className="__port__texts">
        <h1 className="__pro__title">My Project and portfolio</h1>
        <p className="__pro__desc">
          My portfolio showcases a diverse range of projects, highlighting
          creativity, problem-solving, and innovation. Explore my work for a
          glimpse of my passion and dedication to delivering exceptional
          results. Thank you for visiting!
        </p>
      </div>
      <div className="__pro__list">
        {projects.map((item) => (
          <Projects
            key={item.id}
            img={item.img}
            link={item.link}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
