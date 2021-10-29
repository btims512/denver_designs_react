import styled from "styled-components";

export const SkyLineStyles = styled.div`
  .parallax {
    perspective: 1px;
    perspective-origin: center;
    overflow-y: auto;
    overflow-x: hidden;
    margin-top: 0;
    height: 100vh;
  }

  .parallax .group {
    position: relative;
    height: 100vh;
    transform-style: preserve-3d;
  }

  .parallax .layer {
    position: absolute;
    width: 100%;
    overflow: hidden;
  }

  #city1 {
    fill: #111115;
    transform: translateZ(0.25px) scale(0.75) translateY(-1vh);
  }

  #city2 {
    fill: #12161e;
    transform: translateZ(0px) scale(1) translateY(-1vh);
  }

  #city3 {
    fill: #19202f;
    transform: translateZ(-0.25px) scale(1.25) translateY(-1vh);
  }

  #city4 {
    fill: #222032;
    transform: translateZ(-0.5px) scale(1.5) translateY(-1vh);
  }

  #city5 {
    fill: #15172a;
    transform: translateZ(-0.75px) scale(1.75) translateY(-1vh);
  }

  #mountain1 {
    fill: #202a5c;
    transform: translateZ(-2.25px) scale(3.25) translateY(-1vh);
  }

  #mountain2 {
    fill: #4a4d82;
    transform: translateZ(-2.5px) scale(3.5) translateY(-1vh);
  }

  #mountain3 {
    fill: #5f5d99;
    transform: translateZ(-3px) scale(4) translateY(-10vh);
    height: 50vh;
  }

  #mountain4 {
    fill: #8a7d9e;
    transform: translateZ(-3.5px) scale(4.5) translateY(-20vh);
    height: 30vh;
  }

  #sun {
    fill: #ff7e00;
    transform: translateZ(-6px) scale(7) translateY(-25vh);
    height: 25vh;
  }

  .city2-front {
    background: #12161e;
    width: 100vw;
    height: 30vh;
    position: relative;
    margin-top: -5px;
  }

  .city-front {
    position: relative;
    margin-top: -5px;
    background-color: #111115;
    width: 100vw;
    height: 125vh;
  }

  .site_name {
    color: #fff;
    display: inline-block;
    margin: 0 0 0 20px;
  }
`;
