import React from "react";
import Lottie from "lottie-react";

import animationData from "../../../public/about.json";
const LottieAbout = () => {
    const defaultOptions = {
        loop: true, // Set to true to loop the animation
        autoplay: true, // Set to true to start the animation automatically
        animationData: animationData, // Provide the imported animation data
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
  return (
    <Lottie options={defaultOptions} />
  )
}

export default LottieAbout