import whyVegan from "../../../Images/whyvegan.jpg";
import noanimalproduct from "../../../Images/noanimalproduct.jpg";
import Text from "../Text";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const InformationalSection = ({ data }) => {
  return (
    <div className="grid small-laptop:grid-cols-2 small-laptop:gap-8 h-96">
      {data.map((info, index) => (
        <div
          className="border border-slate-300 rounded-md shadow-md"
          key={index}
        >
          <div
            className="bg-cover bg-center bg-no-repeat rounded-t-md h-80"
            style={{ backgroundImage: `url(${info.thumbnail.url})` }}
          ></div>
          <div className="w-full h-16 rounded-b-md px-4 py-2 flex justify-between items-center">
            <div className="w-full">
              <div className="font-semibold text-xl font-inter flex items-center justify-center w-fit h-full">
                <Text text={info.info.title} />
              </div>
              <div className="text-slate-500">
                <Text text={info.info.subtitle} />
              </div>
            </div>
            <div>
              <button className="flex px-6 bg-gradient-to-r from-indigo-500 via-slate-400 to-teal-300 py-2 rounded-md bg-slate-800 text-white font-semibold">
                <Text text={info.info.buttonText} />
                <div className="ml-1">
                  <ArrowRightAltIcon />
                </div>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InformationalSection;
