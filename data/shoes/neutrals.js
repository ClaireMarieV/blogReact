import Picture from "../../components/picture";
import ImgRow from "../../components/imgRow";
import giuseppePreview from "../../public/images/shoes/giuseppe.jpg?lqip";
import giuseppe from "../../public/images/shoes/giuseppe.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000";
import giuseppe2Preview from "../../public/images/shoes/giuseppe2.jpg?lqip";
import giuseppe2 from "../../public/images/shoes/giuseppe2.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000";
import giuseppe6Preview from "../../public/images/shoes/giuseppe6.jpg?lqip";
import giuseppe6 from "../../public/images/shoes/giuseppe6.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000";
import giuseppe7Preview from "../../public/images/shoes/giuseppe7.jpg?lqip";
import giuseppe7 from "../../public/images/shoes/giuseppe7.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000";
import giuseppe8Preview from "../../public/images/shoes/giuseppe8.jpg?lqip";
import giuseppe8 from "../../public/images/shoes/giuseppe8.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000";

export default {
  category: "SHOES",
  title: "NEUTRALS",
  date: "20.07.2020",
  picture: { preview: giuseppe8Preview, picture: giuseppe8 },
  content: (
    <>
      <ImgRow>
        <img src="/images/shoes/giuseppe8.jpg" />
        <p>
          Cette simplicité dans le détail qui fait de cette paire (ou de ce
          style de paire) un basique à avoir. Cette couleur poudrée qui permet
          de les porter avec une pièce forte. Elégante par leur simplicité, ces
          brides passant à l'arrière de la cheville se distingue par leur
          discrétion, d'autant plus cet été où une grand tendance lassage autour
          des chevilles s'est fait voir. Giuseppe Zanotti - ancienne collection
        </p>
        <img src="/images/shoes/giuseppe7.jpg" />
        <img src="/images/shoes/giuseppe1.jpg" />
        <img src="/images/shoes/giuseppe9.jpg" />
        <img src="/images/shoes/giuseppe2.jpg" />
      </ImgRow>
    </>
  ),
};
