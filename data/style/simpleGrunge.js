import Picture from "../../components/picture";
import Framer from "../../components/framer";
import grungePreview from "../../public/images/style/simpleGrunge1.png?lqip";
import grunge from "../../public/images/style/simpleGrunge1.png?resize&sizes[]=300&sizes[]= 650";
import grunge2Preview from "../../public/images/style/simpleGrunge2.png?lqip";
import grunge2 from "../../public/images/style/simpleGrunge2.png?resize&sizes[]=300&sizes[]= 650";
import grunge3Preview from "../../public/images/style/simpleGrunge3.png?lqip";
import grunge3 from "../../public/images/style/simpleGrunge3.png?resize&sizes[]=300&sizes[]= 650";
export default {
  category: "STYLE",
  title: "SIMPLE GRUNGE",
  date: "22.10.2020",
  picture: { preview: grungePreview, picture: grunge },
  content: (
    <>
      <Framer>
        <Picture
          picture={{ picture: grunge }}
          alt="illustration+robe fendue grunge"
        />
      </Framer>
      <Framer>
        <p></p>
      </Framer>
      <Framer>
        <Picture
          picture={{ picture: grunge2 }}
          alt="illustration+robe fendue grunge"
        />
      </Framer>
      <Framer>
        <p></p>
      </Framer>
      <Framer>
        <Picture
          picture={{ picture: grunge3 }}
          alt="illustration+tenue avec manteau"
        />
      </Framer>
      <Framer>
        <p></p>
      </Framer>
    </>
  ),
};
