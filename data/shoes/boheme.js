import Picture from "../../components/picture";
import ImgRow from "../../components/imgRow";
import bohemePreview from "../../public/images/shoes/boheme.jpg?lqip";
import boheme from "../../public/images/shoes/boheme.jpg";

export default {
  category: "SHOES",
  title: "SANDALES BOHEME",
  date: "06.04.2019",
  picture: { preview: bohemePreview, picture: boheme },
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
