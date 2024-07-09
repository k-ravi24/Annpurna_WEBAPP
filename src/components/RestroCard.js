import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import vegan from "../../Images/whyvegan.jpg";
import Text from "./Text";

const RestroCard = ({ name, address, cuisines, type, thumbnail, rating }) => {
  return (
    <>
      <div className="w-[17rem] h-[19rem] shadow-md rounded-md">
        <div className="w-full h-3/5 rounded-t-md">
          <img src={thumbnail.url} className="w-full h-full rounded-t-md" />
        </div>
        <div className="w-full border border-slate-200 h-2/5 px-2 py-1.5 font-inter rounded-b-md">
          <div className="text-slate-800 font-semibold small-laptop:text-lg">
            <Text text={name} />
          </div>

          <div className="text-slate-800 font-semibold small-laptop:text-sm line-clamp-1">
            {cuisines.map((item, index) => {
              if (index === cuisines.length - 1) {
                return item;
              } else {
                return `${item}, `;
              }
            })}
          </div>
          <div className="w-full flex items-center">
            <div className="text-slate-800 font-semibold">
              {rating.avgRating}
            </div>
            <div className="text-yellow-500 flex items-center h-full">
              <StarIcon fontSize="sm" />
            </div>
            <div className="text-sm font-semibold text-slate-600 pl-2">
              ({rating.totalRatingString})
            </div>
          </div>
          <div className="w-full flex font-semibold">
            {/* <div className="text-slate-400">
              <LocationOnIcon />
            </div> */}
            <div className="line-clamp-2 text-sm text-slate-700">
              {address.locality}, {address.city}, {address.state},{" "}
              {address.country} - {address.pincode}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestroCard;
