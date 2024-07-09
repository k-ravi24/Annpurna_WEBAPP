import { ArrowBack, ArrowForward } from "@mui/icons-material";
import RestroCard from "./RestroCard";
import { useEffect, useRef, useState } from "react";

const Carousel = ({ restaurants }) => {
  const carouselContainer = useRef(null);
  const card = useRef(null);
  const carousel = useRef(null);
  const [carouselRefernce, setCarouselReference] = useState({
    carouselContainerWidth: 0,
    cardWidth: 0,
    carouselWidth: 0,
  });
  const [activeLeftArrow, setActiveLeftArrow] = useState(false);
  const [activeRightArrow, setActiveRightArrow] = useState(true);
  useEffect(() => {
    setCarouselReference({
      carouselContainerWidth: carouselContainer.current.offsetWidth,
      cardWidth: card.current.offsetWidth,
      carouselWidth: carousel.current.offsetWidth,
    });

    console.log(carouselContainer.current.offsetWidth);
    console.log(card.current.offsetWidth);
  }, [carouselContainer, card]);

  console.log(carouselRefernce);

  const handleLeftArrow = () => {
    carouselContainer.current.scrollLeft -= carouselRefernce.cardWidth + 16;
    if (carouselContainer.current.scrollLeft > 0) {
      setActiveLeftArrow(true);
    } else {
      setActiveLeftArrow(false);
    }

    if (
      carouselContainer.current.scrollLeft +
        carouselRefernce.carouselContainerWidth ===
      carouselRefernce.carouselWidth
    ) {
      setActiveRightArrow(false);
    } else {
      setActiveRightArrow(true);
    }
  };

  const handleRightArrow = () => {
    carouselContainer.current.scrollLeft += carouselRefernce.cardWidth + 16;
    if (carouselContainer.current.scrollLeft > 0) {
      setActiveLeftArrow(true);
    } else {
      setActiveLeftArrow(false);
    }

    if (
      carouselContainer.current.scrollLeft +
        carouselRefernce.carouselContainerWidth ===
      carouselRefernce.carouselWidth
    ) {
      setActiveRightArrow(false);
    } else {
      setActiveRightArrow(true);
    }
  };
  return (
    <>
      <div className="w-full overflow-hidden px-12 relative">
        <div
          className="w-full overflow-x-scroll hide-scrollbar"
          ref={carouselContainer}
        >
          <div className="w-fit" ref={carousel}>
            <div className={`w-fit flex`}>
              {restaurants.map((item) => (
                <div
                  key={item.id}
                  className="small-laptop:mr-2 mid-laptop:mr-4 last:small-laptop:mr-0"
                  ref={card}
                >
                  <RestroCard
                    name={item.name}
                    address={item.address}
                    cuisines={item.cuisines}
                    type={item.type}
                    rating={item.rating}
                    thumbnail={item.thumbnail}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* left arrow */}
        <button
          className={`absolute top-1/2 left-0 small-laptop:w-8 small-laptop:h-8 rounded-full text-white hidden small-laptop:flex items-center justify-center ${
            activeLeftArrow ? "bg-slate-800" : "bg-slate-500"
          }`}
          onClick={handleLeftArrow}
        >
          <ArrowBack fontSize="sm" />
        </button>
        {/* right arrow */}
        <button
          className={`absolute top-1/2 right-0 small-laptop:flex items-center justify-center text-white hidden small-laptop:w-8 small-laptop:h-8 rounded-full ${
            activeRightArrow ? "bg-slate-800" : "bg-slate-500"
          }`}
          onClick={handleRightArrow}
        >
          <ArrowForward fontSize="sm" />
        </button>
      </div>
    </>
  );
};

export default Carousel;
