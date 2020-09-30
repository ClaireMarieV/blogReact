import Picture from "../../components/picture";
import rustiquePreview from "../../public/images/style/rustique.jpg?lqip";
import rustique from "../../public/images/style/rustique.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000";
import rustique1Preview from "../../public/images/style/rustique1.jpg?lqip";
import rustique1 from "../../public/images/style/rustique1.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000";
import rustique2Preview from "../../public/images/style/rustique.jpg?lqip";
import rustique2 from "../../public/images/style/rustique2.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000";
import rustique3Preview from "../../public/images/style/rustique3.jpg?lqip";
import rustique3 from "../../public/images/style/rustique3.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000";
import rustique4Preview from "../../public/images/style/rustique4.jpg?lqip";
import rustique4 from "../../public/images/style/rustique4.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000";
import rustique5Preview from "../../public/images/style/rustique5.jpg?lqip";
import rustique5 from "../../public/images/style/rustique5.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000";
import rustique6Preview from "../../public/images/style/rustique5.jpg?lqip";
import rustique6 from "../../public/images/style/rustique6.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000";
import Parallax from "../../components/parallax";

export default {
  category: "STYLE",
  title: "INSPIRATION",
  date: "10.07.2020",
  picture: { preview: rustique4Preview, picture: rustique4 },
  content: (
    <>
      <Parallax>
        <Picture picture={{ preview: rustique4Preview, picture: rustique4 }} />
      </Parallax>
      <p>
        Un minimalisme allié à l'élégance du drapé. Une mise en forme de la
        silhouette surmontée de détails. Le port de tête accentué par les
        boucles d'oreilles. Les tatouages parant le corps pour contraster avec
        la légereté du lin et le blanc de la robe. Une robe d'inspiration
        Jacquemus ( si je ne me trompe ) qui permet d'être aussi bien portée à
        un mariage qu'à la plage. Robe rustique en lin - Boucles d'oreilles -
        <a href="1445722">ZARA</a>
      </p>
      <Parallax>
        <Picture picture={{ preview: rustique3Preview, picture: rustique3 }} />
      </Parallax>
      <Parallax>
        <Picture picture={{ preview: rustique1Preview, picture: rustique1 }} />
      </Parallax>
      <Parallax>
        <Picture picture={{ preview: rustique6Preview, picture: rustique6 }} />
      </Parallax>
    </>
  ),
};
