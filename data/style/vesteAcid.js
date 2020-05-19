import Picture from "../../components/picture";
import ImgRow from "../../components/imgRow";

import vesteAcidPreview from "../../public/images/style/vesteAcid.jpg?lqip";
import vesteAcid from "../../public/images/style/vesteAcid.jpg";
import vesteAcid1 from "../../public/images/style/vesteAcid1.jpg";
import vesteAcidDos from "../../public/images/style/vesteAcidDos.jpg";

export default {
  category: "STYLE",
  title: "UN BRIN RETRO",
  date: "05.05.2020",
  picture: { preview: vesteAcidPreview, picture: vesteAcid },
  content: (
    <>
      <div>
        <p>Toujours dans les années 80'- 90', la manche ballon.</p>
        <p></p>
      </div>
      <ImgRow>
        <Picture picture={{ picture: vesteAcid1 }} />
        <Picture picture={{ picture: vesteAcidDos }} />
      </ImgRow>
    </>
  ),
};
