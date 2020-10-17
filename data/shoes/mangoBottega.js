import Picture from "../../components/picture";
import Framer from "../../components/framer";

import mangoPreview from "../../public/images/shoes/mangoBottega.jpg?lqip";
import mango from "../../public/images/shoes/mangoBottega.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000";
import mango1Preview from "../../public/images/shoes/mangoBottega1.jpg?lqip";
import mango1 from "../../public/images/shoes/mangoBottega1.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000";
import mango2Preview from "../../public/images/shoes/mangoBottega.jpg?lqip";
import mango2 from "../../public/images/shoes/mangoBottega2.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000";
import mango3Preview from "../../public/images/shoes/mangoBottega3.jpg?lqip";
import mango3 from "../../public/images/shoes/mangoBottega3.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000";
import mango4Preview from "../../public/images/shoes/mangoBottega4.jpg?lqip";
import mango4 from "../../public/images/shoes/mangoBottega4.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000";
import mango5Preview from "../../public/images/shoes/mangoBottega5.jpg?lqip";
import mango5 from "../../public/images/shoes/mangoBottega5.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000";

export default {
  category: "SHOES",
  title: "INSPIRATION",
  date: "17.05.2020",
  picture: { preview: mango5Preview, picture: mango5 },
  content: (
    <>
      <Framer>
        <Picture picture={{ preview: mango5Preview, picture: mango5 }} />
      </Framer>
      <p>
        Mules à talon d'inspiration Bottega Venetta -
        <a href="https://shop.mango.com/fr/femme/chaussure-sandales-a-talon/mules-atalon-cuir_67034423.html?c=77">
          Mango
        </a>
      </p>
      <Framer>
        <Picture picture={{ preview: mangoPreview, picture: mango }} />
      </Framer>
      <Framer>
        <Picture picture={{ preview: mango4Preview, picture: mango4 }} />
      </Framer>
      <Framer>
        <Picture picture={{ preview: mango3Preview, picture: mango3 }} />
      </Framer>
      <Framer>
        <Picture picture={{ preview: mango1Preview, picture: mango1 }} />
      </Framer>
      <Framer>
        <Picture picture={{ preview: mango2Preview, picture: mango2 }} />
      </Framer>
    </>
  ),
};
