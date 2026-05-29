import { TiHomeOutline } from "react-icons/ti";
import { FiClock, FiMenu } from "react-icons/fi";
import { BiStats } from "react-icons/bi";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-3 sm:px-6 md:px-10">
      
      <div className="flex-1">
        <div className="text-xl sm:text-2xl font-black">
          Keen<span className="text-[#244d3fFF]">Keeper</span>
        </div>
      </div>

      
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal px-1 font-bold gap-1">
          <li>
            <NavLink to="/">
              <div className="flex items-center gap-1 p-1">
                <TiHomeOutline />
                <h6>Home</h6>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/timeline">
              <div className="flex items-center gap-1 p-1">
                <FiClock />
                <h6>Timeline</h6>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/stats">
              <div className="flex items-center gap-1 p-1">
                <BiStats />
                <h6>Stats</h6>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      <div className="dropdown dropdown-end md:hidden">
        <label tabIndex={0} className="btn btn-ghost">
          <FiMenu size={22} />
        </label>

        <ul
          tabIndex={0}
          className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold
          "
        >
          <li>
            <NavLink to="/">
              <div className="flex items-center gap-2">
                <TiHomeOutline />
                Home
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/timeline">
              <div className="flex items-center gap-2">
                <FiClock />
                Timeline
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/stats">
              <div className="flex items-center gap-2">
                <BiStats />
                Stats
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
