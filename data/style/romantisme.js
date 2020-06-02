import Picture from "../../components/picture";
import ImgRow from "../../components/imgRow";

import romantismePreview from "../../public/images/style/romantisme.jpg?lqip";
import romantisme from "../../public/images/style/romantisme1.jpg";
import romantisme2 from "../../public/images/style/romantisme2.jpg";
import romantisme3 from "../../public/images/style/romantisme3.jpg";
import romantisme4 from "../../public/images/style/romantisme4.jpg";
import romantisme5 from "../../public/images/style/romantisme5.jpg";

import necklace from "../../public/images/style/necklace.jpg";

export default {
  category: "STYLE",
  title: "NEO ROMANTISME GRUNGE",
  date: "22.05.2020",
  picture: { preview: romantismePreview, picture: romantisme },
  content: (
    <>
      <div className="imgText">
        <p>
          Cette dentelle large associée aux manches bouffantes et au volant, on
          pourrait croire en le lisant que c'est trop. Et pourtant ...Ce côté
          AlexanderMcQueen pour le ton neutre, la dentelle et le volume mélangé
          au grunge adoucit, l'équilibre est trouvé en accessoirisant
          discrètement la tenue. Les épaules dénudées permettent d'habiller son
          cou de quelques colliers fins; Collier qui pourra être porté avec un
          pendentif en nacre et même une chaine torsadée entourée en ras du cou.
          Les ongles habillés de framboise mettront délicatement la tenue en
          avant. Quant aux jambes, elles sont d'autant plus misent en valeur
          grâce au volume amené par le volant.
        </p>
        <p>
          La robe étant courte, elle peut aussi bien être marié avec des
          chaussures plates qu'avec des talons. Dans le cas de cet article, et
          dans un esprit premier degré, je l'ai assorti avec les Dr.Martens
          brodées. Ce décalage est d'autant plus marqué quand en plus des Dr.,
          une veste en jean gris acid large est portée par dessus la robe. Le
          volant ressort, ce qui équilibre le volume de la tenue. Casser le côté
          princesse cette robe en jouant avec les accessoires ou rester dans
          l'élégance, à vous de choisir. (Robe 
          <a href="https://www.stories.com/en_eur/clothing/dresses/mini-dresses/product.balloon-sleeve-lace-mini-dress-white.0859832001.html">
            OtherStories
          </a>
          )
        </p>

        <ImgRow>
          <Picture picture={{ picture: necklace }} />
        </ImgRow>
      </div>
    </>
  ),
};
