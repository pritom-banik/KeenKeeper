import { TiHomeOutline } from "react-icons/ti";
import { FiClock } from "react-icons/fi";
import { BiStats } from "react-icons/bi";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1 px-10">
        <div className="text-2xl font-black">
          Keen<span className="text-[#244d3fFF]">Keeper</span>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 font-bold gap-1">
          <li>
            <NavLink to="/">
              <div className="flex justify-center items-center gap-0.5 p-1">
                <TiHomeOutline />
                <h6>Home</h6>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/timeline">
              <div className="flex justify-center items-center gap-0.5 p-1">
                <FiClock />
                <h6>Timeline</h6>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/stats">
              <div className="flex justify-center items-center gap-0.5 p-1">
                <BiStats />
                <h6>Stats</h6>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
