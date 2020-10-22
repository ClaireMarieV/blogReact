import Picture from "../../components/picture";
import Framer from "../../components/framer";
import grungePreview from "../../public/images/style/simpleGrunge.png?lqip";
import grunge from "../../public/images/style/simpleGrunge.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000";
import grunge2Preview from "../../public/images/style/simpleGrunge2.png?lqip";
import grunge2 from "../../public/images/style/simpleGrunge2.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000";
import grunge3Preview from "../../public/images/style/simpleGrunge3.png?lqip";
import grunge3 from "../../public/images/style/simpleGrunge3.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000";
export default {
  category: "STYLE",
  title: "SIMPLE GRUNGE",
  date: "22.10.2020",
  picture: { preview: grunge3Preview, picture: grunge3 },
  content: (
    <>
      <Framer>
        <Picture picture={{ picture: grunge }} />
      </Framer>
      <Framer>
        <p></p>
      </Framer>
      <Framer>
        <Picture picture={{ picture: grunge2 }} />
      </Framer>
      <Framer>
        <p></p>
      </Framer>
      <Framer>
        <Picture picture={{ picture: grunge3 }} />
      </Framer>
      <Framer>
        <p></p>
      </Framer>
    </>
  ),
};
