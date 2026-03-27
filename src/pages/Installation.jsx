import { useLoaderData } from "react-router";
import InstallationOption from "../components/InstallationOption";
import InstolledApp from "../components/InstolledApp";
import { useEffect, useState } from "react";
import { getStoreBook } from "../Utility/AddToDb";

const Installation = () => {
  const [download, setDownload] = useState([]);

  const data = useLoaderData();

  useEffect(() => {
    const storeAppData = getStoreBook();
    const convertStoreApp = storeAppData.map((id) => parseInt(id));
    const myInstollApp = data.filter((app) => convertStoreApp.includes(app.id));
    setDownload(myInstollApp);
  }, []);
  return (
    <div className="bg-[#F5F5F5]">
      <div className="lg:max-w-11/12 mx-auto">
        <InstallationOption download={download}></InstallationOption>
        {download.map((data) => (
          <InstolledApp data={data} key={data.id}></InstolledApp>
        ))}
      </div>
    </div>
  );
};

export default Installation;
