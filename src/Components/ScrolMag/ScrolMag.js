import "/Users/Ben/Desktop/project_files/denver_designs_react/src/Components/ScrolMag/ScrolMagStyles.scss";
import { useRef } from "react";
import "./ScrolMagStyles.scss";

// const heroTitle = hero.querySelector("h1");

// Y value at which trailer switches to absolute positioning and scrolls up

const ScrolMag = () => {
  // const threshold = window.innerHeight;

  // window.addEventListener("scroll", function () {
  //   // scale up hero section until scale is 20x
  //   // and fade out hero title
  //   let scale = 1 + window.scrollY / 25;
  //   let opacity = 100 - window.scrollY * 1.5;

  //   if (scale < 20) {
  //     hero.style.transform = `scale(${scale})`;
  //     heroTitle.style.opacity = opacity * 0.01;
  //   }
  //   // toggle threshold class at threshold value
  //   window.scrollY > threshold
  //   ? document.body.classList.add("past-threshold")
  //   : document.body.classList.remove("past-threshold");
  // });
  const hero = useRef(null);
  const heroTitle = useRef(null);
  return (
    <div>
      {/* <header className="hero" style={{ transform: "scale(1)" }}>
        <div className="hero__top">
          <div className="filler filler-white" />
          <div className="hero__illustration">
            <div className="filler filler-white" />
            <div className="hero-icon" />
            <div className="filler filler-white" />
          </div>
          <div className="filler filler-white" />
        </div>
        <div className="hero__bottom">
          <h1>The future is here.</h1>
        </div>
      </header>
      <div className="trailer">
        <div className="video-wrapper">
          <div className="video" />
        </div>
      </div>
      <main className="content">
        <section className="section">
          <h2>Really</h2>
        </section>
        <section className="section">
          <h2>sweet</h2>
        </section>
        <section className="section">
          <h2>scroll</h2>
        </section>
        <section className="section">
          <h2>effect.</h2>
          <p>Inspired by Framer's homepage.</p>
        </section>
      </main> */}
    </div>
  );
};

export default ScrolMag;
