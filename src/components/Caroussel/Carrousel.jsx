import { useState } from "react";
import "./Carrousel.scss";
import arrowLeft from "../../assets/images/arrow-left.png";
import arrowRight from "../../assets/images/arrow-right.png";

function Carrousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!images || images.length === 0) {
    return null;
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carrousel">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carrousel__image"
      />
      {images.length > 1 && (
        <>
          <button className="carrousel__arrow carrousel__arrow--left">
            <img src={arrowLeft} alt="Previous" onClick={handlePrevious} />
          </button>
          <button className="carrousel__arrow carrousel__arrow--right">
            <img src={arrowRight} alt="Next" onClick={handleNext} />
          </button>
          <p className="carrousel__counter">
            {currentIndex + 1} / {images.length}
          </p>
        </>
      )}
    </div>
  );
}

export default Carrousel;
