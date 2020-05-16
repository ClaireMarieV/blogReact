import { useState } from "react";

const Picture = ({ picture }) => {
  const [pictureLoaded, setPictureLoaded] = useState(false);

  if (typeof picture === "object" && !picture.preview) {
    picture = picture.picture;
  }
  if (typeof picture === "string") {
    return <img src={picture} />;
  } else {
    return (
      <>
        <img
          src={picture.picture}
          onLoad={() => setPictureLoaded(true)}
          hidden={!pictureLoaded}
        />
        <img className="preview" src={picture.preview} hidden={pictureLoaded} />
        <style jsx>{`
          .preview {
            filter: blur(2px);
          }
        `}</style>
      </>
    );
  }
};

export default Picture;
