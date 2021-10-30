import React, { useState, useEffect } from "react";
import "./App.css";
import "./Components/SkyLine/SkyLine.scss";
import SkyLine from "./Components/SkyLine/SkyLine";
import "./Components/AnimBirds/AnimBirdStyles.scss";
import "./fonts/selima/selima_.otf";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () => (
    <>
      {/* <div className="Parallax__content__heading"> */}
        {/* <h1 className="Parallax__content__heading__text"></h1> */}
        {/* <h2 className="Parallax__content__heading__caption">
          Your one-stop source of Web Development tricks
        </h2> */}
      {/* </div> */}
      {/* <div className="Parallax__content__cta">
        <p>
          <b>1. Like the video.</b> Because it helps me and my channel
        </p>
        <p>
          <b>2. Like the video.</b> To see more content like that!
        </p>
        <p>
          <b>3. Follow the Github link.</b> And play with this code yourself!
        </p>
      </div> */}
    </>
  );

  return (
    <div className="skyline">
      <SkyLine />
      <section className="Parallax">
        <div
          className="Parallax__background"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        />
        <div
          className="Parallax__background-triangles"
          style={{ transform: `translateY(${offsetY * 0.8}px)` }}
        />
        <div className="Parallax__content">{renderContent()}</div>
      </section>
    </div>
  );
}

export default App;
