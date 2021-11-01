import styled from "styled-components";

export const ScroImgStyles = styled.div`
  * {
    padding: 0;
    margin: 0;
  }
  /* body{
  max-width: 800px;
  margin: 0 auto;
} */
  .page {
    box-sizing: border-box;
    height: 100vh;
    background-color: blue;
    position: sticky;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 85px;
    font-family: "Libre Baskerville";
    box-shadow: 0 10px 15px #00000060;
  }
  .page a {
    text-decoration: underline;
    color: #efefff;
    mix-blend-mode: overlay;
    /*   border: 5px solid #000000; */
  }
  .fs {
    z-index: 5;
    background: url("https://images.pexels.com/photos/2088167/pexels-photo-2088167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .sc {
    background-color: yellow;
    z-index: 4;
    background: url("https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-size: cover;
    background-position: 0% 70%;
    background-repeat: no-repeat;
  }
  .sc a {
    color: #00b386;
  }
  .th {
    background-color: green;
    z-index: 3;
    background: url("https://images.pexels.com/photos/3551227/pexels-photo-3551227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-size: cover;
    background-position: 0% 70%;
    background-repeat: no-repeat;
  }
  .th a {
    color: #00ace6;
  }
  .fr {
    background-color: red;
    z-index: 2;
    background: url("https://images.pexels.com/photos/6775273/pexels-photo-6775273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-size: cover;
    background-position: 0% 30%;
    background-repeat: no-repeat;
  }
  .fr a {
    color: #ff9999;
  }
`;

export default ScroImgStyles;
