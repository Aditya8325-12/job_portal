import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
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
  const [salaryRange, setSalaryRange] = useState("");
  const [jobType, setJobType] = useState("");
  const [datePosted, setDatePosted] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 15;

  const toggleWorkMode = (mode) => {
    setWorkModes((prev) => ({ ...prev, [mode]: !prev[mode] }));
  };

  // Scroll to top whenever currentPage changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Filtering logic
  const filteredJobs = jobData.filter((job) => {
    const keywordMatch =
      keyword === "" ||
      job.title.toLowerCase().includes(keyword.toLowerCase()) ||
      job.description.toLowerCase().includes(keyword.toLowerCase());

    const locationMatch = location === "" || job.location === location;

    const categoryMatch = category === "" || job.category === category;

    const salaryMatch =
      salaryRange === "" ||
      (job.salary >= parseInt(salaryRange.split("-")[0]) &&
        job.salary <= parseInt(salaryRange.split("-")[1]));

    const jobTypeMatch = jobType === "" || job.type === jobType;

    const datePostedMatch = datePosted === "" || job.datePosted >= datePosted;

    const companySizeMatch =
      companySize === "" || job.companySize === companySize;

    const educationLevelMatch =
      educationLevel === "" || job.educationLevel === educationLevel;

    return (
      keywordMatch &&
      locationMatch &&
      categoryMatch &&
      salaryMatch &&
      jobTypeMatch &&
      datePostedMatch &&
      companySizeMatch &&
      educationLevelMatch
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + jobsPerPage);

  return (
    <div className="w-full flex flex-col items-center bg-gray-100 pt-16">
      {/* Search Form */}
      <div className="container sticky flex flex-col justify-between h-full px-6 mx-auto pt-4 pb-2">
        <form className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-4 mt-4 p-4">
          <input
            type="text"
            placeholder="Keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="flex-1 px-4 py-1.5 bg-white placeholder:text-black border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="select w-full md:w-48 text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
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
            className="select w-full md:w-48 px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="">Select Category</option>
            <option value="engineering">Engineering</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
            <option value="sales">Sales</option>
          </select>

          <button
            type="button"
            className="px-6 py-2 bg-gradient-to-r from-sky-400 to-blue-600 text-white rounded-md hover:bg-sky-700 transition"
          >
            Search
          </button>
        </form>
      </div>

      {/* Main Content */}
      <div className="w-10/12 flex mt-4">
        {/* Filter Sidebar */}
        <div className="w-3/12 sticky top-20 h-fit p-2">
          <div className="p-4 bg-white shadow-xl rounded space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">All Filters</h2>
              <span className="text-blue-600 cursor-pointer text-sm">
                Applied 2
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

            {/* Salary Range */}
            <div>
              <h3 className="font-medium mb-2">Salary Range</h3>
              <select
                value={salaryRange}
                onChange={(e) => setSalaryRange(e.target.value)}
                className="select w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="">Select Salary Range</option>
                <option value="0-50000">$0 - $50,000</option>
                <option value="50000-100000">$50,000 - $100,000</option>
                <option value="100000-150000">$100,000 - $150,000</option>
                <option value="150000-200000">$150,000 - $200,000</option>
              </select>
            </div>

            {/* Job Type */}
            <div>
              <h3 className="font-medium mb-2">Job Type</h3>
              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="select w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="">Select Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
                <option value="Temporary">Temporary</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            {/* Date Posted */}
            <div>
              <h3 className="font-medium mb-2">Date Posted</h3>
              <select
                value={datePosted}
                onChange={(e) => setDatePosted(e.target.value)}
                className="select w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="">Select Date Posted</option>
                <option value="24">Last 24 Hours</option>
                <option value="7">Last 7 Days</option>
                <option value="30">Last 30 Days</option>
              </select>
            </div>

            {/* Company Size */}
            <div>
              <h3 className="font-medium mb-2">Company Size</h3>
              <select
                value={companySize}
                onChange={(e) => setCompanySize(e.target.value)}
                className="select w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="">Select Company Size</option>
                <option value="Startup">Startup</option>
                <option value="SME">SME</option>
                <option value="Large Enterprise">Large Enterprise</option>
              </select>
            </div>

            {/* Education Level */}
            <div>
              <h3 className="font-medium mb-2">Education Level</h3>
              <select
                value={educationLevel}
                onChange={(e) => setEducationLevel(e.target.value)}
                className="select w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="">Select Education Level</option>
                <option value="High School">High School</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Master">Master</option>
                <option value="PhD">PhD</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job Cards */}
        <div className="w-6/12 h-fit flex flex-col gap-4 p-2">
          {currentJobs.length > 0 ? (
            currentJobs.map((job, index) => (
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
        <div className="w-3/12 p-2 sticky top-20 h-fit flex flex-col gap-3">
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

      <div className="w-10/12 py-6 flex justify-end items-center">
        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="relative inline-flex items-center cursor-pointer px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            disabled={currentPage === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`relative inline-flex items-center cursor-pointer px-4 py-2 border text-sm font-medium ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="relative inline-flex items-center px-2 py-2 cursor-pointer rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            disabled={currentPage === totalPages}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Jobs;
