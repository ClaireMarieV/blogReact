import Picture from "../../components/picture";
import Framer from "../../components/framer";

import rustique3Preview from "../../public/images/style/rustique3.png?lqip";
import rustique3 from "../../public/images/style/rustique3.png?resize&sizes[]=250&sizes[]=300&sizes[]=550";
import rustique4Preview from "../../public/images/style/rustique4.png?lqip";
import rustique4 from "../../public/images/style/rustique4.png?resize&sizes[]=250&sizes[]=300&sizes[]=550";
import rustique5Preview from "../../public/images/style/rustique5.png?lqip";
import rustique5 from "../../public/images/style/rustique5.png?resize&sizes[]=250&sizes[]=300&sizes[]=550";
import rustique6Preview from "../../public/images/style/rustique6.png?lqip";
import rustique6 from "../../public/images/style/rustique6.png?resize&sizes[]=250&sizes[]=300&sizes[]=550";

export default {
  category: "STYLE",
  title: "INSPIRATION",
  date: "10.07.2020",
  picture: { preview: rustique4Preview, picture: rustique4 },
  content: (
    <>
      <Framer>
        <Picture
          picture={{ preview: rustique4Preview, picture: rustique4 }}
          alt="robe inspiration jacquemus"
        />
      </Framer>
      <Framer>
        <p>
          Un minimalisme allié à l'élégance du drapé. Une mise en forme de la
          silhouette surmontée de détails. Le port de tête accentué par les
          boucles d'oreilles. Les tatouages parant le corps pour contraster avec
          la légereté du lin et le blanc de la robe. Une robe d'inspiration
          Jacquemus ( si je ne me trompe ) qui permet d'être aussi bien portée à
          un mariage qu'à la plage. Robe rustique en lin - Boucles d'oreilles -
          <a href="1445722">ZARA</a>
        </p>
      </Framer>
      <Framer>
        <Picture
          picture={{ preview: rustique3Preview, picture: rustique3 }}
          alt="robe inspiration jacquemus"
        />
      </Framer>
      <Framer>
        <Picture
          picture={{ preview: rustique5Preview, picture: rustique5 }}
          alt="robe inspiration jacquemus"
        />
      </Framer>
      <Framer>
        <Picture
          picture={{ preview: rustique6Preview, picture: rustique6 }}
          alt="robe inspiration jacquemus"
        />
      </Framer>
    </>
  ),
};
