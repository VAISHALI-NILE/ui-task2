import React, { useState } from "react";
import "./ImageSlider.css";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/235990/pexels-photo-235990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const selectImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <h1>Image Viewer</h1>
      <h2>Few Images are here!</h2>
      <button className="slider-button prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <div className="slider-image">
        <div className="image-tracker">
          {currentIndex + 1} / {images.length}
        </div>
        <img src={images[currentIndex]} alt="" />
      </div>
      <button className="slider-button next" onClick={goToNext}>
        &#10095;
      </button>

      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`thumbnail ${index === currentIndex ? "active" : ""}`}
            onClick={() => selectImage(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
