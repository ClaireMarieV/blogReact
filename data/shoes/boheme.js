import Picture from "../../components/picture";
import ImgRow from "../../components/imgRow";
import bohemePreview from "../../public/images/shoes/boheme.jpg?lqip";
import boheme from "../../public/images/shoes/boheme.jpgresize&sizes[]=250&sizes[]=300&sizes[]= 550";

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
        <img src="/images/shoes/.jpg" alt="sandales" />
        <img src="/images/shoes/.jpg" alt="sandales" />
      </ImgRow>
    </>
  ),
};
