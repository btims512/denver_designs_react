import ScroImgStyles from "./ScroImgStyles";

const ScroImg = () => {
  return (
    <ScroImgStyles>
      <div class="page fs">
        <a
          target="_blank"
          href="https://www.pexels.com/photo/landscape-photo-of-green-trees-and-mountains-2088167/"
        >
          Img A
        </a>
      </div>
      <div class="page sc">
        <a
          target="_blank"
          href="https://www.pexels.com/photo/body-of-water-near-green-mountain-931018/"
        >
          Img B
        </a>
      </div>
      <div class="page th">
        <a
          target="_blank"
          href="https://www.pexels.com/photo/trees-on-mountain-3551227/"
        >
          Img C
        </a>
      </div>
      <div class="page fr">
        <a
          target="_blank"
          href="https://www.pexels.com/photo/dramatic-red-sunset-over-waving-ocean-6775273/"
        >
          Img D
        </a>
      </div>
    </ScroImgStyles>
  );
};

export default ScroImg;
