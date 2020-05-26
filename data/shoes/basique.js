import Picture from "../../components/picture";
import ImgRow from "../../components/imgRow";
import basiquePreview from "../../public/images/shoes/Studio_2.jpg?lqip";
import basique from "../../public/images/shoes/Studio_2.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000";

export default {
  category: "SHOES",
  title: "BASIQUE",
  date: "06.04.2019",
  picture: { preview: basiquePreview, picture: basique },
  content: (
    <>
      <div>
        <p></p>
        <p></p>
      </div>
      <ImgRow>
        <img src="/images/shoes/.jpg" />
        <img src="/images/shoes/.jpg" />
      </ImgRow>
    </>
  ),
};
