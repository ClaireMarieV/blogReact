import Picture from "../../components/picture";
import Framer from "../../components/framer";

import plateformePreview from "../../public/images/shoes/plateforme1.jpg?lqip";
import plateforme from "../../public/images/shoes/plateforme1.jpg?resize&sizes[]=250&sizes[]=300&sizes[]=400";
import plateforme1Preview from "../../public/images/shoes/plateforme.png?lqip";
import plateforme1 from "../../public/images/shoes/plateforme.png?resize&sizes[]=250&sizes[]=300&sizes[]=400";

export default {
  category: "SHOES",
  title: "RETOUR AUX ANNEES 90'",
  date: "05.05.2020",
  picture: { preview: plateformePreview, picture: plateforme },
  content: (
    <>
      <Framer>
        <Picture
          picture={{ preview: plateformePreview, picture: plateforme }}
          alt="sandales 90's python"
        />
      </Framer>
      <Framer>
        <p>
          La plateform shoes, vogue des années 90', refait son apparition 20 et
          quelques années plus tard. Ces détails python sur le talon et la
          plateforme permettent à ces sandales de rester dans la simplicité tout
          en les relevant par ce relief. Le tour de la cheville accentué par la
          bride l'est d'autant plus grâce au bracelet de cheville qui reflète la
          lumière. Encore une fois, tout se joue sur ce que la luminosité amène
          et créé sur nous.
        </p>
      </Framer>
      <Framer>
        <Picture
          picture={{ preview: plateforme1Preview, picture: plateforme1 }}
          alt="sandales 90's python"
        />
      </Framer>
    </>
  ),
};
