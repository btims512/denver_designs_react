import React, { useState, useEffect } from "react";
import "./App.css";
import "./Components/SkyLine/SkyLine.scss";
import SkyLine from "./Components/SkyLine/SkyLine";
import "./Components/AnimBirds/AnimBirdStyles.scss";
import "./fonts/selima/selima_.otf";
import { HeaderLogo } from "./Components/AnimBirds/AnimBirds";
import ScroImg from "./Components/ScroImg/ScroImg";
import ScrolMag from "./Components/ScrolMag/ScrolMag";

function App() {
  return (
    <div className="skyline">
      <HeaderLogo />
      <SkyLine />
      <ScroImg />
      <ScrolMag />
    </div>
  );
}

export default App;
