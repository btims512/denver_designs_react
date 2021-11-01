import styled from "styled-components";

const ScroImgStyles = styled.div`
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
    background: url("https://images.unsplash.com/photo-1553969732-9cb8664f822f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1376&q=80");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .sc {
    background-color: yellow;
    z-index: 4;
    background: url("https://images.unsplash.com/photo-1620248742445-ce3a0de4b2b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2936&q=80");
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
    background: url("https://images.unsplash.com/photo-1616473515087-d3ad3fe87a24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80");
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
    background: url("https://images.unsplash.com/photo-1607570415631-5279aa4e5252?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1376&q=80");
    background-size: cover;
    background-position: 0% 30%;
    background-repeat: no-repeat;
  }
  .fr a {
    color: #ff9999;
  }
`;

export default ScroImgStyles;
