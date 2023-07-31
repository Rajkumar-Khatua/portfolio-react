import React from "react";
import "./skils.scss";
const Skils = () => {
  return (
    <div className="skills">
      <div className="__wrapper">
        <h2>Skills</h2>
        <div className="item">
          <h3 className="item__title">Frontend</h3>
          <div className="item__img">
            <img src="skils_img/html-5_5968267.png" alt="" />
            <img src="skils_img/css-3_5968242.png" alt="" />
            <img src="skils_img/sass_5968358.png" alt="" />
            <img src="skils_img/js_5968292.png" alt="" />
            <img src="skils_img/typescript_919832.png" alt="" />
            <img src="skils_img/webpack.png" alt="" />
            <img src="skils_img/atom_5320664.png" alt="" />
            <img src="skils_img/branch_9294547.png" alt="" />
          </div>
        </div>
        <div className="item">
          <h3 className="item__title">Backend</h3>
          <div className="item__img">
            <img src="skils_img/nodejs.png" alt="" />
            <img src="skils_img/expressjs.png" alt="" />
            <img src="skils_img/mysql_919836.png" alt="" />
            <img src="skils_img/php_919830.png" alt="" />
            <img src="skils_img/mongoDB.png" alt="" />
            <img src="skils_img/docker_5969059.png" alt="" />
            <img src="skils_img/linux_6124995.png" alt="" />
            <img src="skils_img/windows_5969316.png" alt="" />
            <img src="skils_img/aws.png" alt="" />
          </div>
        </div>
        <div className="item">
          <h3 className="item__title">Mobile & development tools</h3>
          <div className="item__img">
            <img src="skils_img/reactNative.png" alt="" />
            <img src="skils_img/android.png" alt="" />
            <img src="skils_img/firebase.png" alt="" />
            <img src="skils_img/android_studio.png" alt="" />
            <img src="skils_img/vscode.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skils;
