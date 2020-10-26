import Picture from "../../components/picture";
import Framer from "../../components/framer";
import giuseppePreview from "../../public/images/shoes/giuseppe.jpg?lqip";
import giuseppe from "../../public/images/shoes/giuseppe.jpg?resize&sizes[]=250&sizes[]=300&sizes[]= 550";
import giuseppe2Preview from "../../public/images/shoes/giuseppe2.jpg?lqip";
import giuseppe2 from "../../public/images/shoes/giuseppe2.jpg?resize&sizes[]=250&sizes[]=300&sizes[]= 550";
import giuseppe6Preview from "../../public/images/shoes/giuseppe6.jpg?lqip";
import giuseppe6 from "../../public/images/shoes/giuseppe6.jpg?resize&sizes[]=250&sizes[]=300&sizes[]= 550";
import giuseppe7Preview from "../../public/images/shoes/giuseppe7.jpg?lqip";
import giuseppe7 from "../../public/images/shoes/giuseppe7.jpg?resize&sizes[]=250&sizes[]=300&sizes[]= 550";
import giuseppe8Preview from "../../public/images/shoes/giuseppe8.jpg?lqip";
import giuseppe8 from "../../public/images/shoes/giuseppe8.jpg?resize&sizes[]=250&sizes[]=300&sizes[]= 550";

export default {
  category: "SHOES",
  title: "NEUTRALS",
  date: "20.07.2020",
  picture: { preview: giuseppe8Preview, picture: giuseppe8 },
  content: (
    <>
      <Framer>
        <Picture picture={{ picture: giuseppe8 }} />
      </Framer>
      <Framer>
        <p>
          Cette simplicité dans le détail qui fait de cette paire (ou de ce
          style de paire) un basique à avoir. Cette couleur poudrée qui permet
          de les porter avec une pièce forte ou bien dans un monochrome.
          Elégante par leur simplicité, ces brides passant à l'arrière de la
          cheville se distingue par leur discrétion, d'autant plus cet été où
          une grand tendance lassage autour des chevilles s'est fait voir.
          Giuseppe Zanotti - ancienne collection
        </p>
      </Framer>
      <Framer>
        <Picture picture={{ preview: giuseppePreview, picture: giuseppe }} />
      </Framer>
      <Framer>
        <Picture picture={{ preview: giuseppe2Preview, picture: giuseppe2 }} />
      </Framer>
      <Framer>
        <Picture picture={{ preview: giuseppe7Preview, picture: giuseppe7 }} />
      </Framer>
      <Framer>
        <Picture picture={{ preview: giuseppe6Preview, picture: giuseppe6 }} />
      </Framer>
    </>
  ),
};
