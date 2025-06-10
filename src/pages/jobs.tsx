import Navbar from "@/components/navbar";
import { useState } from "react";
import { jobData } from "@/components/sample_data.tsx/data";

function Jobs() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [experience, setExperience] = useState(1);
  const [workModes, setWorkModes] = useState({
    office: false,
    hybrid: false,
    remote: false,
  });

  const toggleWorkMode = (mode) => {
    setWorkModes((prev) => ({ ...prev, [mode]: !prev[mode] }));
  };

  // Filtering logic
  const filteredJobs = jobData.filter((job) => {
    const keywordMatch =
      keyword === "" ||
      job.title.toLowerCase().includes(keyword.toLowerCase()) ||
      job.description.toLowerCase().includes(keyword.toLowerCase());

    const locationMatch = location === "" || job.location === location;

    const categoryMatch = category === "" || job.category === category;

    return keywordMatch && locationMatch && categoryMatch;
  });

  return (
    <div className="w-full flex flex-col items-center bg-gray-100 pt-20 ">
      {/* Search Form */}
      <div className="container relative flex flex-col justify-between h-full px-6 mx-auto mt-5">
        <form className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-4 mt-4 p-4">
          <input
            type="text"
            placeholder="Enter keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="flex-1 px-4 py-2 placeholder:text-black border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full md:w-48 text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="">Select Location</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Pune">Pune</option>
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full md:w-48 px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="">Select Category</option>
            <option value="engineering">Engineering</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
            <option value="sales">Sales</option>
          </select>

          <button
            type="button"
            className="px-6 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition"
          >
            Search
          </button>
        </form>
      </div>

      {/* Main Content */}
      <div className="w-10/12 flex mt-4">
        {/* Filter Sidebar */}
        <div className="w-3/12 h-fit p-2">
          <div className="p-4 bg-white shadow-xl rounded space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">All Filters</h2>
              <span className="text-blue-600 cursor-pointer text-sm">
                Applied ({experience}+)
              </span>
            </div>

            {/* Experience Slider */}
            <div>
              <h3 className="font-medium mb-2">Experience</h3>
              <div className="relative pt-6">
                <input
                  type="range"
                  min="0"
                  max="30"
                  value={experience}
                  onChange={(e) => setExperience(Number(e.target.value))}
                  className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div
                  className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-black text-white text-xs rounded-full w-6 h-6"
                  style={{ left: `${(experience / 30) * 100}%` }}
                >
                  {experience}
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>0 Yrs</span>
                  <span>30 Yrs</span>
                </div>
              </div>
            </div>

            {/* Work Mode Checkboxes */}
            <div>
              <h3 className="font-medium mb-2">Work mode</h3>
              <div className="space-y-2 text-sm text-gray-700">
                {["office", "hybrid", "remote"].map((mode) => (
                  <label key={mode} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={workModes[mode]}
                      onChange={() => toggleWorkMode(mode)}
                      className="accent-blue-600"
                    />
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                    <span className="text-gray-400 ml-auto">(123)</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Job Cards */}
        <div className="w-6/12 flex flex-col gap-4 p-2">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div
                key={index}
                className="w-full h-56 shadow-xl border border-gray-200 rounded-md p-4 flex flex-col justify-between bg-white hover:shadow-2xl transition"
              >
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {job.title}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {job.company} — {job.location}
                  </p>
                  <p className="text-sm mt-2 text-gray-700 line-clamp-3">
                    {job.description}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                  <span>{job.type}</span>
                  <button className="text-blue-500 hover:underline">
                    Apply
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 mt-10">No jobs found</div>
          )}
        </div>

        {/* Suggestions/Users */}
        <div className="w-3/12 p-2 flex flex-col gap-3">
          {["Jan", "John", "Mike"].map((name, index) => (
            <div
              key={index}
              className="relative border border-gray-200 rounded-lg shadow-lg bg-white"
            >
              <button className="absolute p-1 bg-gray-100 border border-gray-300 rounded-full -top-1 -right-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="flex items-center p-4">
                <img
                  className="object-cover w-12 h-12 rounded-lg"
                  src={`https://randomuser.me/api/portraits/${
                    index === 0 ? "women" : "men"
                  }/${70 + index}.jpg`}
                  alt={`${name} Doe`}
                />
                <div className="ml-3 overflow-hidden">
                  <p className="font-medium text-gray-900">{name} Doe</p>
                  <p className="max-w-xs text-sm text-gray-500 truncate">
                    Some short note or recommendation about this user.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
