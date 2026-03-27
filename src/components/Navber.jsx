import { NavLink } from "react-router";
import logo from "../assets/images/logo.png";
import githubLogo from "../assets/images/Github.png";

const Navber = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary  underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/app"
          className={({ isActive }) =>
            isActive ? "text-primary  underline" : ""
          }
        >
          App
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/installation"
          className={({ isActive }) =>
            isActive ? "text-primary  underline" : ""
          }
        >
          Installation
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar  lg:max-w-11/12 mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown space-x-2">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu font-bold menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-1 md:gap-2 justify-center">
            <img className="w-8 h-8 md:w-12 md:h-12" src={logo} alt="" />
            <NavLink
              to="/"
              className="text-sm cursor-pointer hover:text-[#733BE7] font-medium md:text-xl"
            >
             AppLoom
            </NavLink>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" font-medium flex gap-8">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/TonmoyMollik/AppLoom"
            target="_blank"
            rel="noopener noreferrer"
            className="btn font-normal  md:font-medium bg-[#763FE8]"
          >
            <img src={githubLogo} alt="" />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
