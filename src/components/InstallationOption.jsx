const InstallationOption = ({ download }) => {
  const data = download;
  return (
    <div className="py-4">
      <div className="text-center pt-14 pb-10 space-y-2">
        <h4 className="text-4xl font-bold">Your Installed Apps</h4>
        <p className="text-xl text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="font-semibold text-xl">{data.length} Apps Found</p>
        </div>
        <div>
          <select defaultValue="Pick a color" className="select">
            <option disabled={true}>Pick a color</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default InstallationOption;
