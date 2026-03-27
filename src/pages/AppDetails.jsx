import { useLoaderData, useParams } from "react-router";
import dawnload from "../assets/images/icon-downloads.png";
import star from "../assets/images/icon-ratings.png";
import reviw from "../assets/images/icon-review.png";
import { addToStoreDb } from "../Utility/AddToDb";

const AppDetails = () => {
  const { id } = useParams();

  const data = useLoaderData();

  const singleApp = data.find((data) => data.id == id);
  console.log(singleApp);
  const {
    image,
    title,
    description,
    companyName,
    downloads,
    ratingAvg,
    reviews,
  } = singleApp;

  const handelDawnload = (id) => {
    addToStoreDb(id);
  };

  return (
    <div className="bg-[#F5F5F5] pt-12">
      <div className="max-w-11/12 mx-auto">
        <div className="flex items-center flex-col md:flex-row  gap-3 ">
          <div>
            <img src={image} alt="" />
          </div>
          <div className="flex flex-col gap-4 md:gap-5 py-2">
            <div>
              <h3 className="font-bold text-xl md:text-3xl">{title}</h3>
              <p className="text-xl txt-[#627382]">
                Developed by
                <span className="text-[#9F62F2]"> {companyName}</span>
              </p>
            </div>
            <div className="flex gap-14">
              <div className="space-y-2">
                <img src={dawnload} alt="" />
                <p>Downloads</p>
                <p className="font-bold text-2xl">{downloads}</p>
              </div>
              <div className="space-y-2">
                <img src={star} alt="" />
                <p>Average Ratings</p>
                <p className="font-bold text-2xl">{ratingAvg}</p>
              </div>
              <div className="space-y-2">
                <img src={reviw} alt="" />
                <p>Reviews</p>
                <p className="font-bold text-2xl">{reviews}</p>
              </div>
            </div>

            <div>
              <p
                onClick={() => handelDawnload(id)}
                className="bg-[#00D390] inline-block text-center py-2 px-3 btn"
              >
                Install Now (291 MB)
              </p>
            </div>
          </div>
        </div>
        <h4 className="my-3 font-bold text-xl">Description</h4>
        <div className="space-y-10 text-[#627382] pb-12">
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
