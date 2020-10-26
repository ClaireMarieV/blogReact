import { useState, useEffect } from "react";

const Picture = ({ picture, alt }) => {
  const [pictureLoaded, setPictureLoaded] = useState(false);
  let imageElement = null;

  const imageRefUpdated = (image) => {
    if (image) {
      imageElement = image;
      if (image.complete) {
        setPictureLoaded(true);
      }
    }
  };

  useEffect(() => {
    imageRefUpdated(imageElement);
  });

  if (typeof picture === "string") {
    return <img src={picture} />;
  } else {
    return (
      <>
        <div className="picture">
          <img
            alt={alt}
            src={picture.picture.src || picture.picture}
            srcSet={picture.picture.srcSet}
            ref={imageRefUpdated}
            onLoad={() => setPictureLoaded(true)}
            hidden={!pictureLoaded}
          />
          <img
            alt={alt}
            className="preview"
            src={picture.preview}
            hidden={pictureLoaded}
          />
        </div>
        <style jsx>{`
          .picture {
            max-width: 33rem;
            margin: auto;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}</style>
      </>
    );
  }
};

export default Picture;
