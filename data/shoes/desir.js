import Picture from "../../components/picture";
import Framer from "../../components/framer";

import docPreview from "../../public/images/shoes/doc.jpg?lqip";
import doc from "../../public/images/shoes/doc.jpg?resize&sizes[]=250&sizes[]=300&sizes[]=450";
export default {
  category: "SHOES",
  title: "DESIREES",
  date: "12.03.2020",
  picture: { preview: docPreview, picture: doc },
  content: (
    <>
      <Framer>
        <p>
          Le romantisme grunge de ces Dr.Martens suscité par les broderies. Ces
          roses noires adoucissant ces boots tout en les mettant en valeur. Un
          ton sur ton relevé par une lumière différente entre le cuir lisse et
          l'effet mat du fil. Vous vous rappelez sans doute du style jean acid
          des années 90', où le tartan, les carreaux, les jeans déchirées et les
          look négligés controlés avaient le vent en poupe. Cette tendance qui a
          prit son envol il me semble grâce à Nirvana ou Alice in Chains. Ces
          boots me le rappelent; une nostalgie qui est nostalgie pour les style
          vestimentaires et musicaux de l'époque.
        </p>
      </Framer>
      <Framer>
        <Picture
          picture={{ preview: docPreview, picture: doc }}
          alt="dr martens brodées"
        />
      </Framer>
      <Framer>
        <p>
          Cependant j'aime cette modernisation des tendances aujourd'hui, dans
          la mode en tout cas! Où le mélange de celles-ci est nécessaires afin
          de créer son propre style. Elles permettent, cette année, ce retour
          des années 80'- 90' avec plus d'assurance, plus de choix, plus de
          nuances. Il n'y a pas de limite sauf peut-être celles que l'on se met.
        </p>
      </Framer>
    </>
  ),
};
