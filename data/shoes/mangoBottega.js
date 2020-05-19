import Picture from "../../components/picture";
import mangoPreview from "../../public/images/shoes/mangoBottega.jpg?lqip";
import mango from "../../public/images/shoes/mangoBottega.jpg";
import mango1Preview from "../../public/images/shoes/mangoBottega1.jpg?lqip";
import mango1 from "../../public/images/shoes/mangoBottega1.jpg";
import mango2Preview from "../../public/images/shoes/mangoBottega.jpg?lqip";
import mango2 from "../../public/images/shoes/mangoBottega2.jpg";
import mango3Preview from "../../public/images/shoes/mangoBottega3.jpg?lqip";
import mango3 from "../../public/images/shoes/mangoBottega3.jpg";
import mango4Preview from "../../public/images/shoes/mangoBottega4.jpg?lqip";
import mango4 from "../../public/images/shoes/mangoBottega4.jpg";
import mango5Preview from "../../public/images/shoes/mangoBottega5.jpg?lqip";
import mango5 from "../../public/images/shoes/mangoBottega5.jpg";

export default {
  category: "SHOES",
  title: "INSPIRATION BOTTEGA",
  date: "17.05.2020",
  picture: { preview: mango4Preview, picture: mango4 },
  content: (
    <>
      <div className="text">
        <p></p>
      </div>
      <div className="imgRow">
        <Picture picture={{ preview: mangoPreview, picture: mango }} />
        <Picture picture={{ preview: mango5Preview, picture: mango5 }} />
      </div>
      <div className="imgRow">
        <Picture picture={{ preview: mango3Preview, picture: mango3 }} />
        <Picture picture={{ preview: mango1Preview, picture: mango1 }} />
      </div>
      <div className="imgRow">
        <Picture picture={{ preview: mango2Preview, picture: mango2 }} />
      </div>
    </>
  ),
};
