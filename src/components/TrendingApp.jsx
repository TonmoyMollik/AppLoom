import { use } from "react";
import Card from "./Card";

const TrendingApp = ({ appData }) => {
  const apidata = use(appData);

  return (
    <div className="lg:max-w-11/12 mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {apidata.map((data) => (
          <Card key={data.id} data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default TrendingApp;
