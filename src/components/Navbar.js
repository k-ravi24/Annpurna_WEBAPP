import Text from "./Text";
import navbar from "../data/navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../Images/logo.jpg";

const Navbar = () => {
  return (
    <>
      <div className="flex small-laptop:h-20 w-full mid-laptop:px-8 small-laptop:px-6 shadow-md">
        <div className="flex items-center h-full">
          <img src={logo} className="small-laptop:w-10" />
        </div>
        <div className="w-full flex small-laptop:pl-8">
          <ul className="hidden small-laptop:flex space-x-5 h-full items-center w-2/5">
            {navbar.map((item, index) => (
              <li
                key={index}
                className="capitalize font-inter font-medium text-slate-700"
              >
                {item.label}
              </li>
            ))}
          </ul>
          <div className="w-3/5 flex items-center justify-end space-x-5">
            <div className="flex items-center cursor-pointer border border-slate-300 rounded-md pl-2 mr-1">
              <div className="text-slate-700">
                <SearchIcon />
              </div>
              <input
                type="search"
                className="outline-none px-2 rounded-md h-10 small-laptop:w-80"
                placeholder="Restaurants and Cuisines (ctrl+s)"
              />
            </div>
            <div className="relative">
              <button className="text-slate-700">
                <ShoppingCartIcon />
              </button>
              <div className="absolute -top-1/3 left-1/3 text-xs font-bold">
                <Text text={"4"} />
              </div>
            </div>
            <button className="text-slate-700">
              <AccountCircleIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
