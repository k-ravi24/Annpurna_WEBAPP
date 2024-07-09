import { ArrowBack, ArrowForward } from "@mui/icons-material";
import RestroCard from "./RestroCard";

const Carousel = ({ restaurants }) => {
  return (
    <>
      <div className="w-full overflow-hidden px-12 relative">
        <div className="w-full overflow-x-scroll hide-scrollbar">
          <div className="w-fit">
            <div className={`w-fit flex`}>
              {restaurants.map((item) => (
                <div
                  key={item.id}
                  className="small-laptop:mr-2 mid-laptop:mr-4"
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
        <button className="absolute top-1/2 left-0 small-laptop:w-8 small-laptop:h-8 rounded-full text-white hidden small-laptop:flex items-center justify-center bg-slate-800">
          <ArrowBack fontSize="sm" />
        </button>
        {/* right arrow */}
        <button className="absolute top-1/2 right-0 small-laptop:flex items-center justify-center bg-slate-800 text-white hidden small-laptop:w-8 small-laptop:h-8 rounded-full">
          <ArrowForward fontSize="sm" />
        </button>
      </div>
    </>
  );
};

export default Carousel;
