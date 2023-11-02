import React from 'react'
import "./BannerSliderSection.css"
import SimpleImageSlider from "react-simple-image-slider";

const BannerSliderSection = ({ imageURL }) => {
  // Ensure that imageURL is in the expected format for the component
  const images = imageURL ? [{ url: imageURL }] : [];
  console.log(images);

  return (
    <div className="slider-container">
      <SimpleImageSlider
        width="100%"
        height="300px"
        images={imageURL}
        showBullets={false}
        showNavs={false}
        autoPlay={false}
        playDirection="forward"
        duration={2000}
      />
    </div>
  );
}

export default BannerSliderSection;
