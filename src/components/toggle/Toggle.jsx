import React, { useContext } from "react";
import "./toggle.scss";
import Moon from "../../../public/moon.png";
import Sun from "../../../public/sun.png";
import { ThemedContext } from "../../context";
const Toggle = () => {
  const theme = useContext(ThemedContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="toggle">
      <img src={Sun} alt="" className="icon" />
      <img src={Moon} alt="" className="icon" />
      <div
        className="__toggle__btn"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
