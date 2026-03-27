import React, { use, useState } from "react";
import AllCard from "./AllCard";

const AllAppFound = ({ appData }) => {
  const data = use(appData);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredApps = data.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <div className="flex justify-between py-4">
        <div>
          <p className="font-semibold text-xl">
            ({filteredApps.length}) Apps Found
          </p>
        </div>
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              type="search"
              required
              placeholder="Search"
            />
          </label>
        </div>
      </div>

      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-5">
          {filteredApps.map((data) => (
            <AllCard key={data.id} data={data}></AllCard>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-dashed border-gray-300">
          <h3 className="text-2xl font-bold text-gray-400">No App Found!</h3>
          <p className="text-gray-500">
            We couldn't find any app matching "{searchTerm}"
          </p>
        </div>
      )}
    </div>
  );
};

export default AllAppFound;
