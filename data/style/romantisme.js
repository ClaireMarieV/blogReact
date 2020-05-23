import Picture from "../../components/picture";
import ImgRow from "../../components/imgRow";

import romantismePreview from "../../public/images/style/romantisme.jpg?lqip";
import romantisme from "../../public/images/style/romantisme.jpg";
import romantisme2 from "../../public/images/style/romantisme2.jpg";
import romantisme3 from "../../public/images/style/romantisme3.jpg";
import romantisme4 from "../../public/images/style/romantisme4.jpg";
import romantisme5 from "../../public/images/style/romantisme5.jpg";

import necklace from "../../public/images/style/necklace.jpg";

export default {
  category: "STYLE",
  title: "ROMANTISME GRUNGE",
  date: "22.05.2020",
  picture: { preview: romantismePreview, picture: romantisme },
  content: (
    <>
      <div>
        <p></p>
        <p></p>
      </div>
      <ImgRow>
        <Picture picture={{ picture: necklace }} />
      </ImgRow>
    </>
  ),
};
