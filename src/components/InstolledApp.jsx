import dawnloadImg from "../assets/images/icon-downloads.png";
import ratingImg from "../assets/images/icon-ratings.png";

const InstolledApp = ({ data }) => {
  return (
    <div className="flex gap-1 ">
      <div className="">
        <img className="w-20 md:w-30 rounded-2xl p-2" src={data.image} alt="" />
      </div>

      <div className="flex flex-1 justify-between items-center">
        <div className="space-y-2">
          <h3 className="font-semibold text-md md:text-xl">
            Forest: Focus for Productivity
          </h3>
          <div className="flex  items-center mt-auto gap-2 md:gap-16">
            <div className="flex items-center gap-1   justify-center">
              <img className="w-4 h-4" src={dawnloadImg} alt="downloads" />
              <span className="text-[#00D390] font-bold text-sm">
                {data.downloads}
              </span>
            </div>

            <div className="flex items-center gap-1    justify-center">
              <img className="w-4 h-4" src={ratingImg} alt="ratings" />
              <span className="font-bold text-sm text-[#FF8811]">
                {data.ratingAvg}
              </span>
            </div>
            <p className="text-[#627382] font-semibold">256 MB</p>
          </div>
        </div>

        <div>
          <button className="btn bg-[#00D390]">Uninstoll</button>
        </div>
      </div>
    </div>
  );
};

export default InstolledApp;
