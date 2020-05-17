import Picture from "../../components/picture";
import aquarellePreview from "../../public/images/style/aquarelle1.jpg?lqip";
import aquarelle from "../../public/images/style/aquarelle1.jpg";
import aquarelle2 from "../../public/images/style/aquarelle4.jpg";

export default {
  category: "STYLE",
  title: "UNE AQUARELLE DE FLEURS",
  date: "05.05.2020",
  picture: { preview: aquarellePreview, picture: aquarelle },
  content: (
    <>
      <div>
        <p></p>
        <p></p>
      </div>
      <div className="imgRow">
        <Picture picture={{ picture: aquarelle2 }} />
      </div>
    </>
  ),
};