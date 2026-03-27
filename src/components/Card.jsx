import { NavLink } from "react-router";
import dawnloadImg from "../assets/images/icon-downloads.png";
import ratingImg from "../assets/images/icon-ratings.png";

const Card = ({ data }) => {
  return (
    <NavLink to={`/details/${data.id}`} className="block h-full">
      <div className="card h-full bg-[#D9D9D9] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between overflow-hidden">
        <figure className="px-4 pt-4">
          <img
            src={data.image}
            alt={data.title}
            className="rounded-xl w-full  object-cover bg-white"
          />
        </figure>

        <div className="card-body p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-[#001931] mb-4 min-h-[56px] line-clamp-2">
            {data.title}
          </h3>
          <div className="flex justify-between items-center mt-auto gap-2">
            <div className="flex items-center gap-1 bg-[#F1F5E8] px-3 py-2 rounded-xl flex-1 justify-center">
              <img className="w-4 h-4" src={dawnloadImg} alt="downloads" />
              <span className="text-[#00D390] font-bold text-sm">
                {data.downloads >= 1000
                  ? `${(data.downloads / 1000).toFixed(1)}k`
                  : data.downloads}
              </span>
            </div>

            <div className="flex items-center gap-1 bg-[#FFF0E1] px-3 py-2 rounded-xl flex-1 justify-center">
              <img className="w-4 h-4" src={ratingImg} alt="ratings" />
              <span className="font-bold text-sm text-[#FF8811]">
                {data.ratingAvg}
              </span>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
