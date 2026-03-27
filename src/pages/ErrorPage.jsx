import { NavLink } from "react-router";
import notFoundImg from "../assets/images/error-404.png";
const ErrorPage = () => {
  return (
    <div className="px-4">
      <div className="py-16">
        <img className="mx-auto" src={notFoundImg} alt="" />
      </div>
      <div className="text-center space-y-3 pb-10">
        <h3 className="text-2xl md:text-5xl font-bold">
          Oops, page not found!
        </h3>
        <p className="text-[#627382] font-bold">
          The page you are looking for is not available.
        </p>
        <NavLink to="/" className="btn text-[white] bg-[#975BF0] px-10 py-2 text-md">
          Go Back
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
