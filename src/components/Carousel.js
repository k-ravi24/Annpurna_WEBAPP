import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

const Carousel = ({ spaceBetween }) => {
  const carouselContainer = useRef(null);
  const carousel = useRef(null);
  const card = useRef(null);
  const [carouselReference, setCarouselReference] = useState({
    carouselContainerWidth: 0,
    carouselWidth: 0,
    cardWidth: 0,
  });

  useEffect(() => {
    setCarouselReference({
      carouselContainerWidth: carouselContainer.current.offsetWidth,
      carouselWidth: carousel.current.offsetWidth,
      cardWidth: carousel.current.offsetWidth,
    });
  }, [carouselContainer, carousel, card]);

  const handleRightArrowClick = () => {
    carouselContainer.current.scrollLeft += carouselReference.cardWidth;
  };

  const handleLeftArrowClick = () => {
    carouselContainer.current.scrollLeft -= carouselReference.cardWidth;
  };
  return (
    <div className="w-full h-full relative mid-laptop:px-12">
      <div className="overflow-hidden" ref={carouselContainer}>
        <div
          className={`w-fit flex overflow-x-scroll`}
          style={{ gap: `${spaceBetween}px` }}
          ref={carousel}
        >
          <div
            style={{
              width: "20rem",
              height: "15rem",
              border: "1px solid black",
              borderRadius: "0.375rem",
            }}
            ref={card}
          >
            This is Card
          </div>

          <div
            style={{
              width: "20rem",
              height: "15rem",
              border: "1px solid black",
              borderRadius: "0.375rem",
            }}
          >
            This is Card
          </div>

          <div
            style={{
              width: "20rem",
              height: "15rem",
              border: "1px solid black",
              borderRadius: "0.375rem",
            }}
          >
            This is Card
          </div>

          <div
            style={{
              width: "20rem",
              height: "15rem",
              border: "1px solid black",
              borderRadius: "0.375rem",
            }}
          >
            This is Card
          </div>

          <div
            style={{
              width: "20rem",
              height: "15rem",
              border: "1px solid black",
              borderRadius: "0.375rem",
            }}
          >
            This is Card
          </div>

          <div
            style={{
              width: "20rem",
              height: "15rem",
              border: "1px solid black",
              borderRadius: "0.375rem",
            }}
          >
            This is Card
          </div>

          <div
            style={{
              width: "20rem",
              height: "15rem",
              border: "1px solid black",
              borderRadius: "0.375rem",
            }}
          >
            This is Card
          </div>

          <div
            style={{
              width: "20rem",
              height: "15rem",
              border: "1px solid black",
              borderRadius: "0.375rem",
            }}
          >
            This is Card
          </div>

          <div
            style={{
              width: "20rem",
              height: "15rem",
              border: "1px solid black",
              borderRadius: "0.375rem",
            }}
          >
            This is Card
          </div>

          <div
            style={{
              width: "20rem",
              height: "15rem",
              border: "1px solid black",
              borderRadius: "0.375rem",
            }}
          >
            This is Card
          </div>
        </div>
      </div>

      {/* left arrow */}
      <div
        className="absolute hidden top-1/2 left-0 rounded-full bg-slate-900 text-white mid-laptop:w-8 mid-laptop:h-8 mid-laptop:flex items-center justify-center"
        onClick={handleLeftArrowClick}
      >
        <ArrowBack fontSize="sm" />
      </div>

      {/* right arrow */}
      <div
        className="absolute top-1/2 right-0 hidden mid-laptop:flex items-center justify-center mid-laptop:w-8 mid-laptop:h-8 bg-slate-800 text-white rounded-full"
        onClick={handleRightArrowClick}
      >
        <ArrowForward fontSize="sm" />
      </div>
    </div>
  );
};

export default Carousel;
