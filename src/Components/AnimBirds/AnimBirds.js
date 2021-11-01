import "/Users/Ben/Desktop/project_files/denver_designs_react/src/Components/AnimBirds/AnimBirdStyles.scss";
import Header from "../../images/Header.png";

const AnimBirds = () => {
  return (
    <div class="container">
      <div class="bird-container bird-container--one">
        <div class="bird bird--one"></div>
      </div>

      <div class="bird-container bird-container--two">
        <div class="bird bird--two"></div>
      </div>

      <div class="bird-container bird-container--three">
        <div class="bird bird--three"></div>
      </div>

      <div class="bird-container bird-container--four">
        <div class="bird bird--four"></div>
      </div>
    </div>
  );
};

export const HeaderLogo = () => {
  return (
    <div className="header-img">
      <img
        src={Header}
        alt="Welcome to the Mile High"
        style={{ width: "100vw", height: "50vh" }}
      />
    </div>
  );
};

export default AnimBirds;
