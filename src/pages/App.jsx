import React, { Suspense } from "react";
import Loading from "../components/Looading";
import AllAppFound from "../components/AllAppFound";

const App = () => {
  const appData = fetch("allApp.json").then((res) => res.json());
  return (
    <div className="bg-[#F5F5F5]">
      <div className="lg:max-w-11/12 mx-auto px-4 lg:px-0">
        <div className="text-center pt-14 pb-10 space-y-2">
          <h4 className="text-4xl font-bold">Our All Applications</h4>
          <p className="text-xl text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="bg-[#F5F5F5]">
          <Suspense fallback={<Loading></Loading>}>
            <AllAppFound appData={appData}></AllAppFound>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default App;
