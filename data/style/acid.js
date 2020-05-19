import Picture from "../../components/picture";
import ImgRow from "../../components/imgRow";

import acidPreview from "../../public/images/style/acid.jpg?lqip";
import acid from "../../public/images/style/acid.jpg";
import roseEucalyptus from "../../public/images/style/roseEucalyptus.jpg";
import roseEucalyptusPreview from "../../public/images/style/roseEucalyptus.jpg?lqip";

export default {
  category: "STYLE",
  title: "ACID",
  date: "13.04.2020",
  picture: { preview: acidPreview, picture: acid },
  content: (
    <>
      <p>
        Il y a quelque jours je me suis offert ce top ZARA. Quand je l'ai vu
        l'idée m'est tout de suite venu de l'associer avec ce jean mom acid.
        J'ai ce jean depuis des années, je n'ai osé le mettre depuis, jusque
        maintenant et ça fait un bien fou! J'esperai que j'allais le mettre un
        jour malgré les années comme j'esperais trouver ma voie.
      </p>

      <ImgRow>
        <Picture
          picture={{ preview: roseEucalyptusPreview, picture: roseEucalyptus }}
        />
      </ImgRow>
      <div className="imgText">
        <p>
          A la base, le jean avait un ourlet au bas de la jambe et été trop long
          pour moi donc étant petite je l'ai coupé pour qu'il arrive un peu au
          dessus de la cheville. Le fait de l'avoir coupé fait qu'il se delite
          ce qui donne un look un peu grunge que l'on peut aisément rendre
          élégant avec des accessoires.
        </p>
        <p>
          J'aime tellement cette tenue. Associée avec une accumulation de
          collier vintage, des sandales à talons noires avec bride autour de la
          chevilles c'est la tenue parfaite pour le printemps! Un retour à la
          féminité qui avec la formation et le premier job à deux heures aller
          de là où j'habite n'ont pas participé à prendre soin de soi.
        </p>
      </div>
      <p>
        Je vous ai déja parlé de féminité dans l'article 'acceptation par la
        douceur', mais pas de ma façon de voir la féminité. Autre que dans la
        danse, la féminité émane aussi par la douceur et les détails qu'une
        femme peut mettre en avant. Il y a oui, le maquillage, mais il y a aussi
        toutes ces petites choses comme retrousser son pantalon pour mettre en
        avant ses chevilles, ou bien enlacer une de ses chevilles d'une chaîne.
        Parer sa nuque de colliers, la rehausser d'un tatouage. Mettre en valeur
        ou plutôt se mettre en valeur avec de petites choses qui donneront
        confiance.
      </p>
      <p></p>
    </>
  ),
};
