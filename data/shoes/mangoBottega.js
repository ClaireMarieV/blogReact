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
      </div>
      <div className="text">
        <p>
          Cependant j'aime cette modernisation des tendances aujourd'hui, dans
          la mode en tout cas! Où le mélange de celles-ci est nécessaires afin
          de créer son propre style. Elles permettent, cette année, ce retour
          des années 80'- 90' avec plus d'assurance, plus de choix, plus de
          nuances. Il n'y a pas de limite sauf peut-être celles que l'on se met.
        </p>
      </div>
      <div className="imgRow">
        <Picture picture={{ preview: mangoPreview, picture: mango }} />
        <Picture picture={{ preview: mango1Preview, picture: mango1 }} />
      </div>
    </>
  ),
};
