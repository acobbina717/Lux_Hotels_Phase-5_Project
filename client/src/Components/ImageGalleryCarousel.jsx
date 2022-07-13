import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const ImageGalleryCarousel = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="App">
      <LightGallery onInit={onInit} speed={500}>
        <a href="https://images.trvl-media.com/hotels/17000000/16120000/16118500/16118408/6a998fbf.jpg?impolicy=resizecrop&rw=1200&ra=fit">
          <img
            alt="img1"
            src="https://images.trvl-media.com/hotels/17000000/16120000/16118500/16118408/6a998fbf.jpg?impolicy=resizecrop&rw=1200&ra=fit"
          />
        </a>
        <a href="img/img2.jpg">
          <img alt="img2" src="img/thumb2.jpg" />
        </a>
        ...
      </LightGallery>
    </div>
  );
};

export default ImageGalleryCarousel;
