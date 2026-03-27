import { use } from "react";
import AllCard from "./AllCard";

const AllApp = ({ appData }) => {
  const apidata = use(appData);

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5">
        {apidata.map((data) => (
          <AllCard key={data.id} data={data}></AllCard>
        ))}
      </div>
    </div>
  );
};

export default AllApp;
