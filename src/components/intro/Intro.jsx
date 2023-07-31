import React, { useEffect, useState } from "react";
import "./intro.scss";
import { Link } from "react-router-dom";
const Intro = () => {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    // Start the animation after the component mounts
    setShowName(true);
  }, []);

  return (
    <div className="intro">
      <div className="top">
        <img src="/profile.png" className="img" alt="" />
        <h2 className="__text">
          Hello, My name is{" "}
          <span className="__name">{showName ? "Rajkumar Khatua" : ""}</span>
        </h2>
        <div className="into__title">
          <h2>I am </h2>
          <div className="intro__title__wrapper">
            <div className="intro__title__item">Web Developer</div>
            <div className="intro__title__item">Full Stack developer</div>
            <div className="intro__title__item">Mobile Developer</div>
            <div className="intro__title__item">Blogger </div>
            <div className="intro__title__item">Team player</div>
          </div>
        </div>

        <div className="__socail_media_links">
          <div className="__link">
            <div className="__connect">
              <a href="https://github.com/Rajkumar-Khatua" target="blank">
                <span className="__connect__text">Follow me </span>
                <img src="./github_733609.png" alt="" className="__icon" />
              </a>
            </div>
            <div className="__connect">
              <a href="https://www.instagram.com/i_am_raj.k.k20/">
                <span className="__connect__text">Follow me </span>
                <img src="./instagram_3955024.png" alt="" className="__icon" />
              </a>
            </div>
            <div className="__connect">
              <a href="https://www.linkedin.com/in/rajkumar-khatua-57154a20b/">
                <span className="__connect__text">Connect me </span>
                <img src="./linkedin_145807.png" alt="" className="__icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div id="mouse-scroll">
          <div class="mouse">
            <div class="mouse-in"></div>
          </div>
          <div>
            <span class="down-arrow-1"></span>
            <span class="down-arrow-2"></span>
            <span class="down-arrow-3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
