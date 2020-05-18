import Picture from "../../components/picture";
import mangoPreview from "../../public/images/shoes/mangoBottega.jpg?lqip";
import mango from "../../public/images/shoes/mangoBottega.jpg";
import mango1Preview from "../../public/images/shoes/mangoBottega1.jpg?lqip";
import mango1 from "../../public/images/shoes/mangoBottega1.jpg";

export default {
  category: "SHOES",
  title: "INSPIRATION BOTTEGA",
  date: "17.05.2020",
  picture: { preview: mangoPreview, picture: mango },
  content: (
    <>
      <div className="text">
        <p></p>
      </div>
      <div className="text">
        <p></p>
      </div>
      <div className="imgRow">
        <Picture picture={{ preview: mangoPreview, picture: mango }} />
        <Picture picture={{ preview: mango1Preview, picture: mango1 }} />
      </div>
    </>
  ),
};
